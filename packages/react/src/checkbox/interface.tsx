import React, { HTMLAttributes, ReactNode } from 'react';

/**
 * @title Checkbox
 * @zh `T = string | number`
 * @en `T = string | number`
 */
export interface CheckboxProps<T = any> extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'children' | 'onChange'> {
  /**
   * @zh 是否禁用
   * @en Whether to disable
   */
  disabled?: boolean;
  /**
   * @zh 是否选中
   * @en Whether the checkbox is checked
   */
  checked?: boolean;
  /**
   * @zh 默认是否选中
   * @en To set default checked
   */
  defaultChecked?: boolean;
  /**
   * @zh 半选状态
   * @en The indeterminate state of checkbox
   */
  indeterminate?: boolean;
  /**
   * @zh 点击复选框的回调
   * @en Callback when the state changes
   */
  onChange?: (checked: boolean, e: Event) => void;
  /**
   * @zh 复选框的 value 属性
   * @en To set checkbox value
   */
  value?: T;
  onGroupChange?: (value: T, checked: boolean) => void;
  children?: ReactNode;
  /**
   * @zh 是否只读
   * @en Whether the radio is readonly
   */
  readonly?: boolean;
}

/**
 * @title Checkbox.Group
 */
export interface CheckboxGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'onChange'> {
  /**
   * @zh 整组失效
   * @en Whether to disable all checkboxes in the group
   */
  disabled?: boolean;
  /**
   * @zh 默认选中的选项
   * @en Initial selected value
   */
  defaultValue?: any[];
  /**
   * @zh 选中的选项（受控模式）
   * @en To set value
   */
  value?: any[];
  /**
   * @zh 变化时的回调函数
   * @en Callback when the state changes
   */
  onChange?: (value: any[], e: Event) => void;
  /**
   * @zh 是否只读
   * @en Whether the radio group is readonly
   */
  readonly?: boolean;
  children: ReactNode;
}
