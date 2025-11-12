import React from 'react';
import { IconErrorLine, IconInfoLine, IconLoadingLine, IconSuccessLine, IconWarningLine } from '@t-headless-ui/react';
import { cs } from '@/_utils';
import { motion } from 'motion/react';

export interface AlertProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  type?: 'info' | 'success' | 'warning' | 'error' | 'loading';
  onClose?: () => void;
  containerClassName?: string;
  showClose?: boolean;
  toastPercent?: number;
  closeToast?: () => void;
}

export const TAlert: React.FC<AlertProps> = (props) => {
  const { title, message, type = 'info', icon, onClose, containerClassName, showClose = false, toastPercent, closeToast } = props;

  return (
    <div className={`pointer-events-auto ${containerClassName}`}>
      <div
        className={cs('relative flex items-center justify-between p-3 bg-white rounded-[10px] w-60 md:w-80 overflow-hidden', {
          'border border-stone-300': type === 'info',
          'border border-gray-300': type === 'loading',
          'border border-green-600': type === 'success',
          'border border-amber-500': type === 'warning',
          'border border-red-600': type === 'error',
          'pb-4': Number(toastPercent) > 0,
        })}
      >
        <div className="flex items-start gap-2 flex-1">
          <motion.div
            key={type} // 当type改变时触发动画
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {type === 'info' && !icon && <IconInfoLine className={cs('text-xl text-stone-500', { 'mt-1': title })} />}
            {type === 'success' && !icon && <IconSuccessLine className={cs('text-xl text-green-600', { 'mt-1': title })} />}
            {type === 'warning' && !icon && <IconWarningLine className={cs('text-xl text-amber-500', { 'mt-1': title })} />}
            {type === 'error' && !icon && <IconErrorLine className={cs('text-xl text-red-600', { 'mt-1': title })} />}
            {type === 'loading' && !icon && <IconLoadingLine className={cs('text-gray-500 mt-1 animate-spin', { 'mt-1': title })} />}
          </motion.div>
          <div className="flex-1">
            <div className="block text-[0.95rem] font-medium text-gray-900">{title}</div>
            <p className="m-0 text-[0.85rem] text-neutral-500">{message}</p>
          </div>
        </div>
        {showClose && (
          <div>
            <button
              className="bg-transparent border-none text-[1.1rem] text-gray-400 cursor-pointer p-0 ml-2 hover:text-neutral-500"
              onClick={() => {
                onClose?.();
                closeToast?.();
              }}
            >
              &times;
            </button>
          </div>
        )}
        {typeof toastPercent === 'number' && toastPercent > 0 && (
          <div className="absolute bottom-[0] left-0 w-full h-1 bg-color-100">
            <div
              className={cs('h-full transition-[width] duration-300 ease-linear', {
                'bg-stone-300': type === 'info',
                'bg-gray-300': type === 'loading',
                'bg-green-600': type === 'success',
                'bg-amber-500': type === 'warning',
                'bg-red-600': type === 'error',
              })}
              key={toastPercent}
              style={{
                width: `${toastPercent.toFixed(1)}%`,
                willChange: 'width',
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
