import React from 'react';
import { catalogList, ThemeSolution } from '../../markdown/theme/css';
import { Catalog } from '@/_components/catalog';

export default function Home() {
  return (
    <>
      <div className="grow shrink basis-0 overflow-hidden mx-16 mt-8 mb-12">
        <ThemeSolution />
      </div>
      <Catalog items={catalogList} />
    </>
  );
}
