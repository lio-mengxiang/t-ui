import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const config = {
  speed: 1.0,
  bgColor: '#000',
  pixelColor: '#b5b5b5',
  pixelSize: 2.0,
  baseDensity: 0.4,
  mouseRadius: 0.4,
  mouseStrength: 0.2,
  scale: 3.5,
};

export function ThreeInteractiveSmoke({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>(null);
  const uniformsRef = useRef<Record<string, any>>(null);

  useEffect(() => {
    // 初始化 renderer
    const renderer = new THREE.WebGLRenderer({ antialias: false });
    rendererRef.current = renderer;
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // 场景与相机
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // 工具函数：Hex 转 Vec3
    const hexToVec3 = (hex: string) => {
      const c = new THREE.Color(hex);
      return new THREE.Vector3(c.r, c.g, c.b);
    };

    // uniforms
    const uniforms = {
      uTime: { value: 0.0 },
      uResolution: { value: new THREE.Vector2(width, height) },
      uAspect: { value: width / height },
      uMouse: { value: new THREE.Vector2(-10, -10) },
      uPixelSize: { value: config.pixelSize },
      uColorLevels: { value: 1.6 },
      uContrast: { value: 2.0 },
      uDensity: { value: config.baseDensity },
      uMouseRadius: { value: config.mouseRadius },
      uMouseStrength: { value: config.mouseStrength },
      uScale: { value: config.scale },
      uSpeed: { value: config.speed },
      uBgColor: { value: hexToVec3(config.bgColor) },
      uParticleColor: { value: hexToVec3(config.pixelColor) },
    };
    uniformsRef.current = uniforms;

    const vertexShader = `
      varying vec2 vUv;
      void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision mediump float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform float uAspect;
      uniform vec2 uMouse;
      uniform float uPixelSize;
      uniform float uColorLevels;
      uniform float uContrast;
      uniform float uDensity;
      uniform float uMouseRadius;
      uniform float uMouseStrength;
      uniform float uScale;
      uniform float uSpeed;
      uniform vec3 uBgColor;
      uniform vec3 uParticleColor;
      varying vec2 vUv;

      float random(vec2 p) {
          return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }
      float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) +
                 (c - a) * u.y * (1.0 - u.x) +
                 (d - b) * u.x * u.y;
      }
      float getBayerThreshold(vec2 p) {
          int x = int(mod(p.x, 8.0));
          int y = int(mod(p.y, 8.0));
          int index = x + y * 8;
          float m[64];
          m[0]=0.0;  m[1]=48.0; m[2]=12.0; m[3]=60.0; m[4]=3.0;  m[5]=51.0; m[6]=15.0; m[7]=63.0;
          m[8]=32.0; m[9]=16.0; m[10]=44.0;m[11]=28.0;m[12]=35.0;m[13]=19.0;m[14]=47.0;m[15]=31.0;
          m[16]=8.0; m[17]=56.0;m[18]=4.0; m[19]=52.0;m[20]=11.0;m[21]=59.0;m[22]=7.0; m[23]=55.0;
          m[24]=40.0;m[25]=24.0;m[26]=36.0;m[27]=20.0;m[28]=43.0;m[29]=27.0;m[30]=39.0;m[31]=23.0;
          m[32]=2.0; m[33]=50.0;m[34]=14.0;m[35]=62.0;m[36]=1.0; m[37]=49.0;m[38]=13.0;m[39]=61.0;
          m[40]=34.0;m[41]=18.0;m[42]=46.0;m[43]=30.0;m[44]=33.0;m[45]=17.0;m[46]=45.0;m[47]=29.0;
          m[48]=10.0;m[49]=58.0;m[50]=6.0; m[51]=54.0;m[52]=9.0; m[53]=57.0;m[54]=5.0; m[55]=53.0;
          m[56]=42.0;m[57]=26.0;m[58]=38.0;m[59]=22.0;m[60]=41.0;m[61]=25.0;m[62]=37.0;m[63]=21.0;
          float res = 0.0;
          for(int i=0; i<64; i++) { if(i == index) res = m[i]; }
          return res / 64.0;
      }

      void main() {
          vec2 pixelCoord = floor(gl_FragCoord.xy / uPixelSize);
          vec2 uv = (pixelCoord * uPixelSize) / uResolution.xy;

          vec2 distVec = uv - uMouse;
          distVec.x *= uAspect;
          float dist = length(distVec);
          float mouseEffect = 1.0 - smoothstep(0.0, uMouseRadius, dist);
          float dynamicDensity = uDensity + (mouseEffect * uMouseStrength);

          vec2 noiseUv = uv;
          noiseUv.x *= uAspect;
          float t = uTime * uSpeed;

          float n = noise(noiseUv * uScale - t * 0.05);
          n += noise(noiseUv * (uScale * 2.1) + t * 0.2) * 0.5;
          n = n - dynamicDensity;
          n = pow(max(n, 0.0), uContrast);
          n = smoothstep(0.0, 0.5, n);

          float threshold = getBayerThreshold(pixelCoord);
          float ramp = floor(n * (uColorLevels - 1.0) + threshold) / (uColorLevels - 1.0);

          vec3 finalColor = mix(uBgColor, uParticleColor, clamp(ramp, 0.0, 1.0));
          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    // 交互事件
    const onMouseMove = (e: MouseEvent) => {
      uniforms.uMouse.value.x = e.clientX / width;
      uniforms.uMouse.value.y = 1 - e.clientY / height;
    };
    window.addEventListener('mousemove', onMouseMove);

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.uResolution.value.set(w, h);
      uniforms.uAspect.value = w / h;
    };
    window.addEventListener('resize', onResize);

    // 动画循环
    const animate = (time: number) => {
      uniforms.uTime.value = time * 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate(0);

    // 清理
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className={className} />;
}
