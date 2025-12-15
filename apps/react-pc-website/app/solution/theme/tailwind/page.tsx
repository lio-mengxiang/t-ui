import React from 'react';
import { catalogList, ThemTailwindSolution } from '../../markdown/theme/tailwind';
import { Catalog } from '@/_components/catalog';

export default function Home() {
  return (
    <>
      <div className="grow shrink basis-0 overflow-hidden mx-16 mt-8 mb-12">
        <ThemTailwindSolution />
      </div>
      <Catalog items={catalogList} />
    </>
  );
}
