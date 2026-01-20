import { Catalog } from '@/_components/catalog';
import { EN, type Locale } from '@/_i18n/routing';
import { ReactNode } from 'react';
import { type NestedAnchorLinkProps } from '../catalog/utils';

export function SharedPage2({
  EnCatalogList,
  ZhCatalogList,
  ZhMarkdown,
  EnMarkdown,
}: {
  EnCatalogList: NestedAnchorLinkProps[];
  ZhCatalogList: NestedAnchorLinkProps[];
  ZhMarkdown: ReactNode;
  EnMarkdown: ReactNode;
}) {
  return async function Page({ params }: { params: { locale: Locale } }) {
    const { locale } = await params;
    return (
      <>
        <div className="grow shrink basis-0 overflow-hidden mx-16 mt-8">{locale === EN ? EnMarkdown : ZhMarkdown}</div>
        <Catalog items={locale === EN ? EnCatalogList : ZhCatalogList} />
      </>
    );
  };
}
