export default function RootPage() {
  return (
    <html lang="zh">
      <head>
        <meta httpEquiv="refresh" content={`0; url=${process.env.homeUrl}`} />
        <meta name="baidu-site-verification" content="codeva-l58Zj13Nvd" />
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
