import React, { type PropsWithChildren } from 'react';

import { Button, IconLoadingLine, type ButtonProps } from '@t-headless-ui/react';
import { cs } from '@/_utils';

export interface TButtonProps extends ButtonProps {
  status?: 'default' | 'primary' | 'warning' | 'success' | 'error';
  type?: 'fill' | 'outline';
  disabled?: boolean;
  loading?: boolean;
  onlyIcon?: boolean;
}

export function PixelButton({
  status = 'default',
  type = 'fill',
  disabled,
  loading,
  children,
  className,
  onlyIcon = false,
  ...restProps
}: PropsWithChildren<TButtonProps>) {
  // 像素风尺寸
  const sizeCls = 'px-5 py-1 text-[14px]';

  // 颜色映射（fill 背景色）
  const fillBgByStatus: Record<NonNullable<TButtonProps['status']>, string> = {
    default: 'bg-gray-500',
    primary: 'bg-[#58c7c0]',
    success: 'bg-[#6abc3a]',
    warning: 'bg-[#ff7f1a]',
    error: 'bg-[#ef4444]',
  };

  // 颜色映射（outline 文本色）
  const outlineTextByStatus: Record<NonNullable<TButtonProps['status']>, string> = {
    default: 'text-gray-700',
    primary: 'text-[#58c7c0]',
    success: 'text-[#6abc3a]',
    warning: 'text-[#ff7f1a]',
    error: 'text-[#ef4444]',
  };

  // 像素风基础样式（阴影、字体、交互）
  const pixelBase = [
    'relative inline-flex items-center justify-center select-none',
    'rounded-none border-0', // 像素风不圆角
    'transition-all',
    "font-[ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,'Lucida_Console','Courier_New',monospace]",
    // 像素边框 + 外部投影 + 内层高光（light 模式）
    'shadow-[0px_4px_black,0px_-4px_black,4px_0px_black,-4px_0px_black,4px_4px_#00000038,-4px_4px_#00000038,inset_0px_4px_#ffffff36]',
    // dark 模式：边框与高光颜色反转
    'dark:shadow-[0px_4px_#b0b0b0,0px_-4px_#b0b0b0,4px_0px_#b0b0b0,-4px_0px_#b0b0b0,4px_4px_#00000038,-4px_4px_#00000038,inset_0px_4px_#ffffff36]',
    // 可达性
    'focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black',
    'dark:focus-visible:outline-#b0b0b0',
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    // 提升悬停对比度
    !disabled && !loading ? 'hover:brightness-105' : '',
  ].join(' ');

  return (
    <Button
      className={cs(
        pixelBase,
        sizeCls,
        // 填充/描边模式
        type === 'fill' ? fillBgByStatus[status] : 'bg-color',
        type === 'fill' ? 'text-white' : outlineTextByStatus[status],
        {
          'dark:text-black': type === 'fill',
          'dark:text-color-400': type === 'outline' && status === 'default',
          // 按压态：light 模式
          'active:shadow-[0px_4px_black,0px_-4px_black,4px_0px_black,-4px_0px_black,inset_0px_4px_#00000038]': !disabled && !loading,
          'dark:active:shadow-[0px_4px_#b0b0b0,0px_-4px_#b0b0b0,4px_0px_#b0b0b0,-4px_0px_#b0b0b0,inset_0px_4px_#00000038]':
            !disabled && !loading,
        },
        // 仅图标紧凑内边距
        onlyIcon ? 'pl-2 pr-2' : '',
        className,
      )}
      {...restProps}
      loading={loading}
      disabled={disabled}
    >
      {loading ? <IconLoadingLine className="mr-2 animate-spin" /> : null}
      {children}
    </Button>
  );
}

// https://codepen.io/mustafauncuoglu/pen/EajMPLb
