import { CodePreview } from '@/_components/code-preview';

const code = `function App() {
  const TagCheckbox = ({ children, className, ...rest }) => {
    return (
      <Checkbox.Root
        className={cs(
          'relative flex cursor-pointer items-center text-xs group h-6 px-2  border border-color rounded-md transition-all duration-200',
          '[&_>input[type="checkbox"]]:absolute [&_>input[type="checkbox"]]:left-0 [&_>input[type="checkbox"]]:top-0 [&_>input[type="checkbox"]]:opacity-0, [&_>input[type="checkbox"]]:w-0 [&_>input[type="checkbox"]]:h-0',
          'hover:scale-105',
          '[&[aria-disabled="true"]]:cursor-not-allowed [&[aria-disabled="true"]]:opacity-50',
          '[&[aria-readonly="true"]]:cursor-default',
          '[&[aria-checked="true"]]:border-color-800 [&[aria-checked="true"]]:bg-color-50',
          className,
        )}
        {...rest}
      >
        {children}
      </Checkbox.Root>
    );
  };
  return (
    <Checkbox.Group defaultValue={[]} className="flex gap-4 flex-wrap ml-2">
      <TagCheckbox value="1" className="flex flex-col justify-center">
        Tag1
      </TagCheckbox>
      <TagCheckbox value="2" className="flex flex-col justify-center">
        Tag2
      </TagCheckbox>
      <TagCheckbox value="3" className="flex flex-col justify-center">
        Tag3
      </TagCheckbox>
    </Checkbox.Group>
  );
}
`;
export function CheckableExample() {
  return <CodePreview code={code} />;
}
