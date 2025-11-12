import React from 'react';
import { HowMakeCssInput } from './markdown/how-make-css-input';
import { Catalog } from '@/_components/catalog';
import { catalogList } from './catalog';
import './markdown/example/input.css';

export default function Home() {
  return (
    <>
      <div className="grow shrink basis-0 overflow-hidden mx-16 mt-8 mb-12">
        <HowMakeCssInput />
      </div>
      <div className="hidden z-10 xl:flex xl:w-48 mt-8 pl-0 shrink-0">
        <div className="fixed top-27 overflow-y-auto h-[calc(100vh-100px)]">
          <Catalog items={catalogList} offset={-90} />
        </div>
      </div>
    </>
  );
}
