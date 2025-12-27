import { gsap } from 'gsap';

// 解二次函数系数 A,B,C
export function solveParabola([x0, y0]: [number, number], [x1, y1]: [number, number], [hx, hy]: [number, number]) {
  const mat = [
    [x0 * x0, x0, 1],
    [x1 * x1, x1, 1],
    [hx * hx, hx, 1],
  ];
  const vec = [y0, y1, hy];

  // 简单三元一次方程解法（克拉默法则）
  function det3(m: number[][]) {
    return (
      m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) -
      m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) +
      m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0])
    );
  }
  function replaceCol(m: any[], col: number, vec: number[]) {
    return m.map((row: any[], i: string | number) => row.map((v: any, j: any) => (j === col ? vec[i as any] : v)));
  }
  const D = det3(mat);
  const Da = det3(replaceCol(mat, 0, vec));
  const Db = det3(replaceCol(mat, 1, vec));
  const Dc = det3(replaceCol(mat, 2, vec));

  return [Da / D, Db / D, Dc / D]; // A,B,C
}

export function createFace(x0: number, y0: number, x1: number, y1: number, container = document.body) {
  const face = document.createElement('div');
  face.className = 'face';
  face.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 500 500">
  <circle cx="250" cy="250" r="200" fill="#fced8d" stroke="#2d140a" stroke-width="10"/>
  <circle cx="180" cy="220" r="25" fill="#2d140a"/>
  <circle cx="320" cy="220" r="25" fill="#2d140a"/>
  <path d="M180 330 Q250 400 320 330" stroke="#2d140a" stroke-width="15" fill="none" stroke-linecap="round"/>
</svg>
`;
  container.appendChild(face);

  // 初始位置
  face.style.position = 'absolute';
  face.style.left = `${x0}px`;
  face.style.top = `${y0}px`;

  // 顶点随机：在中点上方一点
  const hx = (x1 - x0) / 2 + x0;
  const hy = y0 - (10 + Math.random() * 100);

  const [A, B, C] = solveParabola([x0, y0], [x1, y1], [hx, hy]);

  gsap.fromTo(
    face,
    { left: x0 },
    {
      duration: 1 + Math.random() * 1,
      left: x1,
      ease: 'linear',
      onUpdate() {
        const x = parseFloat(gsap.getProperty(face, 'left') as string);
        const y = A * x * x + B * x + C;
        face.style.top = `${y}px`;
      },
      onComplete() {
        face.remove();
      },
    },
  );
}
