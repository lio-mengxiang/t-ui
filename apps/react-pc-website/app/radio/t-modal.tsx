import React from 'react';
import { TModalBox } from '@/alert/t-modal-box';
import { modalStore } from '@/layout';
import { cs } from '@/_utils';

export const TModal = {
  add({
    title,
    showCloseIcon = true,
    onCancel,
    showFooter = true,
    onOk,
    className,
    style,
    contentClassName,
    containerClassName,
    maskClassName,
    content,
    initialFocusEl,
    attach,
  }: {
    title: string;
    showCloseIcon?: boolean;
    onCancel?: () => void;
    showFooter?: boolean;
    onOk?: () => void;
    className?: string;
    style?: React.CSSProperties;
    contentClassName?: string;
    containerClassName?: string;
    maskClassName?: string;
    content: React.ReactNode;
    initialFocusEl?: () => void;
    attach?: string;
  }) {
    const id = modalStore.add({
      attach,
      initialFocusEl,
      maskCls: cs('z-modal fixed inset-0 bg-black/50 w-full h-full overflow-hidden', maskClassName),
      containerClassName: cs('z-modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden', containerClassName),
      content: (
        <TModalBox
          title={title}
          showCloseIcon={showCloseIcon}
          showFooter={showFooter}
          className={className}
          contentClassName={contentClassName}
          style={style}
          onCancel={() => {
            onCancel?.();
            modalStore.remove(id);
          }}
          onOk={() => {
            onOk?.();
          }}
        >
          {content}
        </TModalBox>
      ),
      onCancel: () => {
        modalStore.remove(id);
      },
    });
    return id;
  },

  update(id: string, data: any) {
    modalStore.update(id, { contentProps: data });
  },
  remove(id: string) {
    modalStore.remove(id);
  },
};
