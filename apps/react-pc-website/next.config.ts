import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const GITHUB_PAGE = 'github-page';
const isGithubPage = process.env.APP_ENV === GITHUB_PAGE;
const githubPageBasePath = '/t-ui';

export function getBasePath() {
  if (isGithubPage) {
    return githubPageBasePath;
  }
  return '';
}

export function getHomePath() {
  if (isGithubPage) {
    return githubPageBasePath;
  }
  return '/';
}

// 根据环境变量决定导出目录名
const distDir = process.env.EXPORT_DIR || 'out';

const nextConfig: NextConfig = {
  output: 'export',
  distDir, // 动态设置导出目录
  reactStrictMode: false,
  basePath: getBasePath(),
  env: {
    isGithubPage: getBasePath(),
  },
  images: { unoptimized: true },
  /* config options here */
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  turbopack: {
    resolveAlias: {
      '@t-headless-ui/react': '../../packages/react/src',
    },
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
