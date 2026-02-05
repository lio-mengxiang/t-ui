import { type LocaleMessageType } from '@/_i18n/useLocal/useLocal';
import React from 'react';

export interface TableColumnProps {
  title: React.ReactNode;
  dataIndex: string;
  key?: string;
  render?: (value: any, record: any, index: number) => React.ReactNode;
}

interface TableProps {
  columns: TableColumnProps[];
  data: any[];
  rowKey?: string;
  name?: string;
  extends?: string[];
  t: LocaleMessageType;
  type?: string;
  interfaceName?: string;
}

export const ApiTable: React.FC<TableProps> = ({ columns, data, t, rowKey = 'key', name, extends: extendsList, type, interfaceName }) => {
  return (
    <div className="mt-8 mb-8">
      <div className="mb-4">
        <div className="text-lg">{name}</div>
        {interfaceName ? (
          <div className="text-color-500 text-xs mt-1">
            {t.interfaceName}: {interfaceName}
          </div>
        ) : null}
        {extendsList?.length ? (
          <div className="text-color-500 text-xs mt-1">
            {t.inherits}: {extendsList.join('| ')}
          </div>
        ) : null}
      </div>
      <div className="w-full border border-color rounded-t-sm overflow-x-auto">
        <table className="w-full border-collapse text-left font-sans-serif text-sm">
          {!data?.length && (
            <>
              <thead className="text-color border-b border-color bg-color-50">
                <tr>
                  {columns.slice(1, 2).map((col, index) => (
                    <th key={col.key || col.dataIndex || index} className="px-4 py-2 whitespace-nowrap">
                      {col.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-color last:border-b-0">
                  <td className="px-4 py-3">{type}</td>
                </tr>
              </tbody>
            </>
          )}
          {!!data?.length && (
            <>
              <thead className="text-color border-b border-color bg-color-50">
                <tr>
                  {columns.map((col, index) => (
                    <th key={col.key || col.dataIndex || index} className="px-4 py-2 whitespace-nowrap min-w-[10rem]">
                      {col.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((record, rowIndex) => (
                  <tr key={record[rowKey] || rowIndex} className="border-b border-color last:border-b-0">
                    {columns.map((col, colIndex) => (
                      <td key={col.key || col.dataIndex || colIndex} className="px-4 py-3">
                        {/* 如果有 render 函数则调用，否则直接取 dataIndex 对应的值 */}
                        {col.render ? col.render(record[col.dataIndex], record, rowIndex) : record[col.dataIndex] || '-'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </>
          )}
        </table>
      </div>
    </div>
  );
};
