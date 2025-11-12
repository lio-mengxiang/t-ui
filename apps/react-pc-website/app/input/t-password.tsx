import React, { forwardRef } from 'react';
import { TInput, type RefInputType, type TInputProps } from './t-input';
import { IconPreviewOffLine, IconPreviewOnLine, usePasswordStore } from '@t-headless-ui/react';
import { omit } from '@/_utils';

interface InputPasswordProps extends TInputProps {
  /**
   * @zh 是否显示切换密码可见状态的按钮
   * @en Whether to display the button to switch the visible state of the password
   * @defaultValue true
   */
  visibilityToggle?: boolean;
  /**
   * @zh 初始是否显示
   * @en To set default visibility
   */
  defaultVisibility?: boolean;
  /**
   * @zh 是否显示
   * @zh To set visibility
   */
  visibility?: boolean;
  /**
   * @zh 点击icon时触发
   * @en Triggered when the icon is clicked
   */
  onVisibilityChange?: (visibility: boolean) => void;
}

export const Password = forwardRef<RefInputType, InputPasswordProps>((props: InputPasswordProps, ref) => {
  const { visibilityToggle = true, ...rest } = props;

  const { visibility, IconProps } = usePasswordStore(props);

  let icon = props.suffixElement;

  if (visibilityToggle) {
    if (props.suffixElement) {
      icon = props.suffixElement;
    } else {
      const IconComponent = visibility ? IconPreviewOnLine : IconPreviewOffLine;

      icon = <IconComponent {...IconProps} tabIndex={-1} />;
    }
  }

  return (
    <TInput
      {...omit(rest, ['defaultVisibility', 'visibility', 'onVisibilityChange'])}
      type={visibility ? 'text' : 'password'}
      ref={ref}
      suffixElement={icon}
    />
  );
});
