import { dayjs } from '../../_utils';
import { questionsList } from '../../_data';
import { Item } from './item';

interface InterviewListProps {
  filters: {
    company_id: number | null;
    time: { start: string | null; end: string | null };
    type_id: number | null;
  };
}

export function InterviewList({ filters }: InterviewListProps) {
  const filteredQuestions = questionsList.filter((question) => {
    // 基础过滤
    if (filters.company_id && question.company_id !== filters.company_id) return false;
    if (filters.type_id && question.type_id !== filters.type_id) return false;

    // 时间过滤逻辑
    if (filters.time.start || filters.time.end) {
      const questionTime = dayjs(question.created_at_iso);

      // 这里的 '[]' 表示包含开始和结束时间（闭区间）
      // 'day' 表示按天进行比较
      const start = filters.time.start || '1970-01-01'; // 如果没有开始时间，设为最小值
      const end = filters.time.end || '2099-12-31'; // 如果没有结束时间，设为最大值

      if (!questionTime.isBetween(start, end, 'day', '[]')) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="space-y-4 overflow-auto">
      {filteredQuestions.map((question, index) => (
        <div key={index} className="p-4 border border-[var(--color-border-grey)] rounded-lg">
          <Item
            question={question.question}
            round={question.round}
            company_id={question.company_id}
            type_id={question.type_id}
            created_at={question.created_at_iso}
          />
        </div>
      ))}
    </div>
  );
}
