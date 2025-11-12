import { cs } from '@/_utils';
import { VerticalMenu } from '@t-headless-ui/react';
import React from 'react';

export interface BasicMenuProps {
  subMenuClassName?: string;
  data: {
    value?: string;
    content: React.ReactNode;
    onClick?: () => void;
    items?: Array<{
      value?: string;
      content: React.ReactNode | BasicMenuProps['data'];
      onClick?: () => void;
    }>;
  }[];
}

export function renderBasicMenu({ data = [], subMenuClassName }: BasicMenuProps): [React.JSX.Element[], string[]] {
  const allOpenValues: string[] = [];
  function renderMenu(data: BasicMenuProps['data'], level = 0) {
    return data.map((item, subIndex) => {
      const i = `${level}-${subIndex}`;
      const isSubMenuExit = Array.isArray(item.items) && item.items.length > 0;
      if (isSubMenuExit) {
        allOpenValues.push(item.value || i);
      }
      return isSubMenuExit ? (
        <VerticalMenu.Submenu key={i} value={item.value || i}>
          <VerticalMenu.SubMenuContent
            className={cs(
              'hover:bg-color-50 pt-3 pb-3 pl-4 pr-4 cursor-pointer flex justify-between items-center mb-0.5 rounded w-full',
              subMenuClassName,
            )}
            selectedClassName="text-primary-color"
            onClick={item?.onClick}
          >
            {item.content}
          </VerticalMenu.SubMenuContent>
          <VerticalMenu.SubMenuList>
            {item.items?.map((item, index) => {
              const i = `${level}-${subIndex}-${index}`;
              return Array.isArray(item.content) ? (
                renderMenu(item.content, level + 1)
              ) : (
                <VerticalMenu.MenuItem
                  key={i}
                  value={item.value || i}
                  className="pt-3 pb-3 pl-4 pr-4 hover:bg-color-50  cursor-pointer rounded mb-1 w-full"
                  selectedClassName="text-primary-color bg-color-50"
                  onClick={item?.onClick}
                >
                  {item.content}
                </VerticalMenu.MenuItem>
              );
            })}
          </VerticalMenu.SubMenuList>
        </VerticalMenu.Submenu>
      ) : (
        <VerticalMenu.MenuItem
          key={i}
          value={item.value || i}
          className="pt-3 pb-3 pl-4 pr-4 hover:bg-color-50  cursor-pointer rounded mb-1 w-60"
          selectedClassName="text-primary-color bg-color-50"
          onClick={item?.onClick}
        >
          {item.content}
        </VerticalMenu.MenuItem>
      );
    });
  }
  return [renderMenu(data), allOpenValues];
}
