import { CheckboxContext } from './context';
import { Group } from './group';
import { Checkbox as InnerCheckbox } from './checkbox';
import IconCheck from './icon-check';

const Checkbox = {
  CheckboxContext,
  Root: InnerCheckbox,
  IconCheck,
  Group,
};

export { Checkbox };
