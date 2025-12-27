import { locales, type Locale } from './_i18n';
import { Home } from '@/_components/home';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  // 如果参数不在允许列表，直接返回 404
  if (!locales.includes(locale as Locale)) {
    notFound();
  }
  return <Home />;
}
