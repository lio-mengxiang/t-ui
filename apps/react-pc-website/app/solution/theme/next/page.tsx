import React from 'react';
import { catalogList, ThemeNextSolution } from '../../markdown/theme/next';
import { Catalog } from '@/_components/catalog';

export default function Home() {
  return (
    <>
      <div className="grow shrink basis-0 overflow-hidden mx-16 mt-8 mb-12">
        <ThemeNextSolution />
      </div>
      <Catalog items={catalogList} />
    </>
  );
}
