import { CodePreview } from '@/_components/code-preview';
import React from 'react';

const code = `
function App() {
  const [visible] = useState(true);
  const [spanVisible, setVisible] = useState(false);
  const [content, setContent] = useState('This is the popup content');
  const btnClicksRef = useRef(0);

  const toggleContent = () => {
    btnClicksRef.current += 1;
    const showMore = btnClicksRef.current % 2 !== 0;
    setVisible(showMore);
    setContent(\`This is the popup content\${showMore ? '，There are many, many, many, many....' : ''}\`);
  };
  return (
    <TPopover popoverContent="Popover Content" placement="right" visible={visible}>
      <TButton status="primary" onClick={toggleContent}>Click to change content{spanVisible && <span>，click again</span>}</TButton>
    </TPopover>
  );
}
`;

export function AdaptiveExample() {
  return <CodePreview code={code} />;
}
