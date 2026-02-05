import { isObject } from '../../utils';
import type { SelectRootProps } from '../interface';
import { isEmptyValue } from './is-empty-value';

type SelectInnerStateValue = number | string | (number | string)[] | undefined;

export function getValidValue(value: SelectRootProps['value'], isMultiple: boolean, labelInValue: boolean): SelectInnerStateValue {
  // Compatible when labelInValue is set, value is passed in the object
  if (labelInValue) {
    if (isMultiple) {
      value = Array.isArray(value) ? value.map((item) => (isObject(item) && 'value' in item ? item.value : item)) : value;
    } else {
      value = isObject(value) && 'value' in value ? value.value : value;
    }
  }

  return isEmptyValue(value, isMultiple) ? (isMultiple ? [] : undefined) : (value as SelectInnerStateValue);
}
