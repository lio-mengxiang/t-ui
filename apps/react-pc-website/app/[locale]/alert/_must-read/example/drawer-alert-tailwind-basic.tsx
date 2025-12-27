import { CodePreview } from '@/_components/code-preview';

const code = `
import { TButton } from '@/button/tailwind-button';
import { IconCloseLine } from '@t-headless-ui/react';
import { cs } from '@/_utils';

const DrawerAlertDemo = ({
  title,
  showCloseIcon = false,
  onCancel,
  showFooter,
  onOk,
  className,
  style,
  contentClassName,
  loading,
  disabled,
  children,
}) => {
  return (
    <div
      className={cs(
        'grid gap-6 overflow-y-auto text-color bg-color p-6 border border-color w-[320px] h-[100vh] overflow-hidden content-between box-border',
        className,
      )}
      style={style}
    >
      <div className={cs('flex flex-col text-left gap-2')}>
        <div className="flex text-lg leading-7 font-semibold justify-between items-center">
          {title}
          {showCloseIcon && (
            <span
              className="cursor-pointer hover:bg-color-100 rounded-full p-0.5 active:text-color transition-all duration-500"
              onClick={onCancel}
            >
              <IconCloseLine />
            </span>
          )}
        </div>
        <div className={cs('text-sm leading-5 text-color-600 my-2 overflow-auto', contentClassName)}>{children}</div>
      </div>
      {showFooter && (
        <div className="flex justify-end gap-3">
          <TButton type="outline" onClick={onCancel}>
            取消
          </TButton>
          <TButton status="primary" loading={loading} disabled={disabled} onClick={onOk}>
            确定
          </TButton>
        </div>
      )}
    </div>
  );
};


function App() {
  return (
    <DrawerAlertDemo isAbsolute title="Drawer Alert" showCloseIcon showFooter>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </DrawerAlertDemo>
    )
}`;

export function DrawerAlertTailwindBasicExample() {
  return <CodePreview code={code} />;
}
