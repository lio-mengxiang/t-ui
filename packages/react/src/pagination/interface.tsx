import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

/**
 * @title Pagination.Root Props
 */
export interface PaginationRootProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'onChange'> {
  /**
   * @zh 分页器的样式
   * @en Style of pagination
   */
  style?: CSSProperties;
  /**
   * @zh 分页器的类名
   * @en Class name of pagination
   */
  className?: string;
  /**
   * @zh 当前页
   * @en Current page
   */
  current?: number;
  /**
   * @zh 每页数据条数
   * @en Number of data items per page
   */
  pageSize?: number;
  /**
   * @zh 数据总数
   * @en Total number of data
   * @default 0
   */
  total?: number;
  /**
   * @zh 当前页默认值
   * @en To set default current page
   */
  defaultCurrent?: number;
  /**
   * @zh 默认每页数据条数
   * @en To set default number of data per page
   */
  defaultPageSize?: number;
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled?: boolean;
  /**
   * @zh 是否在只有一页的情况下隐藏
   * @en Whether to hide when there is only one page
   */
  hideOnSinglePage?: boolean;
  /**
   * @zh 每页可以显示数据条数
   * @en The number of data items that can be displayed per page
   * @default [10, 20, 50]
   */
  sizeOptions?: number[];
  /**
   * @zh `current` 页与 `...` 之间的页码个数
   * @en the number of pages between the `current` page and `...`
   * @default 2
   */
  bufferSize?: number;
  /**
   * @zh 变化时的回调
   * @en Callback when page changes
   */
  onChange?: (pageNumber: number, pageSize: number) => void;
  /**
   * @zh pageSize 变化时的回调
   * @en Callback when pageSize changes
   */
  onPageSizeChange?: (size: number, current: number) => void;
  /**
   * @zh `pageSize` 改变的时候重置当前页码为 `1`
   * @en When pageSize changes, resets the current page number to `1`
   * @defaultValue true
   */
  pageSizeChangeResetCurrent?: boolean;
}

/**
 * @title Pagination.StartItem/EndItem/Items Props
 */
export interface PaginationItemProps {
  /**
   * @zh 分页项的类名
   * @en Class name of pagination item
   */
  className?: string;
  /**
   * @zh 分页项的样式
   * @en Style of pagination item
   */
  style?: CSSProperties;
  /**
   * @zh 分页项的内容
   * @en Content of pagination item
   */
  children?: ReactNode | ((page: number, { isActive, disabled }: { isActive: boolean; disabled: boolean }) => ReactNode);
}

/**
 * @title Pagination.Previous/Next Props
 */
export interface PaginationPageTurningProps {
  /**
   * @zh 分页项的类名
   * @en Class name of pagination item
   */
  className?: string;
  /**
   * @zh 分页项的样式
   * @en Style of pagination item
   */
  style?: CSSProperties;
  /**
   * @zh 分页项的内容
   * @en Content of pagination item
   */
  children?: ReactNode;
}

/**
 * @title Pagination.StartEllipsis/EndEllipsis Props
 */
export interface PaginationEllipsisProps {
  /**
   * @zh 分页项的类名
   * @en Class name of pagination item
   */
  className?: string;
  /**
   * @zh 分页项的样式
   * @en Style of pagination item
   */
  style?: CSSProperties;
  /**
   * @zh 分页项的内容
   * @en Content of pagination item
   */
  children?: ReactNode;
}

/**
 * @title Pagination.Option Props
 */
export interface PaginationOptionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'style' | 'className'> {
  /**
   * @zh 分页项的类名
   * @en Class name of pagination item
   */
  className?: string;
  /**
   * @zh 分页项的样式
   * @en Style of pagination item
   */
  style?: CSSProperties;
  /**
   * @zh 分页项的内容
   * @en Content of pagination item
   */
  children?:
    | ReactNode
    | (({
        sizeOptions,
        pageSize,
        disabled,
        onPageSizeChange,
      }: {
        sizeOptions: number[];
        pageSize: number;
        disabled: boolean;
        onPageSizeChange: (size: number, current: number) => void;
      }) => ReactNode);
}

/**
 * @title Pagination.Jumper Props
 */
export interface PaginationJumperProps {
  /**
   * @zh 是否显示当前页
   * @en Whether to show current page
   */
  showCurrent?: boolean;
  /**
   * @zh 分页项的类名
   * @en Class name of pagination item
   */
  className?: string;
  /**
   * @zh 分页项的样式
   * @en Style of pagination item
   */
  style?: CSSProperties;
}

/**
 * @title Pagination.Total Props
 */
export interface PaginationTotalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * @zh 分页项的内容
   * @en Content of pagination item
   */
  children?: ReactNode | ((total: number, range: number[], allPages: number) => ReactNode);
}
