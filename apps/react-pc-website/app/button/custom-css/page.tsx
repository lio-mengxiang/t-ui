import React from 'react';
import { HowMakeCssButton } from './markdown/how-make-css-button';
import { Catalog } from '@/_components/catalog';
import { catalogList } from './catalog';

export default function Home() {
  return (
    <>
      <div className="grow shrink basis-0 overflow-hidden mx-16 mt-8 mb-12">
        <HowMakeCssButton />
      </div>
      <Catalog items={catalogList} />
    </>
  );
}
