'use client';

import React from 'react';
import { catalogList, MustRead } from './markdown/must-read';
import { Catalog } from '@/_components/catalog';

//       };
export default function Home() {
  return (
    <>
      <div className="grow shrink basis-0 overflow-hidden mx-16 mt-8 mb-12">
        <MustRead />
        {/* <span>
          <InputComponent
            placeholder="请输入"
            defaultValue="eqw"
            allowClear
            clearIcon="x"
            autoFitWidth
            style={{ minWidth: 200, maxWidth: 500 }}
          />
        </span> */}
      </div>
      <div className="hidden z-10 xl:flex xl:w-48 mt-8 pl-0 shrink-0">
        <Catalog items={catalogList} offset={-90} />
      </div>
    </>
  );
}
