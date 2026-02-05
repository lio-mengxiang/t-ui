'use client';

import React from 'react';
import { useCodePreview } from './hooks';
import { cs } from '@/_utils';
import { CodeTab, ErrorMessage } from './components';
import * as TButtons from '@/button/tailwind-button/export-button';
import * as TComponent from '@/_components/ui-lib';
import * as T from '@t-headless-ui/react';
import { LayoutGroup } from 'motion/react';
import type { CodePreviewProps } from './interface';
import { toastStore, toastBottomStore, toastBottomStackStore } from '@/layout-content';
import { useSandboxStyle } from './hooks/use-sandbox-style';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

const TUI = {
  ...T,
  cs,
  ...TButtons,
  ...TComponent,
  toastStore,
  toastBottomStore,
  toastBottomStackStore,
  ...React,
  LayoutGroup,
  twMerge,
  clsx,
};
export function CodePreview2(props: CodePreviewProps) {
  const { code: _Code = '', dependencies = TUI, demoContainerStyle, css, id, cssEditable = false, isCenter = false } = props;

  const { state, onChange } = useCodePreview({ code: _Code, dependencies, ...props });

  const { sandboxId, onCssChange, cssState } = useSandboxStyle({
    css,
  });

  const Element = state.element;

  return (
    <>
      <div
        className={cs('relative p-12  overflow-hidden min-w-25 border border-solid border-color rounded-md', {
          'z-2 mb-0 text-red-600': !!state.error || !!cssState.error,
          'flex justify-center': isCenter,
        })}
        style={demoContainerStyle}
        id={id}
      >
        <>
          <ErrorMessage message={state.error || cssState.error} />
          <div id={sandboxId}>
            <style>{cssState.cssString}</style>
            {Element && !cssState.error ? <Element /> : null}
          </div>
        </>
      </div>
      <CodeTab code={_Code} onChange={onChange} cssCode={css} onCssChange={onCssChange} cssEditable={cssEditable} />
    </>
  );
}
