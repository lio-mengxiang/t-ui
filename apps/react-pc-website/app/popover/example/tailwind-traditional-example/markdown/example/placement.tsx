import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App (){
  const styles = {
      container: {
        margin: '0 auto',
        width: '500px',
        height: '260px',
        position: 'relative',
      },
      placementTop: {
        position: 'absolute',
        top: '0',
        left: '42%',
      },
      placementTopLeft: {
        position: 'absolute',
        top: '0',
        left: '70px',
      },
      placementTopRight: {
        position: 'absolute',
        top: '0',
        right: '70px',
      },
      placementBottom: {
        position: 'absolute',
        bottom: '0',
        left: '42%',
      },
      placementBottomLeft: {
        position: 'absolute',
        bottom: '0',
        left: '70px',
        width: '120px',
      },
      placementBottomRight: {
        position: 'absolute',
        bottom: '0',
        right: '70px',
      },
      placementLeft: {
        position: 'absolute',
        left: '0',
        top: '42%',
      },
      placementLeftTop: {
        position: 'absolute',
        left: '0',
        top: '50px',
      },
      placementLeftBottom: {
        position: 'absolute',
        left: '0',
        bottom: '50px',
      },
      placementRight: {
        position: 'absolute',
        right: '0',
        top: '42%',
      },
      placementRightTop: {
        position: 'absolute',
        right: '0',
        top: '50px',
      },
      placementRightBottom: {
        position: 'absolute',
        right: '0',
        bottom: '50px',
      },
  };

  return (
    <div style={styles.container}>
      <TPopover popoverContent="Popover Content" showArrow>
        <TButton style={styles.placementTop} status="primary">top</TButton>
      </TPopover>
      <TPopover popoverContent="Popover Content" trigger="click" placement="top-start" showArrow>
        <TButton status="primary" style={styles.placementTopLeft}>top-start</TButton>
      </TPopover>
      <TPopover popoverContent="Popover Content" trigger="click" placement="top-end" showArrow>
        <TButton status="primary" style={styles.placementTopRight}>top-end</TButton>
      </TPopover>
      <TPopover popoverContent="Popover Content" trigger="click" placement="bottom-start" showArrow>
        <TButton status="primary" style={styles.placementBottomLeft}>bottom-start</TButton>
      </TPopover>
      <TPopover popoverContent="Popover Content" trigger="click" placement="bottom-end" showArrow>
        <TButton status="primary" style={styles.placementBottomRight}>bottom-end</TButton>
      </TPopover>
      <TPopover popoverContent={<div className="h-12 flex items-center">Popover Content</div>} trigger="click" placement="left-start" showArrow>
        <TButton status="primary" style={styles.placementLeftTop}>left-start</TButton>
      </TPopover>
      <TPopover popoverContent={<div className="h-12 flex items-center">Popover Content</div>} trigger="click" placement="left-end" showArrow>
        <TButton status="primary" style={styles.placementLeftBottom}>left-end</TButton>
      </TPopover>
      <TPopover popoverContent={<div className="h-12 flex items-center">Popover Content</div>} trigger="click" placement="right-start" showArrow>
        <TButton status="primary" style={styles.placementRightTop}>right-start</TButton>
      </TPopover>
      <TPopover popoverContent={<div className="h-12 flex items-center">Popover Content</div>} trigger="click" placement="right-end" showArrow>
        <TButton status="primary" style={styles.placementRightBottom}>right-end</TButton>
      </TPopover>
    </div>
  );
}
`;

export function PlacementExample() {
  return <CodePreview code={code} />;
}
