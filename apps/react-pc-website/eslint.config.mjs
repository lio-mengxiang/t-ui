import eslintConfig from '../../eslint.config.mjs';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  ...eslintConfig,
  {
    files: ['./app/**/*.{jsx,tsx}'],
    /**
     * @zh 插件是一个 npm 包，通常输出规则。要确保这个包安装在 ESLint 能请求到的目录下。plugins属性值可以省略包名的前缀 eslint-plugin-。
     * 插件一个主要的作用就是补充规则，缺少 react-hooks 的规则，则需要导入相关规则插件 eslint-plugin-react-hooks
     * @en A plugin is an npm package that typically exports rules. Make sure this package is installed
     * in a location ESLint can request. The value of the plugins property can omit the eslint-plugin- prefix.
     */
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
];
