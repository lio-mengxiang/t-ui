export const dynamicParams = false;
import Metadata from './metadata';
import { RootLayoutContent } from './layout-content';

import '@/globals.css';

import { generateStaticParams } from '@/_components/common-page';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <Metadata />
      <body className="text-color bg-color font-sans">
        <RootLayoutContent>{children}</RootLayoutContent>
      </body>
    </html>
  );
}

export { generateStaticParams };
