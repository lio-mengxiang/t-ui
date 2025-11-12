import { cs } from '@/_utils';
import { VerticalMenu } from '@t-headless-ui/react';
import React, { useMemo } from 'react';

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

// 使用 useMemo 缓存结果
export function useRenderBasicCollapse(props: BasicMenuProps): [React.JSX.Element[], string[]] {
  const { data = [], subMenuClassName } = props;
  return useMemo(() => {
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
              className={cs('pt-3 pb-3 pl-4 pr-4 cursor-pointer flex justify-between items-center mb-0.5 rounded w-full', subMenuClassName)}
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
                    className="pt-3 pb-3 pl-4 pr-4 rounded mb-1 w-full"
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
            onClick={item?.onClick}
          >
            {item.content}
          </VerticalMenu.MenuItem>
        );
      });
    }
    return [renderMenu(data), allOpenValues];
  }, [data, subMenuClassName]);
}
