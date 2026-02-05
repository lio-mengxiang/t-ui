import { ReactElement } from 'react';

export const getChildValue = (child: ReactElement) => {
  const props = child?.props as { value?: any; children?: any }; // 断言 props 类型
  const propValue = props?.value;
  const propChildren = props?.children;

  return propValue === undefined && propChildren != null ? propChildren.toString() : propValue;
};
