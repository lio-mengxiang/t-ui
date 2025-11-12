import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import clean from 'vite-plugin-clean';
import preserveDirectives from 'rollup-preserve-directives';
import path from 'node:path';
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    clean(),
    dts({
      outDir: './dist/types',
      entryRoot: 'src',
    }),
    react(),
    preserveDirectives(),
  ],
  build: {
    // sourcemap: true,
    minify: 'esbuild',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.js'),
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies ?? {}), 'react/jsx-runtime'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: undefined,
          dir: 'dist/es',
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: 'dist/cjs',
          preserveModulesRoot: 'src',
        },
      ],
    },
  },
});
