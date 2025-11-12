import { JsPreview } from '@/_components/code-preview/components';
import { CollapseSubMenu, CollapseMenu } from '@/_components/menu/page-menu';
import React from 'react';

const code = `
import React, { type PropsWithChildren } from 'react';

import { Button, IconLoadingLine, type ButtonProps } from '@t-headless-ui/react';
import { baseBtnStyle } from '../common-tailwind.style';
import { cs } from '@/_utils';

interface TButtonProps extends ButtonProps {
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
  onlyIcon = false,
  ...restProps
}: PropsWithChildren<TButtonProps>) {
  return (
    <Button
      className={cs(baseBtnStyle, {
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
        'border-gray-900': status === 'default' && !disabled && type === 'outline',
        'text-white': status !== 'default' && type !== 'outline',

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
        'cursor-not-allowed': loading || disabled,
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
        // focus
        'focus-visible:border-blue-200': status === 'primary' && !disabled,
        'focus-visible:border-orange-200': status === 'warning' && !disabled,
        'focus-visible:border-red-200': status === 'error' && !disabled,
        'focus-visible:border-green-200': status === 'success' && !disabled,
        // size
        'h-7': small,
        'h-9': large,
        // onlyIcon
        'pl-2 pr-2': onlyIcon,
      })}
      {...restProps}
    >
      {loading ? <IconLoadingLine className="mr-2 animate-spin" /> : null}
      {children}
    </Button>
  );
}
`;

const codeCS = `
import { isString, isArray, isObject } from './is';
import { twMerge } from 'tailwind-merge';

type ClassNamesArg = string | string[] | { [key: string]: any } | undefined | null | boolean;

export function cs(...args: ClassNamesArg[]): string {
  const { length } = args;
  let classNames: string[] = [];
  for (let i = 0; i < length; i++) {
    const v = args[i];
    if (!v) {
      continue;
    }
    if (isString(v)) {
      classNames.push(v);
    } else if (isArray(v)) {
      classNames = classNames.concat(v);
    } else if (isObject(v)) {
      Object.keys(v).forEach((k) => {
        if (v[k]) {
          classNames.push(k);
        }
      });
    }
  }
  return twMerge([...new Set(classNames)].join(' '));
}`;

const codeBaseBtnStyle = `
export const baseBtnStyle =
  'inline-flex relative items-center justify-center outline-none pl-3.5 pr-3.5 h-8 text-sm appearance-none select-none cursor-pointer whitespace-nowrap transition-all duration-200 ease-linear box-border rounded border border-transparent';
`;

const data = [
  {
    content: <CollapseSubMenu>Button 代码</CollapseSubMenu>,
    items: [
      {
        content: (
          <div className="overflow-auto max-h-125" style={{ maxHeight: '440px' }}>
            <JsPreview code={code} readOnly />
          </div>
        ),
      },
    ],
  },
  {
    content: <CollapseSubMenu>CS 函数代码</CollapseSubMenu>,
    items: [
      {
        content: (
          <div className="overflow-auto max-h-125" style={{ maxHeight: '440px' }}>
            <JsPreview code={codeCS} readOnly />
          </div>
        ),
      },
    ],
  },
  {
    content: <CollapseSubMenu>BaseBtnStyle 代码</CollapseSubMenu>,
    items: [
      {
        content: (
          <div className="overflow-auto max-h-125" style={{ maxHeight: '440px' }}>
            <JsPreview code={codeBaseBtnStyle} readOnly />
          </div>
        ),
      },
    ],
  },
];

export function SourceTButtonExample() {
  return <CollapseMenu data={data} subMenuClassName="bg-color-100 rounded-md" />;
}
