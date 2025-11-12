import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  function applyPopupBounceScale(placement) {
    const baseAnimation = {
      initial: {
        opacity: 0,
        scale: 0.3,
        transformOrigin: getTransformOrigin(placement)
      },
      animate: {
        opacity: 1,
        scale: 1,
        transition: {
          type: "spring",
          damping: 15,
          stiffness: 300,
          bounce: 0.4
        }
      },
      exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
          duration: 0.2,
          ease: "easeInOut"
        }
      }
    };
    return baseAnimation;
  }

  function getTransformOrigin(placement) {
    const origins = {
      'top': 'bottom center',
      'top-start': 'bottom left',
      'top-end': 'bottom right',
      'bottom': 'top center',
      'bottom-start': 'top left',
      'bottom-end': 'top right',
      'left': 'right center',
      'left-start': 'right top',
      'left-end': 'right bottom',
      'right': 'left center',
      'right-start': 'left top',
      'right-end': 'left bottom'
    };
    return origins[placement] || 'center';
  }

  return (
    <TPopover popoverContent="Bouncy Popover!" animateFn={applyPopupBounceScale}>
      <TButton status="primary">Bounce Scale</TButton>
    </TPopover>
  );
}
`;

export function BounceScaleExample() {
  return <CodePreview code={code} />;
}
