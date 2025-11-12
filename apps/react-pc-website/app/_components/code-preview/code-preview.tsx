'use client';

import React from 'react';
import { useCodePreview } from './hooks';
import { cs } from '@/_utils';
import { CodeTab, ErrorMessage } from './components';
import * as TButtons from '@/button/tailwind-button/export-button';
import * as TComponent from '@/_components/ui-lib';
import * as T from '@t-headless-ui/react';
import type { CodePreviewProps } from './interface';
import { toastStore, toastBottomStore, toastBottomStackStore } from '@/layout';

const TUI = {
  ...T,
  cs,
  ...TButtons,
  ...TComponent,
  toastStore,
  toastBottomStore,
  toastBottomStackStore,
  ...React,
};
export function CodePreview(props: CodePreviewProps) {
  const { code: _Code = '', dependencies = TUI, demoContainerStyle, cssCode, id } = props;

  const { state, onChange } = useCodePreview({ code: _Code, dependencies, ...props });
  const Element = state.element;

  return (
    <>
      <div
        className={cs('relative p-12  overflow-hidden min-w-25 border border-solid border-color rounded-md', {
          [`z-2 mb-0 text-red-600`]: !!state.error,
        })}
        style={demoContainerStyle}
        id={id}
      >
        <>
          <ErrorMessage message={state.error} />
          <div>
            <>{Element ? <Element /> : null}</>
          </div>
        </>
      </div>
      <CodeTab code={_Code} onChange={onChange} cssCode={cssCode} />
    </>
  );
}

CodePreview.displayName = 'CodePreview';
