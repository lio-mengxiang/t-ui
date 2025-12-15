import React from 'react';
import { HowMakeCssRadio } from './markdown/how-make-css-radio';
import { Catalog } from '@/_components/catalog';
import { catalogList } from './catalog';

export default function Home() {
  return (
    <>
      <div className="grow shrink basis-0 overflow-hidden mx-16 mt-8 mb-12">
        <HowMakeCssRadio />
      </div>
      <Catalog items={catalogList} />
    </>
  );
}
