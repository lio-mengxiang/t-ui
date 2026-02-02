import {} from 'react';
import { tagCloseHandler } from './tagCloseHandler';
import { type InputTagRootProps, type InputTagProps, type ObjectValueType } from '../interface';

export function mergedRenderTag({
  readOnly,
  item,
  disabled,
  index,
  renderTag,
  value,
  onRemove,
  setValue,
  onChange,
  labelInValue,
}: {
  item: ObjectValueType;
  index: number;
  onRemove: InputTagRootProps['onRemove'];
  value: ObjectValueType[];
  disabled: InputTagRootProps['disabled'];
  readOnly: InputTagRootProps['readOnly'];
  setValue: React.Dispatch<React.SetStateAction<ObjectValueType[]>>;
  onChange: InputTagRootProps['onChange'];
  labelInValue: InputTagRootProps['labelInValue'];
  renderTag: InputTagProps['renderTag'];
}) {
  const { value: itemValue, label } = item;
  const closable = !readOnly && !disabled && item.disabled !== false;
  const onClose = (event) => {
    tagCloseHandler({ item, index, event, onRemove, value, disabled, readOnly, setValue, onChange, labelInValue });
  };

  return renderTag(
    {
      value: itemValue,
      label,
      closable,
      onClose,
      disabled,
      readOnly,
    },
    index,
    value,
  );
}
