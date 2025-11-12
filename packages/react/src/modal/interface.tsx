import type { JSX } from 'react';

export type ModalAlignType = 'left' | 'center' | 'right' | '';
export type ModalType = 'info' | 'error' | 'success' | 'warning';

export interface ModalProps {
  id?: string;
  mask?: (index: number) => boolean;
  content?: JSX.Element;
  afterOpen?: () => void;
  afterClose?: () => void;
  onCancel?: () => void;
  maskCls?: string;
  maskStyle?: React.CSSProperties;
  focusLock?: boolean;
  containerClassName?: string;
  initialFocusEl?: () => void;
  contentProps?: Record<string, any>;
  attach?: string;
}
