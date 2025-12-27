export default function RootPage() {
  return (
    <html lang="zh">
      <head>
        <meta httpEquiv="refresh" content={`0; url=${process.env.homeUrl}`} />
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
