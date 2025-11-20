import { RadioContext } from './context';
import { RadioGroup } from './group';
import { Radio as InnerRadio } from './radio';

const Radio = {
  RadioContext,
  Root: InnerRadio,
  Group: RadioGroup,
};

export { Radio };
