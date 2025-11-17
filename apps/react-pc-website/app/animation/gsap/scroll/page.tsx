import React from 'react';
import { Catalog } from '@/_components/catalog';
import { Basic, catalogList } from './markdown/must-read';

export default function Home() {
  return (
    <>
      <div className="grow shrink basis-0 overflow-hidden mx-16 mt-8 mb-12">
        <Basic />
      </div>
      <div className="hidden z-10 xl:flex xl:w-48 mt-8 pl-0 shrink-0">
        <Catalog items={catalogList} offset={-90} />
      </div>
    </>
  );
}
