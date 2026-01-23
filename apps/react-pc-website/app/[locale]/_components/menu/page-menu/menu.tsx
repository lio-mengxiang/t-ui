'use client';
import { type BasicMenuProps, renderBasicMenu } from '@/_components/menu/basic-menu';
import { useEffect, useState } from 'react';
import { VerticalMenu } from '@t-headless-ui/react';
import { usePathname } from 'next/navigation';
import { stripFirstSegment } from '@/_utils';

function extractAllValues(data: any[]): string[] {
  const result: string[] = [];

  function traverse(items: any[]) {
    for (const item of items) {
      if (item.value) {
        result.push(item.value);
      }
      if (item.items) {
        traverse(item.items);
      }
    }
  }

  traverse(data);
  return result;
}

export function Menu({ data, subMenuClassName }: BasicMenuProps) {
  const pathname = usePathname();
  const strippedPathname = stripFirstSegment(pathname);

  const [menu, allOpenValues] = renderBasicMenu({ data, subMenuClassName });
  const [currentSelectedValue, setCurrentSelectedValue] = useState<string[]>([]);

  useEffect(() => {
    const allValues = extractAllValues(data);
    const selectedPath = allValues.find((item) => strippedPathname === item);
    if (selectedPath) {
      setCurrentSelectedValue([selectedPath]);
    }
  }, [data, strippedPathname]);

  return (
    <VerticalMenu.Root defaultOpenedSubMenuValues={allOpenValues} selectedValuePath={currentSelectedValue} className="text-sm">
      {menu}
    </VerticalMenu.Root>
  );
}
