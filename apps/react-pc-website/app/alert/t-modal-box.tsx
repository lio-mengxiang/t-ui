import React, { type PropsWithChildren } from 'react';
import { IconCloseLine } from '@t-headless-ui/react';
import { cs } from '@/_utils';
import { TButton } from '@/_components/ui-lib';

export interface ModalProps {
  title: string;
  showCloseIcon?: boolean;
  onCancel?: () => void;
  showFooter?: boolean;
  onOk?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  contentClassName?: string;
}

export const TModalBox: React.FC<PropsWithChildren<ModalProps>> = ({
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
        'grid gap-6 overflow-y-auto text-color bg-color p-6 rounded-2xl border border-color shadow-lg md:w-[400px] w-[320px] overflow-hidden content-between',
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
        <div className={cs('text-sm leading-5 text-color-400', contentClassName)}>{children}</div>
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
