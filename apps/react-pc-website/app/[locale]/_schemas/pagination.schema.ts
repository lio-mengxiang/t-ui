/**
 * 该文件由脚本自动生成
 * 源文件: @t-headless-ui/react/dist/types/pagination/interface.d.ts
 * 请勿手动修改
 */
export const paginationSchema = [
  {
    name: 'Pagination.Root Props',
    interfaceName: 'PaginationRootProps',
    type: 'object',
    extends: ["Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'onChange'>"],
    properties: [
      {
        name: 'style',
        optional: true,
        type: 'CSSProperties',
        description: {
          zh: '分页器的样式',
          en: 'Style of pagination',
        },
        default: '',
      },
      {
        name: 'className',
        optional: true,
        type: 'string',
        description: {
          zh: '分页器的类名',
          en: 'Class name of pagination',
        },
        default: '',
      },
      {
        name: 'current',
        optional: true,
        type: 'number',
        description: {
          zh: '当前页',
          en: 'Current page',
        },
        default: '',
      },
      {
        name: 'pageSize',
        optional: true,
        type: 'number',
        description: {
          zh: '每页数据条数',
          en: 'Number of data items per page',
        },
        default: '',
      },
      {
        name: 'total',
        optional: true,
        type: 'number',
        description: {
          zh: '数据总数',
          en: 'Total number of data',
        },
        default: '0',
      },
      {
        name: 'defaultCurrent',
        optional: true,
        type: 'number',
        description: {
          zh: '当前页默认值',
          en: 'To set default current page',
        },
        default: '',
      },
      {
        name: 'defaultPageSize',
        optional: true,
        type: 'number',
        description: {
          zh: '默认每页数据条数',
          en: 'To set default number of data per page',
        },
        default: '',
      },
      {
        name: 'disabled',
        optional: true,
        type: 'boolean',
        description: {
          zh: '是否禁用',
          en: 'Whether to disable',
        },
        default: '',
      },
      {
        name: 'hideOnSinglePage',
        optional: true,
        type: 'boolean',
        description: {
          zh: '是否在只有一页的情况下隐藏',
          en: 'Whether to hide when there is only one page',
        },
        default: '',
      },
      {
        name: 'sizeOptions',
        optional: true,
        type: 'number[]',
        description: {
          zh: '每页可以显示数据条数',
          en: 'The number of data items that can be displayed per page',
        },
        default: '[10, 20, 50]',
      },
      {
        name: 'bufferSize',
        optional: true,
        type: 'number',
        description: {
          zh: '`current` 页与 `...` 之间的页码个数',
          en: 'the number of pages between the `current` page and `...`',
        },
        default: '2',
      },
      {
        name: 'onChange',
        optional: true,
        type: '(pageNumber: number, pageSize: number) => void',
        description: {
          zh: '变化时的回调',
          en: 'Callback when page changes',
        },
        default: '',
      },
      {
        name: 'onPageSizeChange',
        optional: true,
        type: '(size: number, current: number) => void',
        description: {
          zh: 'pageSize 变化时的回调',
          en: 'Callback when pageSize changes',
        },
        default: '',
      },
      {
        name: 'pageSizeChangeResetCurrent',
        optional: true,
        type: 'boolean',
        description: {
          zh: '`pageSize` 改变的时候重置当前页码为 `1`',
          en: 'When pageSize changes, resets the current page number to `1`',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Pagination.StartItem/EndItem/Items Props',
    interfaceName: 'PaginationItemProps',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'className',
        optional: true,
        type: 'string',
        description: {
          zh: '分页项的类名',
          en: 'Class name of pagination item',
        },
        default: '',
      },
      {
        name: 'style',
        optional: true,
        type: 'CSSProperties',
        description: {
          zh: '分页项的样式',
          en: 'Style of pagination item',
        },
        default: '',
      },
      {
        name: 'children',
        optional: true,
        type: 'ReactNode | ((page: number, { isActive, disabled }: {\n        isActive: boolean;\n        disabled: boolean;\n    }) => ReactNode)',
        description: {
          zh: '分页项的内容',
          en: 'Content of pagination item',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Pagination.Previous/Next Props',
    interfaceName: 'PaginationPageTurningProps',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'className',
        optional: true,
        type: 'string',
        description: {
          zh: '分页项的类名',
          en: 'Class name of pagination item',
        },
        default: '',
      },
      {
        name: 'style',
        optional: true,
        type: 'CSSProperties',
        description: {
          zh: '分页项的样式',
          en: 'Style of pagination item',
        },
        default: '',
      },
      {
        name: 'children',
        optional: true,
        type: 'ReactNode',
        description: {
          zh: '分页项的内容',
          en: 'Content of pagination item',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Pagination.StartEllipsis/EndEllipsis Props',
    interfaceName: 'PaginationEllipsisProps',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'className',
        optional: true,
        type: 'string',
        description: {
          zh: '分页项的类名',
          en: 'Class name of pagination item',
        },
        default: '',
      },
      {
        name: 'style',
        optional: true,
        type: 'CSSProperties',
        description: {
          zh: '分页项的样式',
          en: 'Style of pagination item',
        },
        default: '',
      },
      {
        name: 'children',
        optional: true,
        type: 'ReactNode',
        description: {
          zh: '分页项的内容',
          en: 'Content of pagination item',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Pagination.Option Props',
    interfaceName: 'PaginationOptionProps',
    type: 'object',
    extends: ["Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'style' | 'className'>"],
    properties: [
      {
        name: 'className',
        optional: true,
        type: 'string',
        description: {
          zh: '分页项的类名',
          en: 'Class name of pagination item',
        },
        default: '',
      },
      {
        name: 'style',
        optional: true,
        type: 'CSSProperties',
        description: {
          zh: '分页项的样式',
          en: 'Style of pagination item',
        },
        default: '',
      },
      {
        name: 'children',
        optional: true,
        type: 'ReactNode | (({ sizeOptions, pageSize, disabled, onPageSizeChange, }: {\n        sizeOptions: number[];\n        pageSize: number;\n        disabled: boolean;\n        onPageSizeChange: (size: number, current: number) => void;\n    }) => ReactNode)',
        description: {
          zh: '分页项的内容',
          en: 'Content of pagination item',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Pagination.Jumper Props',
    interfaceName: 'PaginationJumperProps',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'showCurrent',
        optional: true,
        type: 'boolean',
        description: {
          zh: '是否显示当前页',
          en: 'Whether to show current page',
        },
        default: '',
      },
      {
        name: 'className',
        optional: true,
        type: 'string',
        description: {
          zh: '分页项的类名',
          en: 'Class name of pagination item',
        },
        default: '',
      },
      {
        name: 'style',
        optional: true,
        type: 'CSSProperties',
        description: {
          zh: '分页项的样式',
          en: 'Style of pagination item',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Pagination.Total Props',
    interfaceName: 'PaginationTotalProps',
    type: 'object',
    extends: ["Omit<HTMLAttributes<HTMLDivElement>, 'children'>"],
    properties: [
      {
        name: 'children',
        optional: true,
        type: 'ReactNode | ((total: number, range: number[], allPages: number) => ReactNode)',
        description: {
          zh: '分页项的内容',
          en: 'Content of pagination item',
        },
        default: '',
      },
    ],
  },
];
