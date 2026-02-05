/**
 * 该文件由脚本自动生成
 * 源文件: @t-headless-ui/react/dist/types/select/interface.d.ts
 * 请勿手动修改
 */
export const selectSchema = [
  {
    name: 'Select.Root Props',
    interfaceName: 'SelectRootProps',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'className',
        optional: true,
        type: 'string',
        description: {
          zh: '自定义类名',
          en: 'Custom class name',
        },
        default: '',
      },
      {
        name: 'children',
        optional: true,
        type: 'ReactNode',
        description: {
          zh: '下拉框选项的内容',
          en: 'The content of dropdown options',
        },
        default: '',
      },
      {
        name: 'disabled',
        optional: true,
        type: 'boolean',
        description: {
          zh: '是否禁用选择器',
          en: 'Whether to disable the Select',
        },
        default: '',
      },
      {
        name: 'readOnly',
        optional: true,
        type: 'boolean',
        description: {
          zh: '是否只读',
          en: 'Whether to set the Select as read-only',
        },
        default: '',
      },
      {
        name: 'showSearch',
        optional: true,
        type: 'boolean',
        description: {
          zh: '是否能搜索',
          en: 'Whether to enable search',
        },
        default: '',
      },
      {
        name: 'isMultiple',
        optional: true,
        type: 'boolean',
        description: {
          zh: '是否支持多选',
          en: 'Whether to support multiple selection',
        },
        default: '',
      },
      {
        name: 'onKeyDown',
        optional: true,
        type: '(e: any) => void',
        description: {
          zh: '选择框的键盘事件回调',
          en: 'Keyboard event callback of the Select',
        },
        default: '',
      },
      {
        name: 'defaultValue',
        optional: true,
        type: 'string | string[] | number | number[] | LabeledValue | LabeledValue[]',
        description: {
          zh: '选择框的默认值',
          en: 'To set default value',
        },
        default: '',
      },
      {
        name: 'value',
        optional: true,
        type: 'string | string[] | number | number[] | LabeledValue | LabeledValue[]',
        description: {
          zh: '选择器的值（受控模式）',
          en: 'To set value',
        },
        default: '',
      },
      {
        name: 'inputValue',
        optional: true,
        type: 'string',
        description: {
          zh: '输入框的值（受控模式）',
          en: 'To set input value',
        },
        default: '',
      },
      {
        name: 'options',
        optional: true,
        type: '(string | number | {\n        label: string | number;\n        value: string | number;\n        disabled?: boolean;\n        extra?: any;\n        children?: OptionsType;\n    })[]',
        description: {
          zh: '指定可选项',
          en: 'Select options',
        },
        default: '',
      },
      {
        name: 'labelInValue',
        optional: true,
        type: 'boolean',
        description: {
          zh: '设置 `onChange` 回调中 `value` 的格式。默认是string，设置为true时候，value格式为： { label: string, value: string }',
          en: 'Whether to embed label in value, turn the format of value from string to `{ value: string, label: ReactNode }`',
        },
        default: '',
      },
      {
        name: 'filterOption',
        optional: true,
        type: 'boolean | ((inputValue: string, option: {\n        label: any;\n        value: any;\n        disabled?: boolean;\n        extra?: any;\n    }) => boolean)',
        description: {
          zh: '是否根据输入的值筛选数据。如果传入函数的话，接收 `inputValue` 和 `option` 两个参数，当option符合筛选条件时，返回 `true`，反之返回 `false`。',
          en: "If it's true, filter options by input value. If it's a function, filter options base on the function.",
        },
        default: 'true',
      },
      {
        name: 'renderFormat',
        optional: true,
        type: '(option: OptionData | null, value: LabeledValue) => ReactNode',
        description: {
          zh: '定制回显内容。返回值将会显示在下拉框内。若 `value` 对应的 `Option` 不存在，则第一个参数是 null',
          en: 'Customize the content that will be displayed in the Select.\nIf the `Option` corresponding to `value` does not exist, the first parameter will be `null`',
        },
        default: '',
      },
      {
        name: 'destroyOnClose',
        optional: true,
        type: 'boolean',
        description: {
          zh: '是否在隐藏的时候销毁 DOM 结构',
          en: 'Whether to destroy the DOM when hiding',
        },
        default: 'true',
      },
      {
        name: 'defaultPopupVisible',
        optional: true,
        type: 'boolean',
        description: {
          zh: '下拉框是否默认打开。',
          en: 'Whether to show dropdown by default.',
        },
        default: '',
      },
      {
        name: 'popupVisible',
        optional: true,
        type: 'boolean',
        description: {
          zh: '控制下拉框是否打开。',
          en: 'Whether to show dropdown.',
        },
        default: '',
      },
      {
        name: 'tokenSeparators',
        optional: true,
        type: 'string[]',
        description: {
          zh: '在多选模式下自动分词的分隔符。',
          en: 'Separator used to tokenize on `multiple` mode.',
        },
        default: '',
      },
      {
        name: 'onChange',
        optional: true,
        type: '(value: any, option: OptionData | OptionData[]) => void',
        description: {
          zh: '点击选择框的回调',
          en: 'Callback when select an option or input value change.',
        },
        default: '',
      },
      {
        name: 'onSelect',
        optional: true,
        type: '(value: LabeledValue, option: OptionData) => void',
        description: {
          zh: '选中选项时触发的回调，(只在 `multiple` 模式下触发)。',
          en: 'Called when an option is selected. Only called for `multiple` mode.',
        },
        default: '',
      },
      {
        name: 'onDeselect',
        optional: true,
        type: '(value: LabeledValue, option: OptionData) => void',
        description: {
          zh: '取消选中的时候触发的回调，(只在 `multiple` 模式下触发)。',
          en: 'Called when an option is deselected. Only called for `multiple` mode.',
        },
        default: '',
      },
      {
        name: 'onClear',
        optional: true,
        type: '(visible: boolean) => void',
        description: {
          zh: '点击清除时触发，参数是当前下拉框的展开状态。',
          en: 'Called when clear',
        },
        default: '',
      },
      {
        name: 'onSearch',
        optional: true,
        type: '(value: string, reason: InputValueChangeReason) => void',
        description: {
          zh: '搜索时的回调',
          en: 'Callback when input changed',
        },
        default: '',
      },
      {
        name: 'onFocus',
        optional: true,
        type: '(e: any) => void',
        description: {
          zh: '获得焦点时的回调',
          en: 'Callback when get focus',
        },
        default: '',
      },
      {
        name: 'onBlur',
        optional: true,
        type: '(e: any) => void',
        description: {
          zh: '失去焦点时的回调',
          en: 'Callback when lose focus',
        },
        default: '',
      },
      {
        name: 'onVisibleChange',
        optional: true,
        type: '(visible: boolean) => void',
        description: {
          zh: '下拉框收起展开时触发',
          en: 'Callback when visibility of dropdown is changed.',
        },
        default: '',
      },
      {
        name: 'onInputValueChange',
        optional: true,
        type: '(value: string, reason: InputValueChangeReason) => void',
        description: {
          zh: '输入框文本改变的回调。',
          en: 'Callback when the value of input is changed.',
        },
        default: '',
      },
      {
        name: 'onPaste',
        optional: true,
        type: '(e: any) => void',
        description: {
          zh: '输入框文本粘贴的回调。',
          en: 'Callback when the you paste text in input box.',
        },
        default: '',
      },
      {
        name: 'ref',
        optional: true,
        type: 'React.RefObject<SelectHandle>',
        description: {
          zh: '选择框的引用对象',
          en: 'Ref object of the Select',
        },
        default: '',
      },
      {
        name: 'offsetDistance',
        optional: true,
        type: 'number',
        description: {
          zh: '主轴方向上的距离偏移',
          en: 'Offset distance of the dropdown position along the main axis',
        },
        default: '',
      },
      {
        name: 'offsetSkidding',
        optional: true,
        type: 'number',
        description: {
          zh: '副轴方向上的平移偏移',
          en: 'Offset distance of the dropdown position along the cross axis',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Select.View Props',
    interfaceName: 'SelectViewProps',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'id',
        optional: true,
        type: 'string',
        description: {
          zh: '自定义类名',
          en: 'Custom class name',
        },
        default: '',
      },
      {
        name: 'style',
        optional: true,
        type: 'React.CSSProperties',
        description: {
          zh: '自定义样式',
          en: 'Custom style',
        },
        default: '',
      },
      {
        name: 'className',
        optional: true,
        type: 'string',
        description: {
          zh: '自定义类名',
          en: 'Custom class name',
        },
        default: '',
      },
      {
        name: 'placeholder',
        optional: true,
        type: 'string',
        description: {
          zh: '选择框默认文字',
          en: 'Default placeholder text',
        },
        default: '',
      },
      {
        name: 'maxTagCount',
        optional: true,
        type: "InputTagRootProps['maxTagCount']",
        description: {
          zh: '最大标签数, 支持自定义渲染,请在 InputTag 组件中查看 maxTagCount 类型定义',
          en: 'Maximum number of tags, support custom rendering, please check maxTagCount type definition in InputTag component',
        },
        default: '',
      },
      {
        name: 'children',
        optional: true,
        type: 'React.ReactNode',
        description: {
          zh: '子元素',
          en: 'Children',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Select.Input Props',
    interfaceName: 'SelectInputProps',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'className',
        optional: true,
        type: 'string',
        description: {
          zh: '自定义类名,单选是给 input 元素添加类名，多选是给包裹 input 框的外层 div 添加类名',
          en: 'Custom class name, in single selection mode, the class name is added to the input element, in multiple selection mode, the class name is added to the outer div that wraps the input box',
        },
        default: '',
      },
      {
        name: 'children',
        optional: true,
        type: 'ReactNode',
        description: {
          zh: '子元素, 仅在多选模式下有效',
          en: 'Children, only effective in multiple selection mode',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Select.MultiInputRoot Props',
    interfaceName: 'SelectMultiInputRootProps',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'children',
        optional: false,
        type: 'any',
        description: {
          zh: '子元素',
          en: 'Children',
        },
        default: '',
      },
      {
        name: 'className',
        optional: false,
        type: 'any',
        description: {
          zh: '自定义类名',
          en: 'Custom class name',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Select.MultiTag Props',
    interfaceName: 'SelectMultiTagProps',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'renderTag',
        optional: false,
        type: "InputTagProps['renderTag']",
        description: {
          zh: '自定义标签渲染，具体参数见 InputTag 组件的 renderTag 类型定义',
          en: 'Custom tag rendering, see the renderTag type definition of InputTag component for specific parameters',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Select.Content Props',
    interfaceName: 'SelectContentProps',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'className',
        optional: true,
        type: 'string',
        description: {
          zh: '自定义类名',
          en: 'Custom class name',
        },
        default: '',
      },
      {
        name: 'style',
        optional: true,
        type: 'React.CSSProperties',
        description: {
          zh: '自定义样式',
          en: 'Custom style',
        },
        default: '',
      },
      {
        name: 'attach',
        optional: true,
        type: 'string',
        description: {
          zh: '下拉框挂载的父节点，默认挂载到 body 上, attach 会传入 document.querySelector 获取父节点。',
          en: 'The dropdown’s parent container defaults to being mounted on body.The attach option accepts a document.querySelector result to specify the parent node.',
        },
        default: 'body',
      },
      {
        name: 'children',
        optional: true,
        type: 'ReactNode',
        description: {
          zh: '下拉框选项的内容',
          en: 'The content of dropdown options',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Select.Option Props',
    interfaceName: 'SelectOptionProps',
    type: 'object',
    extends: ["Omit<HTMLAttributes<HTMLDivElement>, 'children'>"],
    properties: [
      {
        name: 'children',
        optional: true,
        type: 'ReactNode',
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
      {
        name: 'item',
        optional: false,
        type: 'OptionData',
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
    ],
  },
  {
    name: 'SelectListProps',
    interfaceName: 'SelectListProps',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'children',
        optional: false,
        type: '(props: OptionData) => ReactNode',
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Select.Affix Props',
    interfaceName: 'SelectAffixProps',
    type: 'object',
    extends: ["Omit<HTMLAttributes<HTMLDivElement>, 'children'>"],
    properties: [
      {
        name: 'children',
        optional: true,
        type: 'ReactNode',
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Select.Clear Props',
    interfaceName: 'SelectClearProps',
    type: 'object',
    extends: ["Omit<HTMLAttributes<HTMLDivElement>, 'children'>"],
    properties: [
      {
        name: 'children',
        optional: true,
        type: 'ReactNode',
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Select.Empty Props',
    interfaceName: 'SelectEmptyProps',
    type: 'object',
    extends: ["Omit<HTMLAttributes<HTMLDivElement>, 'children'>"],
    properties: [
      {
        name: 'children',
        optional: true,
        type: 'ReactNode',
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Option Data Type',
    interfaceName: 'OptionData',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'label',
        optional: false,
        type: 'string | number',
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
      {
        name: 'value',
        optional: false,
        type: 'string | number',
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
      {
        name: 'disabled',
        optional: true,
        type: 'boolean',
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
      {
        name: 'extra',
        optional: true,
        type: 'any',
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
      {
        name: '_key',
        optional: false,
        type: 'string',
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
      {
        name: '_index',
        optional: false,
        type: 'number',
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
      {
        name: '_origin',
        optional: false,
        type: "'children' | 'options'",
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
      {
        name: '_valid',
        optional: false,
        type: 'boolean',
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
      {
        name: 'isGroupTitle',
        optional: true,
        type: 'boolean',
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Options Type',
    interfaceName: 'OptionsType',
    type: "SelectRootProps['options']",
    extends: [],
    properties: [],
  },
  {
    name: 'InputValueChangeReason',
    interfaceName: 'InputValueChangeReason',
    type: "'manual' | 'optionChecked' | 'optionListHide' | 'tokenSeparator'",
    extends: [],
    properties: [],
  },
  {
    name: 'LabeledValue',
    interfaceName: 'LabeledValue',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'value',
        optional: false,
        type: 'string | number',
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
      {
        name: 'label',
        optional: false,
        type: 'string | number',
        description: {
          zh: '',
          en: '',
        },
        default: '',
      },
    ],
  },
  {
    name: 'Select Reference Type',
    interfaceName: 'SelectHandle',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'dom',
        optional: false,
        type: 'HTMLDivElement',
        description: {
          zh: 'DOM 节点',
          en: 'DOM',
        },
        default: '',
      },
      {
        name: 'focus',
        optional: false,
        type: '() => void',
        description: {
          zh: '使选择框聚焦',
          en: 'Focus Select',
        },
        default: '',
      },
      {
        name: 'blur',
        optional: false,
        type: '() => void',
        description: {
          zh: '使选择框失焦',
          en: 'Blur Select',
        },
        default: '',
      },
    ],
  },
];
