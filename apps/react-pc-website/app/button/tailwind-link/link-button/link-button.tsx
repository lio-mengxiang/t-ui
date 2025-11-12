import React, { type PropsWithChildren } from 'react';

import { Link, type LinkProps } from '@t-headless-ui/react';

import { cs } from '@/_utils';
import { baseBtnStyle } from '@/button/tailwind-button/common-tailwind.style';

interface LinkButtonProps extends LinkProps {
  status?: 'default' | 'primary' | 'warning' | 'success' | 'error';
  disabled?: boolean;
  loading?: boolean;
  needHoverBg?: boolean;
  onlyIcon?: boolean;
}

export function LinkButton({
  status = 'default',
  disabled,
  children,
  needHoverBg = false,
  onlyIcon = false,
  ...restProps
}: PropsWithChildren<LinkButtonProps>) {
  return (
    <Link
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
        'hover:bg-color-100': !disabled && needHoverBg,
        // active
        'active:bg-color-200': !disabled && needHoverBg,
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
        // onlyIcon
        'pl-2 pr-2': onlyIcon,
      })}
      {...restProps}
    >
      {children}
    </Link>
  );
}
