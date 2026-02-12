import React from 'react';
import { webUrl } from '../../config';

interface SEOProps {
  /** 页面标题 */
  title?: string;
  /** 页面描述 */
  description?: string;
  /** 当前页面的相对路径，如 "/tutorials/button" */
  path?: string;
  /** 社交分享图路径 */
  image?: string;
  /** 是否为文章类型（默认为 website） */
  type?: 'website' | 'article';
}

const Metadata: React.FC<SEOProps> = ({
  title = '组件库教程社区',
  description = '前端组件库成长社区，分享 React 组件库、Headless UI 封装技巧、组件化开发经验和实战教程，助力开发者快速构建高质量可复用 UI。',
  path = '',
  image = '/favicon.ico',
  type = 'website',
}) => {
  const siteName = '组件库教程社区 | React & Headless UI';
  const fullTitle = title === '组件库教程社区' ? siteName : `${title} - ${siteName}`;
  const siteUrl = `${webUrl}`; //
  const url = `${siteUrl}${path}`;
  const imageUrl = `${siteUrl}${image}`;

  // 结构化数据：提升搜索结果的展示效果
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: fullTitle,
    description: description,
    url: url,
    author: {
      '@type': 'Person',
      name: '孟祥同学',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: '组件库教程社区',
    },
    image: imageUrl,
  };

  return (
    <head>
      {/* --- 基础 SEO --- */}
      <title>{fullTitle}</title>
      <meta name="baidu-site-verification" content="codeva-l58Zj13Nvd" />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="组件库, React 组件库, Headless UI, Headless 组件, 前端组件, 组件化开发, UI 设计, 可复用组件, React 教程, 前端教程, 孟祥同学"
      />
      <meta name="author" content="孟祥同学" />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />

      {/* --- Open Graph / 社交媒体 (WeChat/Facebook/Discord) --- */}
      <meta property="og:site_name" content="组件库教程社区" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* --- Twitter 卡片 --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* --- 结构化数据插入 --- */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </head>
  );
};

export default Metadata;
