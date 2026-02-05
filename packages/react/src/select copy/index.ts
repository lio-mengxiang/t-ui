import {
  SelectRoot,
  SelectInputComponent,
  SelectContent,
  SelectAffix,
  SelectList,
  SelectEmpty,
  SelectOption,
  SelectView,
  SelectClear,
  SelectMultiTag,
  SelectMultiInput,
} from './components';
export { useSelectContext } from './context';
export * from './interface';

export const Select = {
  Root: SelectRoot,
  Input: SelectInputComponent,
  MultiInputRoot: SelectInputComponent,
  Affix: SelectAffix,
  List: SelectList,
  Option: SelectOption,
  Content: SelectContent,
  View: SelectView,
  Empty: SelectEmpty,
  Clear: SelectClear,
  MultiTag: SelectMultiTag,
  MultiInput: SelectMultiInput,
};
