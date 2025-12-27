export default function RootPage() {
  return (
    <html lang="zh">
      <head>
        <meta httpEquiv="refresh" content="0; url=/zh" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href = '/zh'`,
          }}
        />
      </head>
      <body></body>
    </html>
  );
}
