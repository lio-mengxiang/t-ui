import React from 'react';
import { TAlert } from '@/_components/ui-lib';
import { toastStore } from '@/layout';

interface MessageProps {
  message?: string;
  title?: string;
  // 单位是秒
  duration?: number | null;
  onClose?: () => void;
  icon?: React.ReactNode;
  containerClassName?: string;
  showClose?: boolean;
  type?: 'info' | 'loading' | 'success' | 'warning' | 'error';
  showProgress?: boolean;
  id?: string;
}

const handleMessage = (options: MessageProps) => {
  const {
    message,
    title,
    duration = 3,
    onClose,
    icon,
    containerClassName = 'pb-2',
    showClose = false,
    type = 'info',
    showProgress = false,
  } = options;

  return toastStore.add({
    duration,
    showProgress,
    component: (
      <TAlert
        message={message}
        title={title}
        showClose={showClose}
        onClose={onClose}
        type={type}
        containerClassName={containerClassName}
        icon={icon}
      />
    ),
  });
};

const updateMessage = (options: MessageProps) => {
  const {
    message,
    title,
    duration = 3,
    onClose,
    icon,
    containerClassName = 'pb-2',
    showClose = false,
    type = 'info',
    showProgress = false,
    id,
  } = options;

  return toastStore.update(id, {
    duration,
    showProgress,
    component: (
      <TAlert
        message={message}
        title={title}
        showClose={showClose}
        onClose={onClose}
        type={type}
        containerClassName={containerClassName}
        icon={icon}
      />
    ),
  });
};

export const TMessage = {
  info: (options: MessageProps) => {
    return handleMessage({ ...options, type: 'info' });
  },
  loading: (options: MessageProps) => {
    return handleMessage({ ...options, type: 'loading' });
  },
  success: (options: MessageProps) => {
    return handleMessage({ ...options, type: 'success' });
  },
  warning: (options: MessageProps) => {
    return handleMessage({ ...options, type: 'warning' });
  },
  error: (options: MessageProps) => {
    return handleMessage({ ...options, type: 'error' });
  },
  remove: (id: string) => {
    toastStore.remove(id);
  },
  removeAll: () => {
    toastStore.clearAll();
  },
  update: (id: string, options: MessageProps = {}) => {
    return updateMessage({ ...options, id });
  },
};
