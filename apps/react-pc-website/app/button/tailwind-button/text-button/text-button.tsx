import React, { type PropsWithChildren } from 'react';

import { Button, type ButtonProps } from '@t-headless-ui/react';
import { baseBtnStyle } from '../common-tailwind.style';
import { cs } from '@/_utils';

interface TextButtonProps extends ButtonProps {
  status?: 'default' | 'primary' | 'warning' | 'success' | 'error';
  disabled?: boolean;
  loading?: boolean;
  onlyIcon?: boolean;
}

export function TextButton({
  status = 'default',
  disabled,
  loading,
  children,
  onlyIcon = false,
  ...restProps
}: PropsWithChildren<TextButtonProps>) {
  return (
    <Button
      className={cs(baseBtnStyle, {
        // primary
        'text-primary-color': status === 'primary' && !disabled,
        // warning
        'text-warning-color': status === 'warning' && !disabled,
        // error
        'text-error-color': status === 'error' && !disabled,
        // success
        'text-success-color': status === 'success' && !disabled,
        // default
        'text-color': status === 'default' && !disabled,
        // hover
        'hover:bg-color-100': !disabled,
        // active
        'active:bg-color-200': !disabled,
        // focus
        'focus-visible:border-color': !disabled,
        'border border-transparent border-solid': !disabled,
        // disabled-text-color
        'text-primary-disabled': status === 'primary' && disabled,
        'text-warning-disabled': status === 'warning' && disabled,
        'text-error-disabled': status === 'error' && disabled,
        'text-success-disabled': status === 'success' && disabled,
        'text-disabled': status === 'default' && disabled,
        // disabled
        'cursor-not-allowed border border-transparent border-solid': disabled,
        // loading
        'cursor-default': loading && !disabled,
        // onlyIcon
        'pl-2 pr-2': onlyIcon,
      })}
      {...restProps}
    >
      {children}
    </Button>
  );
}
