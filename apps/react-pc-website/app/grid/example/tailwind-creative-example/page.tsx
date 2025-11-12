import React from 'react';
import { HowMakeCssButton } from './markdown/traditional-example';
import { Catalog } from '@/_components/catalog';
import { catalogList } from './catalog';

export default function Home() {
  return (
    <>
      <div className="grow shrink basis-0 overflow-hidden mx-16 mt-8 mb-12">
        <HowMakeCssButton />
      </div>
      <div className="hidden z-10 xl:flex xl:w-48 mt-8 pl-0 shrink-0">
        <div className="fixed top-27 overflow-y-auto h-[calc(100vh-100px)]">
          <Catalog items={catalogList} offset={-90} />
        </div>
      </div>
    </>
  );
}
