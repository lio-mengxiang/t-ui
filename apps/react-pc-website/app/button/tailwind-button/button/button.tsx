import React, { type PropsWithChildren } from 'react';

import { Button, IconLoadingLine, type ButtonProps } from '@t-headless-ui/react';
import { baseBtnStyle } from '../common-tailwind.style';
import { cs } from '@/_utils';

export interface TButtonProps extends ButtonProps {
  status?: 'default' | 'primary' | 'warning' | 'success' | 'error';
  type?: 'fill' | 'outline';
  disabled?: boolean;
  loading?: boolean;
  onlyIcon?: boolean;
  small?: boolean;
  large?: boolean;
}

export function TButton({
  status = 'default',
  type = 'fill',
  disabled,
  loading,
  children,
  small,
  large,
  className,
  onlyIcon = false,
  ...restProps
}: PropsWithChildren<TButtonProps>) {
  return (
    <Button
      className={cs(
        baseBtnStyle,
        {
          // primary
          'bg-blue-600': status === 'primary' && !disabled && type === 'fill',
          'border-blue-600': status === 'primary' && !disabled && type === 'outline',
          'text-blue-600': status === 'primary' && !disabled && type === 'outline',
          // warning
          'bg-orange-600': status === 'warning' && !disabled && type === 'fill',
          'border-orange-600': status === 'warning' && !disabled && type === 'outline',
          'text-orange-600': status === 'warning' && !disabled && type === 'outline',
          // error
          'bg-red-600': status === 'error' && !disabled && type === 'fill',
          'border-red-600': status === 'error' && !disabled && type === 'outline',
          'text-red-600': status === 'error' && !disabled && type === 'outline',
          // success
          'bg-green-600': status === 'success' && !disabled && type === 'fill',
          'border-green-600': status === 'success' && !disabled && type === 'outline',
          'text-green-600': status === 'success' && !disabled && type === 'outline',
          // default
          'bg-gray-200': status === 'default' && !disabled && type === 'fill',
          'border-gray-300': status === 'default' && !disabled && type === 'outline',
          'text-white': status !== 'default' && type !== 'outline',
          'text-color-500': status === 'default' && !disabled && type === 'outline',
          'text-gray-500': status === 'default' && !disabled && type !== 'outline',

          // hover
          'hover:bg-blue-500': status === 'primary' && !disabled && !loading && type === 'fill',
          'hover:border-blue-400': status === 'primary' && !disabled && !loading && type === 'outline',
          'hover:text-blue-500': status === 'primary' && !disabled && !loading && type === 'outline',
          // warning
          'hover:bg-orange-500': status === 'warning' && !disabled && !loading && type === 'fill',
          'hover:border-orange-500': status === 'warning' && !disabled && !loading && type === 'outline',
          'hover:text-orange-500': status === 'warning' && !disabled && !loading && type === 'outline',
          // error
          'hover:bg-red-500': status === 'error' && !disabled && !loading && type === 'fill',
          'hover:border-red-500': status === 'error' && !disabled && !loading && type === 'outline',
          'hover:text-red-500': status === 'error' && !disabled && !loading && type === 'outline',
          // success
          'hover:bg-green-500': status === 'success' && !disabled && !loading && type === 'fill',
          'hover:border-green-500': status === 'success' && !disabled && !loading && type === 'outline',
          'hover:text-green-500': status === 'success' && !disabled && !loading && type === 'outline',
          // default
          'hover:bg-gray-100': status === 'default' && !disabled && !loading && type === 'fill',
          'hover:border-gray-500': status === 'default' && !disabled && !loading && type === 'outline',
          'hover:text-gray-500': status === 'default' && !disabled && !loading && type === 'outline',

          // primary disabled
          'bg-blue-300': status === 'primary' && disabled && type === 'fill',
          'border-blue-300': status === 'primary' && disabled && type === 'outline',
          'text-blue-300': status === 'primary' && disabled && type === 'outline',
          // warning disabled
          'bg-orange-300': status === 'warning' && disabled && type === 'fill',
          'border-orange-300': status === 'warning' && disabled && type === 'outline',
          'text-orange-300': status === 'warning' && disabled && type === 'outline',
          // error disabled
          'bg-red-300': status === 'error' && disabled && type === 'fill',
          'border-red-300': status === 'error' && disabled && type === 'outline',
          'text-red-300': status === 'error' && disabled && type === 'outline',
          // success disabled
          'bg-green-300': status === 'success' && disabled && type === 'fill',
          'border-green-300': status === 'success' && disabled && type === 'outline',
          'text-green-300': status === 'success' && disabled && type === 'outline',
          // default disabled
          'bg-gray-50': status === 'default' && disabled && type === 'fill',
          'border-gray-50': status === 'default' && disabled && type === 'outline',
          'text-gray-300': status === 'default' && disabled,
          // loading
          'cursor-not-allowed': disabled,
          // active
          'active:bg-blue-700': status === 'primary' && !disabled && !loading && type === 'fill',
          'active:border-blue-700': status === 'primary' && !disabled && !loading && type === 'outline',
          'active:text-blue-700': status === 'primary' && !disabled && !loading && type === 'outline',
          'active:bg-orange-700': status === 'warning' && !disabled && !loading && type === 'fill',
          'active:border-orange-700': status === 'warning' && !disabled && !loading && type === 'outline',
          'active:text-orange-700': status === 'warning' && !disabled && !loading && type === 'outline',
          'active:bg-red-700': status === 'error' && !disabled && !loading && type === 'fill',
          'active:text-red-700': status === 'error' && !disabled && !loading && type === 'outline',
          'active:border-red-700': status === 'error' && !disabled && !loading && type === 'outline',
          'active:bg-green-700': status === 'success' && !disabled && !loading && type === 'fill',
          'active:border-green-700': status === 'success' && !disabled && !loading && type === 'outline',
          'active:text-green-700': status === 'success' && !disabled && !loading && type === 'outline',
          // default
          'active:bg-gray-300': status === 'default' && !disabled && !loading && type === 'fill',
          'active:border-gray-600': status === 'default' && !disabled && !loading && type === 'outline',
          'active:text-gray-600': status === 'default' && !disabled && !loading && type === 'outline',
          // default
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400': status === 'default' && !disabled,
          // focus
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-focus': status === 'primary' && !disabled,
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning-focus': status === 'warning' && !disabled,
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error-focus': status === 'error' && !disabled,
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success-focus': status === 'success' && !disabled,
          // size
          'h-7': small,
          'h-9': large,
          // onlyIcon
          'pl-2 pr-2': onlyIcon,
        },
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
