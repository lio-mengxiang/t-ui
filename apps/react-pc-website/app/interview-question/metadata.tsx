import { webUrl } from '../../config';

export default function Metadata() {
  const siteTitle = '前端面试题库 - 10万+真实面经 | 前端面试通';
  const siteDesc =
    '收录10万+前端真实面试题，涵盖字节、阿里、腾讯、美团等大厂近几年真题。包含 React、Vue、JS 算法、浏览器、工程化等深度解析，助力前端开发者斩获高薪 Offer。';
  const siteKeywords =
    '前端面试题, 前端真实面经, 大厂前端面试经验, React面试题, Vue面试题, 前端技术八股文, 前端算法题, 前端校招题库, 前端社招题库, HTML/CSS/JavaScript面试, Node.js面试, TypeScript面试, 前端工程化, 系统设计面试, 前端优化与性能, 前端安全与运维, 移动端开发面试, Git & CI/CD 面试';

  // 构造 JSON-LD 数据
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '前端面试通',
    alternateName: '前端面试题库',
    url: webUrl,
    description: siteDesc,
    author: {
      '@type': 'Person',
      name: '孟祥同学',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${webUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: '前端面试通',
      logo: {
        '@type': 'ImageObject',
        url: `${webUrl}/interview/icon.png`,
      },
    },
  };

  return (
    <head>
      <title>{siteTitle}</title>
      <meta name="author" content="孟祥同学" />
      <link rel="icon" href="/interview/icon.png" />

      {/* 基础 SEO */}
      <meta name="description" content={siteDesc} />
      <meta name="keywords" content={siteKeywords} />

      {/* 百度/中国搜索引擎特化 */}
      <meta name="applicable-device" content="pc,mobile" />
      <meta httpEquiv="Cache-Control" content="no-transform" />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={webUrl} />
      <meta property="og:image" content={`${webUrl}/interview/interview.png`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${webUrl}/interview/interview.png`} />

      <link rel="canonical" href={webUrl} />

      {/* JSON-LD 结构化数据 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </head>
  );
}
