import React from 'react';
import type { ObjectValueType, ValueChangeReason, InputTagRootProps } from '../interface';

interface ValueChangeProps {
  disabled: InputTagRootProps['disabled'];
  readOnly: InputTagRootProps['readOnly'];
  setValue: React.Dispatch<React.SetStateAction<ObjectValueType[]>>;
  value: ObjectValueType[];
  onChange: InputTagRootProps['onChange'];
  labelInValue: InputTagRootProps['labelInValue'];
  reason: ValueChangeReason;
}

export function valueChangeHandler({ disabled, readOnly, setValue, value, onChange, labelInValue, reason }: ValueChangeProps) {
  if (disabled || readOnly) return;
  setValue(value);
  onChange?.(labelInValue ? value : value.map((x) => x.value), reason);
}
