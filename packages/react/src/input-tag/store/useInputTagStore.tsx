'use client';
import { useRef, useState } from 'react';
import { formatValue, tagCloseHandler, valueChangeHandler } from '../utils';
import { useMergeValue } from '../../hooks';
import { RefInputType } from '../../input/input';
import { isUndefined } from '../../utils';
import { CLEAR } from '../constants';
import { getHotkeyHandler } from '../../utils/getHotkeyHandler';
import { Backspace } from '../../utils/keycode';

// types
import type { InputTagRootProps, ObjectValueType } from '../interface';

interface useInputTagStoreProps {
  defaultValue: InputTagRootProps['defaultValue'];
  propsValue: InputTagRootProps['value'];
  propsInputValue: InputTagRootProps['inputValue'];
  readOnly: InputTagRootProps['readOnly'];
  disabled: InputTagRootProps['disabled'];
  onRemove: InputTagRootProps['onRemove'];
  onChange: InputTagRootProps['onChange'];
  labelInValue: InputTagRootProps['labelInValue'];
}

export function useInputTagStore(props: useInputTagStoreProps) {
  const { defaultValue, propsValue, propsInputValue, readOnly, disabled, onRemove, onChange, labelInValue } = props;

  const refInput = useRef<RefInputType>(null);
  const refTSLastSeparateTriggered = useRef<number>(null);

  const [focused, setFocused] = useState(false);

  const [value, setValue] = useMergeValue<ObjectValueType[]>([], {
    defaultValue: !isUndefined(defaultValue) ? formatValue(defaultValue) : undefined,
    value: !isUndefined(propsValue) ? formatValue(propsValue) : undefined,
  });

  const [inputValue, setInputValue] = useMergeValue('', {
    value: propsInputValue,
  });

  const handleClearClick = (e) => {
    e.stopPropagation();
    valueChangeHandler({ disabled, readOnly, setValue, value: [], onChange, labelInValue, reason: CLEAR });
    if (!focused) {
      refInput.current?.focus();
    }
  };

  // 删除最后一个 closable 不是 true 的标签
  const hotkeyHandler = getHotkeyHandler(
    new Map([
      [
        Backspace.code,
        (event) => {
          if (!(event.target as HTMLInputElement).value && value.length) {
            for (let index = value.length - 1; index >= 0; index--) {
              const itemValue = value[index];
              if (itemValue.closable !== false) {
                tagCloseHandler({
                  item: itemValue,
                  index,
                  event,
                  onRemove,
                  value,
                  disabled,
                  readOnly,
                  setValue,
                  onChange,
                  labelInValue,
                });
                return;
              }
            }
          }
        },
      ],
    ]),
  );

  return {
    refInput,
    refTSLastSeparateTriggered,
    focused,
    setFocused,
    value,
    setValue,
    inputValue,
    setInputValue,
    hotkeyHandler,
    handleClearClick,
  };
}
