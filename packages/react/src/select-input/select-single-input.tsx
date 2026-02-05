'use client';

import React from 'react';
import { InputComponent } from '../input';
import { fillNBSP } from '../utils';
import { useSelectInnerContext } from './inner-context';
import { SearchStatusEnum } from './select-input-root';

export const SelectSingleInput = ({ className }: { className?: string }) => {
  const {
    inputValue,
    isEmptyValue,
    placeholder,
    readOnly,
    disabled,
    searchStatus,
    mergedFocused,
    canFocusInput,
    inputEventHandlers,
    refInput,
    value = [],
    renderText,
  } = useSelectInnerContext();

  const renderedValue = value !== undefined ? renderText(value).text : '';

  const renderSingle = () => {
    let currentValue: string;

    switch (searchStatus) {
      case SearchStatusEnum.SEARCHING:
        currentValue = inputValue || '';
        break;
      default:
        currentValue = renderedValue;
        break;
    }

    const needShowInput = !!((mergedFocused && canFocusInput) || isEmptyValue);

    // 上层会在 onBlur 时，会将 inputValue 设为 ''，也就是意味着 focus 时，inputValue 也是 ''
    // 点击 option 的时候也会清空 inputValue
    const inputProps = canFocusInput
      ? {
          ...inputEventHandlers,
          style: { width: '100%', pointerEvents: 'none', outline: 'none', backgroundColor: 'transparent' },
          // 搜索态输入文字时的值，focus 的时候的值，如果没选中值，inputValue 是空（每次 focus都是新的开始），所以会显示 placeholder
          // 如果选中值，inputValue 是空（每次 focus都是新的开始），所以会显示 placeholder
          // 只有选中后，输入值，才会更新 value
          value: needShowInput && typeof currentValue !== 'object' ? currentValue : '',
          // 负责搜索态，focus 的时候的值，如果已经选中了值，就显示选中的值，如果没选中，就本来的 placeholder
          placeholder: (!!renderedValue || renderedValue === 0) && typeof renderedValue !== 'object' ? renderedValue : placeholder,
        }
      : {
          tabIndex: -1,
          style: {
            pointerEvents: 'none',
            width: '100%',
            outline: 'none',
            backgroundColor: 'transparent',
          },
          value: '',
          // 负责非搜索态，显示 placeholder
          placeholder,
        };

    return (
      <>
        {/* 两种情况会使用到 InputComponent：
        1. 非搜索态，isEmptyValue 为 true
        2. 搜索态输入文字时的值，且 focus, inputValue 是空（每次 focus都是新的开始），所以会显示 placeholder， 输入值时 显示 inputValue */}
        <InputComponent
          {...inputProps}
          className={className}
          ref={refInput}
          readOnly={readOnly}
          disabled={disabled}
          // 一旦选了值，InputComponent 就消失，没选就显示 placeholder, 还有就是 mergedFocused && canFocusInput 都未 true 会显示
          style={!needShowInput ? { opacity: 0, position: 'absolute', zIndex: -1 } : (inputProps.style as React.CSSProperties)}
        />
        {/* 它负责非搜索态，并且选中值文本的情况， 负责 mergedFocused && canFocusInput 为 true 时，消失 */}
        <div
          style={
            needShowInput ? { display: 'none' } : { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '100%' }
          }
        >
          {fillNBSP(renderedValue)}
        </div>
      </>
    );
  };

  return <>{renderSingle()}</>;
};
