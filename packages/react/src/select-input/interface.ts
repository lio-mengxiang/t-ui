import type { CSSProperties, ReactNode } from 'react';
import type { InputTagRootProps, InputTagProps } from '../input-tag';
import type { InputProps } from '../input';

export interface SelectViewCommonProps {
  /**
   * @zh 选择框的 id。
   * @en The id of the select view.
   */
  id?: string;
  /**
   * @zh 是否为多选模式。
   * @en Whether is multiple mode.
   */
  isMultiple?: boolean;
  /**
   * @zh 选择框的样式。
   * @en The style of the select view.
   */
  style?: CSSProperties;
  /**
   * @zh 选择框的类名。
   * @en The class name of the select view.
   */
  className?: string;
  /**
   * @zh 选择框的子元素。
   * @en The children of the select view.
   */
  children?: ReactNode;
  /**
   * @zh 选择框的输入值。
   * @en The input value of the select view.
   */
  inputValue?: string;
  /**
   * @zh 选择框的值。
   * @en The value of the select view.
   */
  value?: any;
  /**
   * @zh 选择框的弹出层是否可见。
   * @en Whether the popup layer of the select view is visible.
   */
  popupVisible?: boolean;
  /**
   * @zh 选择框是否为空值。
   * @en Whether the select view is empty value.
   */
  isEmptyValue: boolean;
  /**
   * @zh 选择框的文本渲染函数。
   * @en The text render function of the select view.
   */
  renderText: (value) => { text; disabled };
  /**
   * @zh 选择框的删除选中项回调函数。
   * @en The remove checked item callback function of the select view.
   */
  onRemoveCheckedItem?: (item, index: number, e) => void;
  /**
   * @zh 选择框的输入值变化回调函数。
   * @en The input value change callback function of the select view.
   */
  onChangeInputValue?: InputProps['onChange'];
  onPaste?: (e) => void;
  onClear?: (e) => void;
  onFocus?: (e) => void;
  onBlur?: (e) => void;
  /**
   * @zh 选择框默认文字。
   * @en Placeholder of element
   */
  placeholder?: string;
  /**
   * @zh 使单选模式可搜索。
   * @en Whether single mode Select is searchable.
   */
  showSearch?: boolean;
  /**
   * @zh 是否为禁用状态。
   * @en Whether is disabled
   */
  disabled?: boolean;
  /**
   * @zh 是否为只读状态。
   * @en Whether is read only
   */
  readOnly?: boolean;
  /**
   * @zh 最大标签数, 支持自定义渲染,请在 InputTag 组件中查看 maxTagCount 类型定义
   * @en Maximum number of tags, support custom rendering, please check maxTagCount type definition in InputTag component
   */
  maxTagCount?: InputTagRootProps['maxTagCount'];
  /**
   * @zh 自定义标签渲染， 请在 InputTag 组件中查看 renderTag 类型定义
   * @en Custom tag rendering, please check renderTag type definition in InputTag component
   */
  renderTag?: InputTagProps['renderTag'];
  /**
   * @zh 鼠标点击下拉框时的回调
   * @en Callback when the mouse clicks on the drop-down box
   */
  onClick?: (e) => void;
  /**
   * @zh 键盘输入时的回调
   * @en Callback when keyboard pressed
 
   */
  onKeyDown?: (e) => void;
  /**
   * @zh 鼠标移入下拉框时的回调
   * @en Callback when the mouse moves into the drop-down box
   */
  onMouseEnter?: (e) => void;
  /**
   * @zh 鼠标移出下拉框时的回调
   * @en Callback when the mouse moves out of the drop-down box
   */
  onMouseLeave?: (e) => void;
}
