import type { ReactNode, HTMLAttributes } from 'react';

/**
 * @title InputTag.Root Props
 */
export interface InputTagRootProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /**
   * @zh 默 tag 值
   * @en To set default tag value
   */
  defaultValue?: (ObjectValueType | string)[];
  /**
   * @zh tag 值
   * @en To set tag value
   */
  value?: (ObjectValueType | string)[];
  /**
   * @zh 输入框内的值
   * @en To set input value
   */
  inputValue?: string;
  /**
   * @zh 是否禁用
   * @en Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * @zh 是否只读
   * @en Whether the input is read only
   */
  readOnly?: boolean;
  /**
   * @zh 移除某一个标签时改变时触发
   * @en Callback when a tag is removed
   */
  onRemove?: (value: ObjectValueType, index: number, event) => void;
  /**
   * @zh 控件值改变时触发
   * @en Callback when value changes
   */
  onChange?: (value: any[], reason: ValueChangeReason) => void;
  /**
   * @zh 设置传入和回调出的值均为 `{ label: '', value: ''}` 格式。
   * @en If true, the incoming and callback values will be `{label: '', value: '')` format
   */
  labelInValue?: boolean;
  /**
   * @zh 最大标签数, 支持自定义渲染
   * @en Maximum number of tags, support custom rendering
   */
  maxTagCount?: number | { count: number; render: (hiddenList: ObjectValueType[]) => ReactNode };
}

/**
 * @title InputTag.Input Props
 */
export interface InputTagProps {
  className?: string;
  style?: React.CSSProperties;
  /**
   * @zh 预设文案
   * @en Placeholder of input element
   */
  placeholder?: string;
  /**
   * @zh 是否在失焦时自动存储正在输入的文本
   * @en Whether to automatically store the text entering when blur InputTag
   */
  saveOnBlur?: boolean;
  /**
   * @zh 触发自动分词的分隔符
   * @en Separator used to tokenize
   */
  tokenSeparators?: string[];
  /**
   * @zh 校验函数，默认在 按下enter时候触发。
   * @en Function to check user's input, which is triggered when `Enter` is pressed
   * @defaultValue (inputValue, values) => inputValue && values.every((item) => item !== inputValue)
   */
  validate?: (inputValue: string, values: ObjectValueType[]) => boolean | Promise<boolean> | ObjectValueType | Promise<ObjectValueType>;
  /**
   * @zh 自定义标签渲染，`props` 为当前标签属性和组件状态，`index` 为当前标签的顺序，`values` 为所有标签的值.
   * @en Custom tag rendering, `props` is the current tag attribute and component state, `index` is the order of the current tag, `values` is the value of all tags
   */
  renderTag?: (
    props: {
      value: any;
      label: ReactNode;
      closable: boolean;
      onClose: (event: React.MouseEvent) => void;
      readOnly: boolean;
      disabled: boolean;
    },
    index: number,
    values: ObjectValueType[],
  ) => ReactNode;
  /**
   * @zh 失去焦点时候触发
   * @en Callback when input is blurred
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * @zh 聚焦时触发
   * @en Callback when input is focused
   */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * @zh 按 enter 键触发
   * @en Callback when `Enter` key is pressed
   */
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * @zh 输入框文本改变的回调。
   * @en Callback when the value of input changes
   */
  onInputChange?: (inputValue: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * @zh 键盘事件回调
   * @en Callback when the keyboard is pressed
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * @zh 输入框文本粘贴的回调。
   * @en Callback when you paste text in input box
   */
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
}

/**
 * @title ObjectValueType
 */
export type ObjectValueType = {
  /**
   * @zh 标签值
   * @en Tag value
   */
  value?: any;
  /**
   * @zh 标签显示文案
   * @en Tag display text
   */
  label?: ReactNode;
  /**
   * @zh 是否可关闭
   * @en Whether the tag is closable
   */
  closable?: boolean;
};

/**
 * @title ValueChangeReason
 */
export type ValueChangeReason = 'add' | 'remove' | 'clear' | 'sort';

/**
 * @title InputTag ref
 */
export type InputTagHandle = {
  /**
   * @zh 聚焦输入框
   * @en Focus the input box
   */
  focus: () => void;
  /**
   * @zh 失焦输入框
   * @en Blur the input box
   */
  blur: () => void;
};
