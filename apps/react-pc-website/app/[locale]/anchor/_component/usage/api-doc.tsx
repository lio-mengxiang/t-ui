'use client';

import { ApiTable, type TableColumnProps } from '@/_components/api-table';
import { useLocale } from '@/_hooks/use-locale';
import { useTransformLocale, type Locale } from '@/_i18n';
import { type LocaleMessageType } from '@/_i18n/useLocal/useLocal';
import { anchorSchema } from '@/_schemas';

const getColumns = (locale: Locale, t: LocaleMessageType): TableColumnProps[] => [
  { title: t.parameter, dataIndex: 'name' },
  { title: t.type, dataIndex: 'type' },
  { title: t.description, dataIndex: 'description', render: (record) => record[locale] || '-' },
  { title: t.default, dataIndex: 'default' },
];

export function AnchorApiDoc() {
  const locale = useLocale();
  const [t] = useTransformLocale();
  const columns = getColumns(locale, t);

  return (
    <div>
      {anchorSchema.map((item) => (
        <ApiTable
          key={item.interfaceName}
          columns={columns}
          data={item.properties}
          name={item.name}
          extends={item.extends}
          interfaceName={item.interfaceName}
          t={t}
        />
      ))}
    </div>
  );
}
