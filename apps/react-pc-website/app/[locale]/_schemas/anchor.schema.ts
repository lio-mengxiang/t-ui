/**
 * 该文件由 scripts/Interface-to-json2.mjs 脚本生成
 * 源文件: @t-headless-ui/react/dist/types/anchor/interface.d.ts
 * 请勿手动修改
 */
export const anchorSchema = [
  {
    name: 'Anchor.Root Props',
    interfaceName: 'AnchorProps',
    extends: ["Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>"],
    properties: [
      {
        name: 'style',
        optional: true,
        type: 'CSSProperties',
        description: {
          zh: '节点样式',
          en: 'Custom style',
        },
        default: '',
      },
      {
        name: 'className',
        optional: true,
        type: 'string',
        description: {
          zh: '节点类名',
          en: 'Custom class name',
        },
        default: '',
      },
      {
        name: 'scrollContainer',
        optional: true,
        type: 'string | HTMLElement | Window',
        description: {
          zh: '滚动容器。传入选择器或者dom元素。',
          en: 'Scrolling container. Pass in selector or DOM Element',
        },
        default: '',
      },
      {
        name: 'onChange',
        optional: true,
        type: '(newLink: string, oldLink: string) => void',
        description: {
          zh: '滚动时锚点改变或点击锚点时触发',
          en: 'Callback fired when anchor state changes',
        },
        default: '',
      },
      {
        name: 'offset',
        optional: true,
        type: 'number',
        description: {
          zh: '滚动至距离目标锚点位置指定的偏移量 `offset` 时触发',
          en: 'Fired when scrolling to the specified offset `offset` from the target anchor position',
        },
        default: '0',
      },
      {
        name: 'ref',
        optional: true,
        type: 'React.RefObject<HTMLDivElement>',
        description: {
          zh: '获取 SubMenuContent 容器的 div dom 元素',
          en: 'Get the div dom element of the SubMenuContent container',
        },
        default: '',
      },
      {
        name: 'queryKey',
        optional: true,
        type: 'string',
        description: {
          zh: '锚点在 url 中的 queryKey',
          en: 'The queryKey of the anchor in the url',
        },
        default: '"anchor-id"',
      },
      {
        name: 'isCloseInitAnchor',
        optional: true,
        type: 'boolean',
        description: {
          zh: '是否关闭初始化 anchor 定位功能，如果关闭 queryKey 会失效',
          en: 'Whether to close the initialization of anchor positioning，if closed, queryKey will be invalid',
        },
        default: 'true',
      },
    ],
  },
  {
    name: 'Anchor.Link Props',
    interfaceName: 'AnchorLinkProps',
    extends: ['HTMLAttributes<HTMLDivElement>'],
    properties: [
      {
        name: 'style',
        optional: true,
        type: 'CSSProperties',
        description: {
          zh: '节点样式',
          en: 'Custom style',
        },
        default: '',
      },
      {
        name: 'className',
        optional: true,
        type: 'string',
        description: {
          zh: '节点类名',
          en: 'Custom class name',
        },
        default: '',
      },
      {
        name: 'targetId',
        optional: false,
        type: 'string',
        description: {
          zh: '目标锚点 id',
          en: 'Target anchor id',
        },
        default: '',
      },
      {
        name: 'activeClassName',
        optional: true,
        type: 'string',
        description: {
          zh: '激活时的类名',
          en: 'Class name when active',
        },
        default: '',
      },
    ],
  },
];
