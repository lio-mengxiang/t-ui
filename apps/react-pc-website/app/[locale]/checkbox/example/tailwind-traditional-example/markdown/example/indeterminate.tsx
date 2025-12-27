import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [value, setValue] = useState([0, 1]);
  const options = ['Option 1', 'Option 2', 'Option 3'];


  function onChangeAll(checked) {
    if (checked) {
      setIndeterminate(false);
      setCheckAll(true);
      setValue([0, 1, 2]);
    } else {
      setIndeterminate(false);
      setCheckAll(false);
      setValue([]);
    }
  }

  function onChange(checkList) {
    setIndeterminate(!!(checkList.length && checkList.length !== options.length));
    setCheckAll(!!(checkList.length === options.length));
    setValue(checkList);
  }

  return (
    <div className="flex flex-wrap gap-4 flex-col">
      <TCheckbox onChange={onChangeAll} checked={checkAll} indeterminate={indeterminate} className="w-fit">
        {checkAll ? 'unCheck All' : 'Check All'}
      </TCheckbox>
      <Checkbox.Group value={value} onChange={onChange} className="flex gap-4 flex-wrap">
        {options.map((option, index) => (
          <TCheckbox key={index} value={index}>
            {option}
          </TCheckbox>
        ))}
      </Checkbox.Group>
    </div>
  );
}`;

export function IndeterminateExample() {
  return <CodePreview code={code} />;
}
