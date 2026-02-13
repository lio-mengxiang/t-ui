export default function RootPage() {
  return (
    <html lang="zh">
      <head>
        <meta httpEquiv="refresh" content={`0; url=${process.env.homeUrl}`} />
        <meta name="baidu-site-verification" content="codeva-l58Zj13Nvd" />
        <meta name="360-site-verification" content="2396fdba959e348222a94511903924ff" />
        <meta name="sogou_site_verification" content="B0RCX5VowB" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href = '${process.env.homeUrl}'`,
          }}
        />
      </head>
      <body></body>
    </html>
  );
}
