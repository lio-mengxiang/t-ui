import type { InputHTMLAttributes, ReactNode, ClipboardEvent } from 'react';

/**
 * @title Input
 * @zh **Input 接受所有原生的属性值**
 * @en **Input Accept all native attribute values**
 */
export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'prefix' | 'size' | 'height' | 'maxLength' | 'onFocus' | 'onBlur'> {
  /**
   * @zh 允许清空输入框
   * @en Whether allow clear value
   */
  allowClear?: boolean;
  /**
   * @zh 是否禁用
   * @en Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * @zh 输入框状态
   * @en Input box status
   */
  status?: 'error' | 'warning';
  /**
   * @zh 是否只读
   * @en Whether the input is readOnly
   */
  readOnly?: boolean;
  /**
   * @zh 默认值
   * @en The initial input content
   */
  defaultValue?: string;
  /**
   * @zh 输入框提示文字
   * @en Input box prompt text
   */
  placeholder?: string;
  /**
  /**
   * @zh 输入时的回调
   * @en Callback when user input
   */
  onChange?: (value: string, e) => void;
  /**
   * @zh 点击清除按钮的回调
   * @en Callback when click clear button
   */
  onClear?: (e) => void;
  onFocus?: (value: any, e) => void;
  onBlur?: (value: any, e) => void;
  /**
   * 粘贴事件
   */
  onPaste?: (e: ClipboardEvent<HTMLDivElement>) => void;
  /**
   * @zh 按下回车键的回调
   * @en Callback when press enter key
   */
  onPressEnter?: (value, e) => void;
  /**
   * @zh 指定 normalize 执行的时机
   * @en Specify the timing of normalize execution
   * @defaultValue ['onBlur']
   */
  normalizeTrigger?: ('onBlur' | 'onPressEnter')[];
  /**
   * @zh 在指定时机对用户输入的值进行格式化处理。前后值不一致时，会触发 onChange
   * @en Format the value entered by the user at the specified time, and when the previous and subsequent values are inconsistent, onChange will be triggered
   */
  normalize?: (value: string) => string;
  /**
   * @zh 输入框的值，受控模式
   * @en The input content value
   */
  value?: string;
  /**
   * @zh 自定义输入框高度
   * @en Custom input height
   */
  // height?: number | string;
  /**
   * @zh 输入框最大输入的长度；设置 `errorOnly`为 `true` 后，超过 `maxLength` 会展示 `error` 状态，并不限制用户输入。
   * @en The max content length；After setting `errorOnly` to `true`, if `maxLength` is exceeded, the `error` status will be displayed, and user input will not be restricted.
   */
  maxLength?: { length?: number; errorOnly?: boolean };
  /**
   * @zh `allowClear` 时配置清除按钮的图标。
   * @en Configure the icon of the clear button when `allowClear`.
   */
  clearIcon?: ReactNode;
  /**
   * @zh 是否展示输入框的字符长度限制
   * @en Whether to show the character length limit of the input box
   */
  showWordLimit?: boolean;
  autoFitWidth?: boolean;
  /**
   * @zh 自定义设置输入框的值
   * @en Custom set the input value
   */
  setValue?: (value: string) => void;
}
