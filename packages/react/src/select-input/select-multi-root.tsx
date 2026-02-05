'use client';

import React, { useMemo } from 'react';
import { InputTag } from '../input-tag';
import { useSelectInnerContext } from './inner-context';
import { usePersistCallback } from '../hooks';
import type { SelectMultiInputRootProps } from '../select/interface';

export const SelectMultiRoot = ({ children, className, dataVisible }: SelectMultiInputRootProps & { dataVisible?: boolean }) => {
  const { inputValue, onRemoveCheckedItem, readOnly, disabled, maxTagCount, refInput, showSearch, renderText, value } =
    useSelectInnerContext();

  const renderTextFn = usePersistCallback(renderText);

  const getTag = (v) => {
    const result = renderTextFn(v);
    return { value: v, label: result.text, disabled: result.disabled };
  };

  const tagsToShow = useMemo(() => {
    return value.map((v) => getTag(v));
  }, [value, renderTextFn]);

  return (
    <InputTag.Root
      data-visible={dataVisible}
      disabled={disabled}
      readOnly={readOnly}
      disableInput={!showSearch}
      value={tagsToShow}
      inputValue={inputValue}
      maxTagCount={maxTagCount}
      ref={refInput}
      className={className}
      onRemove={(value, index, event) => {
        onRemoveCheckedItem?.(value, index, event);
      }}
    >
      {children}
    </InputTag.Root>
  );
};
