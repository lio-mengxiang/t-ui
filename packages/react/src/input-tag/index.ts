import { InputTagInput, InputTagRoot, InputTag as InputTagComponent, InputTagClear } from './components';
import { InputTagInnerContext } from './inner-context';
export * from './interface';

const InputTag = {
  Root: InputTagRoot,
  Input: InputTagInput,
  Tag: InputTagComponent,
  Clear: InputTagClear,
  Context: InputTagInnerContext,
};

export { InputTag };
