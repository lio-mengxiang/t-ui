import { IconCheckLine, IconCloseLine, IconDownLine, Select, type SelectRootProps, type SelectViewProps } from '@t-headless-ui/react';
import { cs } from '../../_utils';

export const NSelect = ({
  options,
  showSearch = true,
  placeholder = '请选择...',
  className,
  ...props
}: SelectRootProps & SelectViewProps) => {
  return (
    <Select.Root options={options} showSearch={showSearch} {...props}>
      <Select.View
        placeholder={placeholder}
        className={cs(
          // 1. Layout & Size
          'group flex h-[28px] w-48 items-center overflow-hidden px-3',
          // 2. Visuals
          // 'rounded border border-[var(--border-color)]',
          // 3. Interactions
          // 'hover:border-[var(--border-color-200)]',

          // --- 修复 tab 聚焦有蓝色边框的问题 ---
          'outline-none focus:outline-none',

          // 4. States: Focus
          '[&[data-focused="true"]]:border-[var(--border-color-200)]',

          // 5. States: Disabled
          '[&[aria-disabled="true"]]:cursor-not-allowed',
          '[&[aria-disabled="true"]]:border-[var(--border-color)]',
          '[&[aria-disabled="true"]]:bg-[var(--bg-color-100)]',
          '[&[aria-disabled="true"]]:text-[var(--text-color-400)]',

          // 6. States: ReadOnly
          '[&[aria-readOnly="true"]]:cursor-default',
          '[&[aria-readOnly="true"]]:border-[var(--border-color)]',

          // 7. Dynamic Logic
          {
            'cursor-text': showSearch,
            'cursor-pointer': !showSearch,
          },
          className,
        )}
      >
        <div className="flex items-center text-[12px] w-full">
          <Select.Input />
          <Select.Clear className="flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100">
            <IconCloseLine className="cursor-pointer text-[14px] opacity-60 hover:opacity-100 h-[34px]" />
          </Select.Clear>
          <Select.Affix className="flex items-center justify-center transition-all duration-100 text-[var(--text-color-600)] text-[14px]">
            <IconDownLine className="cursor-pointer" />
          </Select.Affix>
        </div>
      </Select.View>

      <Select.Content
        wrapperClassName="z-[1001]"
        className={cs(
          // Layout & Visuals
          'py-1.5 rounded shadow-md relative',
          'max-h-[244px] overflow-y-auto',
          'bg-[var(--bg-color)] border border-[var(--border-color)]',
          // Typography
          'text-sm text-[var(--text-color)]',
        )}
      >
        <Select.Empty className="flex px-3 py-2 text-[var(--text-color-400)]">No data</Select.Empty>
        <Select.List>
          {(item, index) => {
            const isTitle = !!item.isGroupTitle;
            const isGrouped = item.grouped === true;
            const isDisabled = item.disabled === true;

            return (
              <Select.Option
                key={index}
                item={item}
                activeClassName="bg-[var(--bg-color-100)]"
                className={cs(
                  // Layout & Interaction
                  'flex justify-between items-center px-3 py-2 transition-colors cursor-pointer',
                  // Conditionals
                  {
                    'opacity-50 cursor-not-allowed': isDisabled,
                    'text-[var(--text-color-400)] text-[12px] cursor-default bg-transparent': isTitle,
                    'pointer-events-none': isTitle || isDisabled,
                  },
                )}
              >
                <span className={cs('flex-1 overflow-hidden whitespace-nowrap text-ellipsis pr-1', { 'pl-3': isGrouped })}>
                  {item.label}
                </span>
                <IconCheckLine className={cs('transition-all duration-200 opacity-0', '[[aria-selected="true"]_&]:opacity-100')} />
              </Select.Option>
            );
          }}
        </Select.List>
      </Select.Content>
    </Select.Root>
  );
};
