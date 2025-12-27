import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  function Tag({ children }) {
    const [visible, setVisible] = useState(true);

    return (
      <>
        {visible && (
          <TTag
            closable
            onClose={() => {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  if (Math.random() >= 0.5) {
                    resolve();
                  } else {
                    TMessage.error({
                      message: '删除失败！',
                    });
                    reject();
                  }
                }, 3000);
              })
            }}
          >
            {children}
          </TTag>
        )}
      </>
    );
  }
  return (
    <Tag>Tag</Tag>
  );
}
`;

export function AsyncCloseExample() {
  return <CodePreview code={code} />;
}
