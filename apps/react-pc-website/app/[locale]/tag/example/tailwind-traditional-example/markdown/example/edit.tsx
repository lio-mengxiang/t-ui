import { CodePreview } from '@/_components/code-preview';

const code = `
function App() {
  const [tags, setTags] = useState(['Tag 1', 'Tag 2', 'Tag 3']);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function addTag() {
    if (inputValue) {
      tags.push(inputValue);
      setTags(tags);
      setInputValue('');
    }

    setShowInput(false);
  }

  function removeTag(index) {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  }

  return (
    <div className="flex gap-3 flex-wrap">
      {tags.map((tag, index) => {
        return (
          <TTag key={index} onClose={() => removeTag(index)} closable={index !== 0}>
            {tag}
          </TTag>
        );
      })}
      {showInput ? (
        <TInput autoFocus value={inputValue} style={{ width: 74, height: 24 }} onPressEnter={addTag} onBlur={addTag} onChange={setInputValue} />
      ) : (
        <TTag
          className="cursor-pointer w-[74px] bg-color-50"
          tabIndex={0}
          onClick={() => setShowInput(true)}
          onKeyDown={(e) => {
            const keyCode = e.keyCode || e.which;
            if (keyCode === 13) {
              // enter
              setShowInput(true);
            }
          }}
        >
          + Add Tag
        </TTag>
      )}
    </div>
  );
}`;

export function EditExample() {
  return <CodePreview code={code} />;
}
