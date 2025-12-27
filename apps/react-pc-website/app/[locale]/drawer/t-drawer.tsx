import { TDrawerBox } from '@/alert/t-drawer-box';
import { drawerStore } from '@/layout-content';
import { cs } from '@/_utils';
import { type Variants } from 'motion/react';

const getAxisProperties = (placement: 'left' | 'right' | 'top' | 'bottom') => {
  switch (placement) {
    case 'left':
      return {
        initialValue: '-100%', // 从左侧进入
        animateValue: '0px',
        exitValue: '-100%',
        property: 'x',
      };
    case 'right':
      return {
        initialValue: '100%', // 从右侧进入
        animateValue: '0px',
        exitValue: '100%',
        property: 'x',
      };
    case 'top':
      return {
        initialValue: '-100%', // 从上方进入
        animateValue: '0px',
        exitValue: '-100%',
        property: 'y',
      };
    case 'bottom':
      return {
        initialValue: '100%', // 从下方进入
        animateValue: '0px',
        exitValue: '100%',
        property: 'y',
      };
    default:
      return {
        initialValue: '100%',
        animateValue: '0px',
        exitValue: '100%',
        property: 'x',
      };
  }
};

export const TDrawer = {
  add({
    title,
    showClose = true,
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
    placement = 'right',
  }: {
    title: React.ReactNode;
    showClose?: boolean;
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
    placement?: 'top' | 'bottom' | 'left' | 'right';
  }) {
    const { initialValue, animateValue, exitValue, property } = getAxisProperties(placement);
    const drawAnimation: Variants = {
      initial: {
        [property]: initialValue,
      },
      animate: {
        [property as 'string']: animateValue,
        transition: {
          duration: 0.2,
          ease: 'easeInOut',
        },
      },
      exit: {
        [property as 'string']: exitValue,
        transition: {
          duration: 0.2,
          ease: 'easeIn',
        },
      },
    };

    const id = drawerStore.add({
      attach,
      initialFocusEl,
      animation: drawAnimation as any,
      maskCls: cs('z-drawer fixed inset-0 bg-black/50 w-full h-full overflow-hidden', maskClassName),
      containerClassName: cs(
        'z-drawer fixed overflow-hidden',
        {
          'top-0 w-full': placement === 'top',
          'bottom-0 w-full': placement === 'bottom',
          'top-0 left-0 h-[100%]': placement === 'left',
          'top-0 right-0 h-[100%]': placement === 'right',
        },
        containerClassName,
      ),
      content: (
        <TDrawerBox
          title={title}
          showCloseIcon={showClose}
          showFooter={showFooter}
          className={cs(
            {
              'h-[320px]': placement === 'top' || placement === 'bottom',
              'w-[320px] h-[100%]': placement === 'right' || placement === 'left',
            },
            className,
          )}
          contentClassName={contentClassName}
          style={style}
          onCancel={() => {
            onCancel?.();
            drawerStore.remove(id);
          }}
          onOk={() => {
            onOk?.();
          }}
        >
          {content}
        </TDrawerBox>
      ),
      onCancel: () => {
        drawerStore.remove(id);
      },
    });
    return id;
  },

  update(id: string, data: any) {
    drawerStore.update(id, { contentProps: data });
  },
  remove(id: string) {
    drawerStore.remove(id);
  },
};
