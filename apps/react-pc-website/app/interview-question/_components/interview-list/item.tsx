// {
//   id: 72857,
//   question:
//     '给定一个整数数组 nums 和一个整数k。你可以执行最多k次操作，每次操作可以将数组中任意一个元素 +1。请返回在最多 k 次操作后，数组中某个值可能出现的最大频次。',
//   round: 2,
//   created_at: '9-2-2026 03:53:07+00',
//   company_id: 19,
//   answer_id: null,
//   experience_id: '850341392839634944',
//   type_id: 11,
// },

import { companyMap, typesMap } from '../../_data';
import { dayjs } from '../../_utils';

export function Item({
  question,
  round,
  company_id,
  type_id,
  created_at,
}: {
  question: string;
  round: number;
  company_id: number;
  type_id: number;
  created_at: string;
}) {
  const { name, logo } = companyMap[company_id] || {};

  const typeName = typesMap[type_id]?.name;
  return (
    <div className="text-white/70 flex items-center gap-3">
      <img src={logo} alt={name} className="w-8 h-8 rounded-full border-[var(--color-logo-border)] bg-[var(--color-logo-bg)]" />
      <div className="flex flex-col gap-3">
        <div className="text-white tracking-wide">{question}</div>
        <div className="flex text-xs gap-2 flex-wrap">
          <span className="px-2 py-[2px] rounded-[4px] border border-[var(--color-border-grey)]">{name}</span>
          <span className="px-2 py-[2px] rounded-[4px] border border-[var(--color-border-grey)]">{typeName}</span>
          <span className="px-2 py-[2px] rounded-[4px] border border-[var(--color-border-grey)]">
            面试时间：{dayjs(created_at).format('YYYY-MM-DD')}
          </span>
          <span className="px-2 py-[2px] rounded-[4px] border border-[var(--color-border-grey)]">轮次: {round}</span>
        </div>
      </div>
    </div>
  );
}
