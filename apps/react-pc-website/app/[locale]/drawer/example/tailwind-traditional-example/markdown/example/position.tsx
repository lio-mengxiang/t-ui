import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  const [placement, setPlacement] = useState('right');
  return (
    <div className="flex gap-4 flex-col">
      <Radio.Group defaultValue={placement} onChange={setPlacement} className="flex gap-4 flex-wrap">
        <TRadio value="top">top</TRadio>
        <TRadio value="bottom">bottom</TRadio>
        <TRadio value="left">left</TRadio>
        <TRadio value="right">right</TRadio>
      </Radio.Group>
      <TButton
        status="primary"
        className="w-28"
        onClick={() => {
          TDrawer.add({
            title: 'Drawer Alert',
            placement,
            content: 'This is a message!',
          });
        }}
      >
        Open Drawer
      </TButton>
    </div>
  );
}`;

export function PositionExample() {
  return <CodePreview code={code} />;
}
