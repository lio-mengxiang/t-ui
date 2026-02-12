import { useState } from 'react';
import { companyList, times, typesList } from '../../_data';
import { NSelect } from '../select';

interface FilterProps {
  onFilterChange: (filters: {
    company_id: number | null;
    time: { start: string | null; end: string | null };
    type_id: number | null;
  }) => void;
}

export function SelectFilter({ onFilterChange }: FilterProps) {
  const [companyId, setCompanyId] = useState<number | null>(null);
  const [time, setTime] = useState<{ start: string | null; end: string | null }>({ start: null, end: null });
  const [typeId, setTypeId] = useState<number | null>(null);

  const handleCompanyChange = (value: number | null) => {
    const newCompanyId = value || null;
    setCompanyId(newCompanyId);
    onFilterChange({ company_id: newCompanyId, time, type_id: typeId });
  };

  const handleTimeChange = (value: string | null, option: any) => {
    const endTime = option?.extra || null;
    const newTime = value || null;
    setTime({ start: newTime, end: endTime });
    onFilterChange({ company_id: companyId, time: { start: newTime, end: endTime }, type_id: typeId });
  };

  const handleTypeChange = (value: number | null) => {
    const newTypeId = value || null;
    setTypeId(newTypeId);
    onFilterChange({ company_id: companyId, time, type_id: newTypeId });
  };

  return (
    <div className="flex gap-4 items-center">
      <NSelect
        options={companyList.map((company) => ({ label: company.name, value: company.id }))}
        placeholder="筛选公司"
        className="w-32"
        value={companyId ?? undefined}
        onChange={handleCompanyChange}
        filterOption={(inputValue, option) => {
          return option.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
        }}
      />

      <NSelect
        options={times}
        placeholder="筛选时间"
        className="w-32"
        value={time.start ?? undefined}
        onChange={handleTimeChange}
        filterOption={(inputValue, option) => {
          return option.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
        }}
      />
      <NSelect
        options={typesList.map((type) => ({ label: type.name, value: type.id }))}
        placeholder="题目类型"
        className="w-32 md:flex hidden"
        value={typeId ?? undefined}
        onChange={handleTypeChange}
        filterOption={(inputValue, option) => {
          return option.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1;
        }}
      />
    </div>
  );
}
