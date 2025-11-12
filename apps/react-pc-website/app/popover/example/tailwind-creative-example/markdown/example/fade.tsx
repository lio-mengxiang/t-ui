import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  function applyPopupFade(placement) {
    if (placement === 'top' || placement === 'top-end' || placement === 'top-start') {
      return {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
        exit: {
          opacity: 0,
        },
      };
    }
    if (placement === 'bottom' || placement === 'bottom-end' || placement === 'bottom-start') {
      return {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
        exit: {
          opacity: 0,
        },
      };
    }
    if (placement === 'left' || placement === 'left-end' || placement === 'left-start') {
      return {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
        exit: {
          opacity: 0,
        },
      };
    }
    if (placement === 'right' || placement === 'right-end' || placement === 'right-start') {
      return {
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
        exit: {
          opacity: 0,
        },
      };
    }
    return {};
  }

  return (
    <TPopover popoverContent="Popover Content" animateFn={applyPopupFade}>
      <TButton status="primary">Hover me!</TButton>
    </TPopover>
  );
}
`;

export function FadeExample() {
  return <CodePreview code={code} />;
}
