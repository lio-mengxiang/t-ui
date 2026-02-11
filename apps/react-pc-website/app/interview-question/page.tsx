'use client';
import React, { useRef } from 'react';
import { Header } from './_components/header';
import styles from './index.module.css';
import { ThreeInteractiveSmoke } from './_components/bg-shader';
import { CardContainer, CardContent, CardTitle } from './_components/card';

import './select.css';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  // const itemRef = useRef<HTMLDivElement>(null);
  // const center = useCenter(containerRef, itemRef);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className="w-full h-[calc(100vh-36px)] p-4 pt-0 pb-1 ">
        <div className="flex justify-between w-full h-full relative border border-[var(--color-border-grey)]" ref={containerRef}>
          <div className="w-[20%]">das</div>
          <div className="h-full z-10 relative md:w-[70%] w-full overflow-hidden">
            <CardContainer className="h-[calc(100%-12px)] border-0 md:border mt-2 me-2">
              <CardTitle title="面试问题" />
              <CardContent>
                <div>
                  <span>筛选公司</span>
                  <span>面试时间</span>
                  <span>题目类型</span>
                </div>
                <div className="text-white/70 flex items-center gap-3">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHr/7WAAAAFHRSTlMACVGJp7c86P/Elnrx2tJpKhUhL24SGS8AAACuSURBVHgBxZBFEgIxEACJu/L/v1KTiRd7hb5EOhl7/QJCngRlXAjO6JcHUijdUIbejukNfjqrD8TunL6wW76ezofo+47eQUWSknLUnHSXI4YqcCis2SC7pC2qqXgqQgPpKIeNJOk4phBCtDm/kWpjCMFh0u094uD82Kklt9thmyXDRXNb7AUwufI+obR+Rj06LWhDXXEzfBU4IbAe57NGL8aEOI59tzaPbbHo/sMHn6YKq5VbkQsAAAAASUVORK5CYII="
                    alt="蔚来"
                    className="w-8 h-8 rounded-full border-[var(--color-logo-border)] bg-[var(--color-logo-bg)]"
                  />
                  <div className="flex flex-col gap-3">
                    <div className="text-white tracking-wide">
                      讲讲重复渲染的性能优化方法
                      <span className="px-2 py-[2px] rounded-[4px] underline-offset-1 underline text-xs text-white/70 cursor-pointer">
                        gitee 讨论 👉
                      </span>
                    </div>
                    <div className="flex text-xs gap-2 flex-wrap">
                      <span className="px-2 py-[2px] rounded-[4px] border border-[var(--color-border-grey)]">蔚来</span>
                      <span className="px-2 py-[2px] rounded-[4px] border border-[var(--color-border-grey)]">面试时间：2023/10/10</span>
                      <span className="px-2 py-[2px] rounded-[4px] border border-[var(--color-border-grey)]">javascript</span>
                      <span className="px-2 py-[2px] rounded-[4px] border border-[var(--color-border-grey)]">轮次: 1</span>
                    </div>
                  </div>
                </div>
                <div className="pb-6 border-b border-[var(--color-list-border)]"></div>
              </CardContent>
            </CardContainer>
          </div>
          <ThreeInteractiveSmoke className="w-full h-full bg-black overflow-hidden absolute inset-0" />
        </div>
      </div>
    </div>
  );
}
{
  /* <CardContainer className="h-[14%] border-0 md:border mt-4 ml-2">
  <CardTitle title="公告" />
  <CardContent>
    <p className="text-white/80">
      以下面试题为最近 1 个月真实面经。欢迎超低价 9.9 元永久订阅服务, 成为会员即可查看所有面试问题。详情联系微信: a2298613245。
    </p>
  </CardContent>
</CardContainer>; */
}
