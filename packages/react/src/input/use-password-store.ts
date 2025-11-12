'use client';

import { useMergeValue } from '../hooks';
import { InputProps } from './interface';

// types
interface InputPasswordProps extends InputProps {
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

export function usePasswordStore(props: InputPasswordProps) {
  const { onVisibilityChange, disabled } = props;

  const [visibility, setVisibility] = useMergeValue(false, {
    defaultValue: props.defaultVisibility,
    value: props.visibility,
  });

  const onClickVisibility = (v: boolean) => {
    if (!('visibility' in props)) {
      setVisibility(v);
    }
    onVisibilityChange?.(v);
  };

  const handleClickVisibility = () => {
    if (disabled) return;
    onClickVisibility(!visibility);
  };

  const IconProps = {
    onClick: handleClickVisibility,
    // Prevent loss of focus
    onMouseUp: (e) => e.preventDefault(),
  };

  return {
    visibility,
    IconProps,
  };
}
