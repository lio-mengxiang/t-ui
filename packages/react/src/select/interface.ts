import type { HTMLAttributes, ReactNode } from 'react';
import type { InputTagProps, InputTagRootProps } from '../input-tag';

/**
 * @title Select.Root Props
 */
export interface SelectRootProps {
  /**
   * @zh 自定义类名
   * @en Custom class name
   */
  className?: string;
  /**
   * @zh 下拉框选项的内容
   * @en The content of dropdown options
   */
  children?: ReactNode;
  /**
   * @zh 是否禁用选择器
   * @en Whether to disable the Select
   */
  disabled?: boolean;
  /**
   * @zh 是否只读
   * @en Whether to set the Select as read-only
   */
  readOnly?: boolean;
  /**
   * @zh 是否能搜索
   * @en Whether to enable search
   */
  showSearch?: boolean;
  /**
   * @zh 是否支持多选
   * @en Whether to support multiple selection
   */
  isMultiple?: boolean;
  /**
   * @zh 选择框的键盘事件回调
   * @en Keyboard event callback of the Select
   */
  onKeyDown?: (e) => void;
  /**
   * @zh 选择框的默认值
   * @en To set default value
   */
  defaultValue?: string | string[] | number | number[] | LabeledValue | LabeledValue[];
  /**
   * @zh 选择器的值（受控模式）
   * @en To set value
   */
  value?: string | string[] | number | number[] | LabeledValue | LabeledValue[];
  /**
   * @zh 输入框的值（受控模式）
   * @en To set input value
   */
  inputValue?: string;
  /**
   * @zh 指定可选项
   * @en Select options
   */
  options?: (
    | string
    | number
    | { label: string | number; value: string | number; disabled?: boolean; extra?: any; children?: OptionsType }
  )[];
  /**
   * @zh 设置 `onChange` 回调中 `value` 的格式。默认是string，设置为true时候，value格式为： { label: string, value: string }
   * @en Whether to embed label in value, turn the format of value from string to `{ value: string, label: ReactNode }`
   */
  labelInValue?: boolean;
  /**
   * @zh 是否根据输入的值筛选数据。如果传入函数的话，接收 `inputValue` 和 `option` 两个参数，当option符合筛选条件时，返回 `true`，反之返回 `false`。
   * @en If it's true, filter options by input value. If it's a function, filter options base on the function.
   * @default true
   */
  filterOption?: boolean | ((inputValue: string, option: { label: any; value: any; disabled?: boolean; extra?: any }) => boolean);
  /**
   * @zh
   * 定制回显内容。返回值将会显示在下拉框内。若 `value` 对应的 `Option` 不存在，则第一个参数是 null
   * @en
   * Customize the content that will be displayed in the Select.
   * If the `Option` corresponding to `value` does not exist, the first parameter will be `null`
   */
  renderFormat?: (option: OptionData | null, value: LabeledValue) => ReactNode;
  /**
   * @zh 是否在隐藏的时候销毁 DOM 结构
   * @en Whether to destroy the DOM when hiding
   * @default true
   */
  destroyOnClose?: boolean;
  /**
   * @zh 下拉框是否默认打开。
   * @en Whether to show dropdown by default.
   */
  defaultPopupVisible?: boolean;
  /**
   * @zh 控制下拉框是否打开。
   * @en Whether to show dropdown.
   */
  popupVisible?: boolean;
  /**
   * @zh 在多选模式下自动分词的分隔符。
   * @en Separator used to tokenize on `multiple` mode.
   */
  tokenSeparators?: string[];
  /**
   * @zh 点击选择框的回调
   * @en Callback when select an option or input value change.
   */
  onChange?: (value, option: OptionData | OptionData[]) => void;
  /**
   * @zh 选中选项时触发的回调，(只在 `multiple` 模式下触发)。
   * @en Called when an option is selected. Only called for `multiple` mode.
   */
  onSelect?: (value: LabeledValue, option: OptionData) => void;
  /**
   * @zh 取消选中的时候触发的回调，(只在 `multiple` 模式下触发)。
   * @en Called when an option is deselected. Only called for `multiple` mode.
   */
  onDeselect?: (value: LabeledValue, option: OptionData) => void;
  /**
   * @zh 点击清除时触发，参数是当前下拉框的展开状态。
   * @en Called when clear
   */
  onClear?: (visible: boolean) => void;
  /**
   * @zh 搜索时的回调
   * @en Callback when input changed
   */
  onSearch?: (value: string, reason: InputValueChangeReason) => void;
  /**
   * @zh 获得焦点时的回调
   * @en Callback when get focus
   */
  onFocus?: (e) => void;
  /**
   * @zh 失去焦点时的回调
   * @en Callback when lose focus
   */
  onBlur?: (e) => void;
  // /**
  //  * @zh 下拉框的滚动监听函数，参数为滚动元素。
  //  * @en Callback when dropdown scrolls.
  //  */
  // onPopupScroll?: (elem) => void;
  /**
   * @zh 下拉框收起展开时触发
   * @en Callback when visibility of dropdown is changed.
   */
  onVisibleChange?: (visible: boolean) => void;
  /**
   * @zh 输入框文本改变的回调。
   * @en Callback when the value of input is changed.
   */
  onInputValueChange?: (value: string, reason: InputValueChangeReason) => void;
  /**
   * @zh 输入框文本粘贴的回调。
   * @en Callback when the you paste text in input box.
   */
  onPaste?: (e) => void;
  /**
   * @zh 选择框的引用对象
   * @en Ref object of the Select
   */
  ref?: React.RefObject<SelectHandle>;
  /**
   * @zh 主轴方向上的距离偏移
   * @en Offset distance of the dropdown position along the main axis
   */
  offsetDistance?: number;
  /**
   * @zh 副轴方向上的平移偏移
   * @en Offset distance of the dropdown position along the cross axis
   */
  offsetSkidding?: number;
}

/**
 * @title Select.View Props
 */
export interface SelectViewProps {
  /**
   * @zh 自定义类名
   * @en Custom class name
   */
  id?: string;
  /**
   * @zh 自定义样式
   * @en Custom style
   */
  style?: React.CSSProperties;
  /**
   * @zh 自定义类名
   * @en Custom class name
   */
  className?: string;
  /**
   * @zh 选择框默认文字
   * @en Default placeholder text
   */
  placeholder?: string;
  /**
   * @zh 最大标签数, 支持自定义渲染,请在 InputTag 组件中查看 maxTagCount 类型定义
   * @en Maximum number of tags, support custom rendering, please check maxTagCount type definition in InputTag component
   */
  maxTagCount?: InputTagRootProps['maxTagCount'];
  /**
   * @zh 子元素
   * @en Children
   */
  children?: React.ReactNode;
}

/**
 * @title Select.Input Props
 **/
export interface SelectInputProps {
  /**
   * @zh 自定义类名,单选是给 input 元素添加类名，多选是给包裹 input 框的外层 div 添加类名
   * @en Custom class name, in single selection mode, the class name is added to the input element, in multiple selection mode, the class name is added to the outer div that wraps the input box
   */
  className?: string;
  /**
   * @zh 子元素, 仅在多选模式下有效
   * @en Children, only effective in multiple selection mode
   */
  children?: ReactNode;
}

/**
 * @title Select.MultiInputRoot Props
 **/
export interface SelectMultiInputRootProps {
  /**
   * @zh 子元素
   * @en Children
   */
  children;
  /**
   * @zh 自定义类名
   * @en Custom class name
   */
  className;
}

/**
 * @title Select.MultiTag Props
 **/
export interface SelectMultiTagProps {
  /**
   * @zh 自定义标签渲染，具体参数见 InputTag 组件的 renderTag 类型定义
   * @en Custom tag rendering, see the renderTag type definition of InputTag component for specific parameters
   */
  renderTag: InputTagProps['renderTag'];
}

/**
 * @title Select.Content Props
 */
export interface SelectContentProps {
  /**
   * @zh 自定义类名
   * @en Custom class name
   */
  className?: string;
  /**
   * @zh 自定义样式
   * @en Custom style
   */
  style?: React.CSSProperties;
  /**
   * @zh 下拉框挂载的父节点，默认挂载到 body 上, attach 会传入 document.querySelector 获取父节点。
   * @en The dropdown’s parent container defaults to being mounted on body.The attach option accepts a document.querySelector result to specify the parent node.
   * @default body
   */
  attach?: string;
  /**
   * @zh 下拉框选项的内容
   * @en The content of dropdown options
   */
  children?: ReactNode;
}

/**
 * @title Select.Option Props
 */
export interface SelectOptionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children?: ReactNode;
  item: OptionData;
}

export interface SelectListProps {
  children: (props: OptionData) => ReactNode;
}

/**
 * @title Select.Affix Props
 */
export interface SelectAffixProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children?: ReactNode;
}

/**
 * @title Select.Clear Props
 */
export interface SelectClearProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children?: ReactNode;
}

/**
 * @title Select.Empty Props
 */
export interface SelectEmptyProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children?: ReactNode;
}

/**
 * @title Option Data Type
 */
export interface OptionData {
  label: string | number;
  value: string | number;
  disabled?: boolean;
  extra?: any;
  _key: string;
  _index: number;
  _origin: 'children' | 'options';
  _valid: boolean;
  // OptGroup 相关
  isGroupTitle?: boolean;
  grouped?: boolean | undefined;
}

/**
 * @title Options Type
 */
export type OptionsType = SelectRootProps['options'];

/**
 * @title InputValueChangeReason
 */
export type InputValueChangeReason = 'manual' | 'optionChecked' | 'optionListHide' | 'tokenSeparator';

export type LabeledValue = {
  value: string | number;
  label: string | number;
};

/**
 * @title Select Reference Type
 */
export type SelectHandle = {
  /**
   * @zh DOM 节点
   * @en DOM
   */
  dom: HTMLDivElement;
  /**
   * @zh 使选择框聚焦
   * @en Focus Select
   */
  focus: () => void;
  /**
   * @zh 使选择框失焦
   * @en Blur Select
   */
  blur: () => void;
};
