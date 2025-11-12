import React, { useRef } from 'react';
import { cs } from '@/_utils';
import { IconLoadingLine, IconSearchLine } from '@t-headless-ui/react';
import { TInput, type TInputProps, type RefInputType } from './t-input';

const boxClassName = 'flex items-center h-full border px-4 py-2 bg-color-50 rounded-md dark:border-none';

interface SearchProps extends TInputProps {
  loading?: boolean;
  onSearch?: (value: RefInputType['dom']) => void;
  showButton?: boolean;
}

export function InputSearch(props: SearchProps) {
  const { loading, onSearch: onSearchProp, showButton = false, className, style, ...rest } = props;
  const getInputValueRef = useRef<RefInputType>({});

  const onSearch = () => {
    if (props.disabled) return;
    onSearchProp?.(getInputValueRef.current.dom);
  };

  return (
    <GroupWrapper className={cs('h-9', className)} style={style} showButton={showButton}>
      <TInput
        ref={getInputValueRef}
        {...rest}
        suffixElement={!showButton ? loading ? <IconLoadingLine className="animate-spin" /> : <IconSearchLine /> : null}
        onPressEnter={(value, e) => {
          onSearch();
          props.onPressEnter?.(value, e);
        }}
      />
      {showButton && (
        <div className={cs(boxClassName, 'border-l-0 cursor-pointer text-color-500')} onClick={onSearch}>
          {loading ? <IconLoadingLine className="animate-spin" /> : <IconSearchLine />}
        </div>
      )}
    </GroupWrapper>
  );
}

function GroupWrapper({
  children,
  className,
  style,
  showButton,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  showButton?: boolean;
}) {
  return (
    <div
      style={style}
      className={cs(
        'flex',
        {
          '[&>div:last-child]:rounded-tl-none [&>div:last-child]:rounded-bl-none': !!showButton,
          '[&>div:first-child]:rounded-tr-none [&>div:first-child]:rounded-br-none': !!showButton,
        },
        className,
      )}
    >
      {children}
    </div>
  );
}
