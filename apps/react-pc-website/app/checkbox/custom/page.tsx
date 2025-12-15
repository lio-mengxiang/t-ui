import React from 'react';
import { HowMakeCssCheckbox } from './markdown/how-make-css-checkbox';
import { Catalog } from '@/_components/catalog';
import { catalogList } from './catalog';

export default function Home() {
  return (
    <>
      <div className="grow shrink basis-0 overflow-hidden mx-16 mt-8 mb-12">
        <HowMakeCssCheckbox />
      </div>
      <Catalog items={catalogList} />
    </>
  );
}
