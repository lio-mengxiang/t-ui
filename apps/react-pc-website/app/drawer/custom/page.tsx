import React from 'react';
import { HowMakeCssDrawerMDX } from './markdown/how-make-css-drawer';
import { Catalog } from '@/_components/catalog';
import { catalogList } from './catalog';

export default function Home() {
  return (
    <>
      <div className="grow shrink basis-0 overflow-hidden mx-16 mt-8 mb-12">
        <HowMakeCssDrawerMDX />
      </div>
      <Catalog items={catalogList} />
    </>
  );
}
