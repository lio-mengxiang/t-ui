import React from 'react';
import { REMOVE } from '../constants';
import type { InputTagRootProps, ObjectValueType } from '../interface';
import { valueChangeHandler } from './valueChangeHandler';

interface TagCloseHandlerProps {
  item: ObjectValueType;
  index: number;
  event: any;
  onRemove: InputTagRootProps['onRemove'];
  value: ObjectValueType[];
  disabled: InputTagRootProps['disabled'];
  readOnly: InputTagRootProps['readOnly'];
  setValue: React.Dispatch<React.SetStateAction<ObjectValueType[]>>;
  onChange: InputTagRootProps['onChange'];
  labelInValue: InputTagRootProps['labelInValue'];
}

export function tagCloseHandler({
  item,
  index,
  event,
  onRemove,
  value,
  disabled,
  readOnly,
  setValue,
  onChange,
  labelInValue,
}: TagCloseHandlerProps) {
  onRemove?.(item, index, event);
  valueChangeHandler({
    disabled,
    readOnly,
    setValue,
    value: [...value.slice(0, index), ...value.slice(index + 1)],
    onChange,
    labelInValue,
    reason: REMOVE,
  });
}
