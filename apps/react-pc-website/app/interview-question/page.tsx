'use client';
import { useRef, useState } from 'react';
import { Header } from './_components/header';
import styles from './index.module.css';
import { ThreeInteractiveSmoke } from './_components/bg-shader';
import { CardContainer, CardContent, CardTitle } from './_components/card';
import { SelectFilter } from './_components/filter';
import { InterviewList } from './_components/interview-list/list';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filters, setFilters] = useState<{
    company_id: number | null;
    time: { start: string | null; end: string | null };
    type_id: number | null;
  }>({
    company_id: null,
    time: { start: null, end: null },
    type_id: null,
  });

  const handleFilterChange = (newFilters: {
    company_id: number | null;
    time: { start: string | null; end: string | null };
    type_id: number | null;
  }) => {
    setFilters(newFilters);
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className="w-full h-[calc(100vh-36px)] p-4 pt-0 pb-1 ">
        <div className="flex justify-between w-full h-full relative border border-[var(--color-border-grey)]" ref={containerRef}>
          <div className="z-[1] hidden md:block md:w-[26%] md:pl-[2%] md:pt-[10%]">
            <CardContainer className="md:border pb-2">
              <CardTitle title="注意事项" />
              <CardContent className="text-[12px]">
                <div>右边仅500条示例，解锁7万条真实面经</div>
                <div>仅需 9.9 元上车,（ 后面人多起来会涨价！趁早！）</div>
                <div>群里还会有定期分享</div>
                <div>🔗 微信: a2298613245</div>
              </CardContent>
            </CardContainer>
          </div>
          <div className="h-full z-[1] relative w-full md:w-[70%]">
            <CardContainer className="h-[calc(100%-12px)] border-0 md:border mt-2 overflow-hidden">
              <CardTitle title="面试问题" />
              <CardContent>
                <SelectFilter onFilterChange={handleFilterChange} />
                <InterviewList filters={filters} />
              </CardContent>
            </CardContainer>
          </div>
          <ThreeInteractiveSmoke className="w-full h-full bg-black overflow-hidden absolute inset-0 z-[0]" />
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

// DELETE FROM companies
// WHERE id IN ()

// DELETE FROM interview_questions
// WHERE company_id IN ()

// DELETE FROM experience
// WHERE company_id IN ()
