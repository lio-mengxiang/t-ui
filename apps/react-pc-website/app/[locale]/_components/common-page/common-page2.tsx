import { Catalog } from '@/_components/catalog';
import { EN, type Locale } from '@/_i18n/routing';
import { ReactNode } from 'react';
import { type NestedAnchorLinkProps } from '../catalog/utils';
import { cs } from '@/_utils';

export function SharedPage2({
  EnCatalogList,
  ZhCatalogList,
  ZhMarkdown,
  EnMarkdown,
}: {
  EnCatalogList?: NestedAnchorLinkProps[];
  ZhCatalogList?: NestedAnchorLinkProps[];
  ZhMarkdown: ReactNode;
  EnMarkdown: ReactNode;
}) {
  return async function Page({ params }: { params: { locale: Locale } }) {
    const { locale } = await params;
    return (
      <>
        <div className={cs('grow shrink basis-0 overflow-hidden md:mx-24 mx-4  mt-8')}>
          <div className="mx-auto w-full max-w-[900px] min-w-0">{locale === EN ? EnMarkdown : ZhMarkdown}</div>
        </div>
        {EnCatalogList && ZhCatalogList && <Catalog items={locale === EN ? EnCatalogList : ZhCatalogList} />}
      </>
    );
  };
}
