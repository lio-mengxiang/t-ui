/**
 * 该文件由脚本自动生成
 * 源文件: @t-headless-ui/react/dist/types/input-tag/interface.d.ts
 * 请勿手动修改
 */
export const inputTagSchema = [
  {
    name: 'InputTag.Root Props',
    interfaceName: 'InputTagRootProps',
    type: 'object',
    extends: ["Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'>"],
    properties: [
      {
        name: 'defaultValue',
        optional: true,
        type: '(ObjectValueType | string)[]',
        description: {
          zh: '默认 tag 值',
          en: 'To set default tag value',
        },
        default: '',
      },
      {
        name: 'value',
        optional: true,
        type: '(ObjectValueType | string)[]',
        description: {
          zh: 'tag 值',
          en: 'To set tag value',
        },
        default: '',
      },
      {
        name: 'inputValue',
        optional: true,
        type: 'string',
        description: {
          zh: '输入框内的值',
          en: 'To set input value',
        },
        default: '',
      },
      {
        name: 'disabled',
        optional: true,
        type: 'boolean',
        description: {
          zh: '是否禁用',
          en: 'Whether the input is disabled',
        },
        default: '',
      },
      {
        name: 'disableInput',
        optional: true,
        type: 'boolean',
        description: {
          zh: '是否禁用输入框',
          en: 'Whether the input is disabled',
        },
        default: '',
      },
      {
        name: 'readOnly',
        optional: true,
        type: 'boolean',
        description: {
          zh: '是否只读',
          en: 'Whether the input is read only',
        },
        default: '',
      },
      {
        name: 'onRemove',
        optional: true,
        type: '(value: ObjectValueType, index: number, event: any) => void',
        description: {
          zh: '移除某一个标签时改变时触发',
          en: 'Callback when a tag is removed',
        },
        default: '',
      },
      {
        name: 'onChange',
        optional: true,
        type: '(value: any[], reason: ValueChangeReason) => void',
        description: {
          zh: '控件值改变时触发',
          en: 'Callback when value changes',
        },
        default: '',
      },
      {
        name: 'labelInValue',
        optional: true,
        type: 'boolean',
        description: {
          zh: "设置传入和回调出的值均为 `{ label: '', value: ''}` 格式。",
          en: "If true, the incoming and callback values will be `{label: '', value: '')` format",
        },
        default: '',
      },
      {
        name: 'maxTagCount',
        optional: true,
        type: 'number | {\n        count: number;\n        render: (hiddenList: ObjectValueType[]) => ReactNode;\n    }',
        description: {
          zh: '最大标签数, 支持自定义渲染',
          en: 'Maximum number of tags, support custom rendering',
        },
        default: '',
      },
      {
        name: 'ref',
        optional: true,
        type: 'React.Ref<InputTagHandle>',
        description: {
          zh: '自定义 ref, 返回 div 元素',
          en: 'Custom ref, return div element',
        },
        default: '',
      },
      {
        name: 'focused',
        optional: true,
        type: 'boolean',
        description: {
          zh: '是否聚焦',
          en: 'Whether the input is focused',
        },
        default: '',
      },
      {
        name: 'validate',
        optional: true,
        type: '(inputValue: string, values: ObjectValueType[]) => boolean | Promise<boolean> | ObjectValueType | Promise<ObjectValueType>',
        description: {
          zh: '校验函数，默认在 按下enter时候触发。',
          en: "Function to check user's input, which is triggered when `Enter` is pressed",
        },
        default: '(inputValue, values) => inputValue && values.every((item) => item !== inputValue)',
      },
      {
        name: 'tokenSeparators',
        optional: true,
        type: 'string[]',
        description: {
          zh: '触发自动分词的分隔符',
          en: 'Separator used to tokenize',
        },
        default: '',
      },
    ],
  },
  {
    name: 'InputTag.Input Props',
    interfaceName: 'InputTagInputProps',
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
        name: 'placeholder',
        optional: true,
        type: 'string',
        description: {
          zh: '预设文案',
          en: 'Placeholder of input element',
        },
        default: '',
      },
      {
        name: 'saveOnBlur',
        optional: true,
        type: 'boolean',
        description: {
          zh: '是否在失焦时自动存储正在输入的文本',
          en: 'Whether to automatically store the text entering when blur InputTag',
        },
        default: '',
      },
      {
        name: 'onBlur',
        optional: true,
        type: '(e: React.FocusEvent<HTMLInputElement>) => void',
        description: {
          zh: '失去焦点时候触发',
          en: 'Callback when input is blurred',
        },
        default: '',
      },
      {
        name: 'onFocus',
        optional: true,
        type: '(e: React.FocusEvent<HTMLInputElement>) => void',
        description: {
          zh: '聚焦时触发',
          en: 'Callback when input is focused',
        },
        default: '',
      },
      {
        name: 'onPressEnter',
        optional: true,
        type: '(e: React.KeyboardEvent<HTMLInputElement>) => void',
        description: {
          zh: '按 enter 键触发',
          en: 'Callback when `Enter` key is pressed',
        },
        default: '',
      },
      {
        name: 'onInputChange',
        optional: true,
        type: '(inputValue: string, event?: React.ChangeEvent<HTMLInputElement>) => void',
        description: {
          zh: '输入框文本改变的回调。',
          en: 'Callback when the value of input changes',
        },
        default: '',
      },
      {
        name: 'onKeyDown',
        optional: true,
        type: '(e: React.KeyboardEvent<HTMLInputElement>) => void',
        description: {
          zh: '键盘事件回调',
          en: 'Callback when the keyboard is pressed',
        },
        default: '',
      },
      {
        name: 'onPaste',
        optional: true,
        type: '(e: React.ClipboardEvent<HTMLInputElement>) => void',
        description: {
          zh: '输入框文本粘贴的回调。',
          en: 'Callback when you paste text in input box',
        },
        default: '',
      },
      {
        name: 'ref',
        optional: true,
        type: 'React.Ref<RefInputType>',
        description: {
          zh: '返回 Input 元素的 blur, focus 方法, 以及 inputDom 方法获取 Input 元素',
          en: "Custom ref, return input element's blur, focus method, and inputDom method to get input element",
        },
        default: '',
      },
    ],
  },
  {
    name: 'InputTag.Tag Props',
    interfaceName: 'InputTagProps',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'renderTag',
        optional: true,
        type: '(props: {\n        value: any;\n        label: ReactNode;\n        closable: boolean;\n        onClose: (event: React.MouseEvent) => void;\n        readOnly: boolean;\n        disabled: boolean;\n    }, index: number, values: ObjectValueType[]) => ReactNode',
        description: {
          zh: '自定义标签渲染，`props` 为当前标签属性和组件状态，`index` 为当前标签的顺序，`values` 为所有标签的值.',
          en: 'Custom tag rendering, `props` is the current tag attribute and component state, `index` is the order of the current tag, `values` is the value of all tags',
        },
        default: '',
      },
    ],
  },
  {
    name: 'InputTag.Clear Props',
    interfaceName: 'InputClearProps',
    type: 'object',
    extends: ['React.HTMLAttributes<HTMLDivElement>'],
    properties: [
      {
        name: 'children',
        optional: true,
        type: 'ReactNode',
        description: {
          zh: '自定义清除图标',
          en: 'Custom clear icon',
        },
        default: '',
      },
    ],
  },
  {
    name: 'ObjectValueType',
    interfaceName: 'ObjectValueType',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'value',
        optional: true,
        type: 'any',
        description: {
          zh: '标签值',
          en: 'Tag value',
        },
        default: '',
      },
      {
        name: 'label',
        optional: true,
        type: 'ReactNode',
        description: {
          zh: '标签显示文案',
          en: 'Tag display text',
        },
        default: '',
      },
      {
        name: 'disabled',
        optional: true,
        type: 'boolean',
        description: {
          zh: '是否可关闭',
          en: 'Whether the tag is closable',
        },
        default: '',
      },
    ],
  },
  {
    name: 'ValueChangeReason',
    interfaceName: 'ValueChangeReason',
    type: "'add' | 'remove' | 'clear' | 'sort'",
    extends: [],
    properties: [],
  },
  {
    name: 'InputTag ref',
    interfaceName: 'InputTagHandle',
    type: 'object',
    extends: [],
    properties: [
      {
        name: 'focus',
        optional: true,
        type: '() => void',
        description: {
          zh: '聚焦输入框',
          en: 'Focus the input box',
        },
        default: '',
      },
      {
        name: 'blur',
        optional: true,
        type: '() => void',
        description: {
          zh: '失焦输入框',
          en: 'Blur the input box',
        },
        default: '',
      },
      {
        name: 'inputDom',
        optional: true,
        type: 'HTMLInputElement',
        description: {
          zh: '输入框 dom元素',
          en: 'Input box dom element',
        },
        default: '',
      },
      {
        name: 'dom',
        optional: true,
        type: 'HTMLInputElement',
        description: {
          zh: '输入框 dom元素',
          en: 'Input box dom element',
        },
        default: '',
      },
    ],
  },
];
