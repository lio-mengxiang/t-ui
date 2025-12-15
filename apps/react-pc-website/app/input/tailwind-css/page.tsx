import React from 'react';
import { HowMakeCssInput } from './markdown/how-make-css-input';
import { Catalog } from '@/_components/catalog';
import { catalogList } from './catalog';

export default function Home() {
  return (
    <>
      <div className="grow shrink basis-0 overflow-hidden mx-16 mt-8 mb-12">
        <HowMakeCssInput />
      </div>
      <Catalog items={catalogList} />
    </>
  );
}
