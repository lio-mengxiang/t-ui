import globals from 'globals';
import eslintPluginImportX from 'eslint-plugin-import-x';
import jsLint from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactPluginHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsLint from 'typescript-eslint';

/**
 * js lint
 * @zh 如果你使用 typescript, 你也会有 js/mjs 文件在你的项目里，例如 eslint 配置，所以 js 文件的校验会配置在其中
 * @en if you use typescript, but you also have js/mjs file in your configuration file, such as eslint config.
 */
const jsLintConfig = {
  files: ['**/*.{js,mjs,cjs}'],
  rules: {
    ...jsLint.configs.recommended.rules,
  },
};

/**
 * ignore
 */
const ignoresConfig = {
  name: 'ignores',
  ignores: ['**/node_modules/', '**/.vscode/', '**/.husky/'],
};
/**
 * ts lint
 */
const tsLintConfig = [...tsLint.configs.recommended].map((conf) => ({
  ...conf,
  files: ['**/*.{ts,tsx}'],
}));

const tsLintCustomConfig = {
  files: ['**/*.{ts,tsx}'],
  // overwrite typescript rules
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
/**
 * react lint
 */
const reactConfig = [
  {
    ...reactPlugin.configs.flat.recommended,
    ignores: ['./apps/vue-pc-website/**/*.{jsx,tsx}'],
  },
  {
    files: ['**/*.{jsx,tsx}'],
    ignores: ['./apps/vue-pc-website/**/*.{jsx,tsx}'],
    /**
     * @zh 插件是一个 npm 包，通常输出规则。要确保这个包安装在 ESLint 能请求到的目录下。plugins属性值可以省略包名的前缀 eslint-plugin-。
     * 插件一个主要的作用就是补充规则，缺少 react-hooks 的规则，则需要导入相关规则插件 eslint-plugin-react-hooks
     * @en A plugin is an npm package that typically exports rules. Make sure this package is installed
     * in a location ESLint can request. The value of the plugins property can omit the eslint-plugin- prefix.
     */
    plugins: {
      'react-hooks': reactPluginHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactPluginHooks.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/display-name': 'off',
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

/**
 * prettier lint
 */
const prettierConfig = eslintPluginPrettierRecommended;
/**
 * import lint
 */
const importJSConfig = eslintPluginImportX.flatConfigs.recommended;
const importTSConfig = eslintPluginImportX.flatConfigs.typescript;

const importCommonConfig = {
  files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
  rules: {
    'import-x/no-dynamic-require': 'warn',
    'import-x/no-nodejs-modules': 'warn',
  },
};

/**
 * global
 */
const globalsConfig = {
  languageOptions: {
    /**
     * @zh 指定要使用的ECMAScript版本
     * @en Indicates the ECMAScript version of the code being linted.
     */
    ecmaVersion: 2022,
    /**
     * @zh 代码类型，有三种选择：script、module和commonjs，script是指普通的js文件，module是指es6的模块化文件，commonjs是指nodejs的模块化文件
     * @en There are three types of code: script, module, and commonjs. script refers to ordinary js files, module refers to es6 modular files, and commonjs refers to nodejs modular files
     */
    sourceType: 'module',
    /**
     * @zh node 或者浏览器中的全局变量很多，如果我们一个个进行声明显得繁琐,因此就需要用到env，这是对环境定义的一组全局变量的预设
     * @en There are many global variables in node or browser, it would be cumbersome if we declare them one by one, So we need to a preset for a set of global variables defined
     */
    globals: {
      ...globals.browser,
      ...globals.es2021,
      ...globals.node,
    },
  },
};

export default [
  ignoresConfig,
  ...tsLintConfig,
  tsLintCustomConfig,
  jsLintConfig,
  ...reactConfig,
  prettierConfig,
  importJSConfig,
  importTSConfig,
  importCommonConfig,
  globalsConfig,
];
