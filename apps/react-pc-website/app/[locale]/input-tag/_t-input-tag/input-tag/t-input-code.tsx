import { CodeBlock } from '@/_components/typography';

export function TInputCode() {
  return (
    <div>
      <div className="mb-3 text-color-500">↓ TInputCode.tsx:</div>
      <CodeBlock
        code={`
import React, { type ReactNode, useContext } from 'react';
import {
  InputTag as InputTagHeadless,
  type InputTagRootProps,
  type InputTagProps,
  IconCloseLine,
  type InputTagHandle,
} from '@t-headless-ui/react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface TInputTagExtendedProps extends Omit<InputTagRootProps, 'prefix' | 'suffix'> {
  inputProps?: InputTagProps;
  allowClear?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  inputRef?: React.Ref<InputTagHandle>;
}

export function TInputTag({
  inputProps = {},
  allowClear,
  prefix,
  suffix,
  inputRef,
  defaultValue,
  value,
  inputValue,
  disabled,
  readOnly,
  onRemove,
  onChange,
  labelInValue,
  maxTagCount,
  ...rest
}: TInputTagExtendedProps) {
  return (
    <InputTagHeadless.Root
      {...rest}
      defaultValue={defaultValue}
      value={value}
      inputValue={inputValue}
      disabled={disabled}
      readOnly={readOnly}
      onRemove={onRemove}
      onChange={onChange}
      labelInValue={labelInValue}
      maxTagCount={maxTagCount}
    >
      <CustomInputWrapper prefix={prefix} suffix={suffix} allowClear={allowClear}>
        <InputTagHeadless.Input
          ref={inputRef}
          renderTag={({ label, closable, onClose, disabled }, index) => (
            <div
              key={index}
              className={cn(
                'flex items-center h-[24px] overflow-hidden rounded-[2px] border border-[var(--border-color)] bg-[var(--bg-color-100)] pl-2 pr-1 text-[12px]',
                {
                  'opacity-50 cursor-not-allowed pr-2': disabled,
                  'pr-2': disabled || readOnly,
                },
              )}
            >
              <span className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis">{label}</span>
              {closable && !disabled && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClose(e);
                  }}
                  className="flex items-center px-[2px] text-[var(--text-color-400)] hover:text-[var(--border-color-200)]"
                >
                  <IconCloseLine />
                </button>
              )}
            </div>
          )}
          placeholder="Please input"
          {...inputProps}
          className={cn(
            'flex-1 min-w-[40px] border-none outline-none bg-transparent text-[13px] py-1',
            {
              'cursor-not-allowed': disabled,
              'cursor-default': readOnly,
            },
            inputProps.className,
          )}
        />
      </CustomInputWrapper>
    </InputTagHeadless.Root>
  );
}

function CustomInputWrapper({
  children,
  prefix,
  suffix,
  allowClear,
}: {
  children: ReactNode;
  prefix?: ReactNode;
  suffix?: ReactNode;
  allowClear?: boolean;
}) {
  const { focused, disabled, readOnly } = useContext(InputTagHeadless.Context);

  return (
    <div
      className={cn(
        // 外层容器：flex 不换行，始终垂直居中
        'group flex min-h-[34px] items-center gap-2 overflow-hidden rounded border border-[var(--border-color)] px-3 transition cursor-text',
        {
          'border-[var(--border-color-200)]': focused,
          'bg-[var(--bg-color-disabled)] cursor-not-allowed': disabled,
          'cursor-default': readOnly,
          'hover:border-[var(--border-color-200)]': !disabled && !readOnly,
        },
      )}
    >
      {/* 1. 前缀区：始终居中 */}
      {prefix && <div className="flex shrink-0 items-center justify-center text-[var(--text-color-400)]">{prefix}</div>}

      {/* 2. 内容区：允许换行，占据剩余空间 */}
      <div className="flex flex-1 flex-wrap items-center gap-1 py-1">{children}</div>

      {/* 3. 后置操作区（清除 + 后缀）：始终居中 */}
      <div className="flex shrink-0 items-center gap-2">
        {allowClear && <ClearButton />}
        {suffix && <div className="flex items-center justify-center text-[var(--text-color-400)]">{suffix}</div>}
      </div>
    </div>
  );
}

function ClearButton() {
  const { value, disabled, readOnly, handleClearClick } = useContext(InputTagHeadless.Context);

  // 如果禁用、只读或没有值，不渲染
  if (disabled || readOnly || !value?.length) return null;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        handleClearClick(e);
      }}
      className="flex invisible group-hover:visible items-center justify-center"
    >
      <IconCloseLine className="cursor-pointer text-[14px] opacity-60 hover:opacity-100 transition-opacity" />
    </div>
  );
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`}
        language="jsx"
      />
    </div>
  );
}
