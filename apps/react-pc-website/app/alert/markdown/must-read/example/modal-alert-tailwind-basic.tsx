import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `import React from 'react';
import { TButton } from '@/button/tailwind-button';
import { IconCloseLine } from '@t-headless-ui/react';
import { cs } from '@/_utils';

const TModalDemo = ({
  title,
  showCloseIcon = false,
  onCancel,
  showFooter,
  onOk,
  loading,
  className,
  style,
  isAbsolute,
  containerClassName,
  children,
}) => {
  return (
    <div
      className={cs(
        'grid gap-6 overflow-y-auto text-color bg-color p-6 rounded-2xl border border-color shadow-lg max-w-[400px]',
        className,
      )}
      style={style}
    >
      <div className={cs('flex flex-col text-left gap-2', containerClassName)}>
        <div className="flex text-lg leading-7 font-semibold justify-between items-center">
          {title}
          {showCloseIcon && (
            <span className="cursor-pointer hover:bg-color-100 rounded-full p-1 active:text-color" onClick={onCancel}>
              <IconCloseLine />
            </span>
          )}
        </div>
        <div className="text-sm leading-5 text-color-400]">{children}</div>
      </div>
      {showFooter && (
        <div className="flex justify-end gap-3">
          <TButton type="outline" onClick={onCancel}>
            取消
          </TButton>
          <TButton status="primary" loading={loading} onClick={onOk}>
            确定
          </TButton>
        </div>
      )}
    </div>
  );
};


function App() {
  return (
    <TModalDemo isAbsolute title="Modal Alert" showCloseIcon showFooter>
      This is a message!
    </TModalDemo>
    )
}`;

export function ModalAlertTailwindBasicExample() {
  return <CodePreview code={code} />;
}
