import { CodePreview2 } from '@/_components/code-preview2';

const code = `
import React, { useState, useEffect } from 'react';
import { IconCheckLine, IconCloseLine, IconDownLine, IconEmptyFill, Select } from '@t-headless-ui/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// 联动数据源
const DATA = {
  'China': ['Beijing', 'Sichuan', 'Guangdong', 'Shanghai'],
  'United States': ['New York', 'Los Angeles', 'Chicago', 'San Francisco'],
  'United Kingdom': ['London', 'Manchester', 'Birmingham', 'Edinburgh'],
  'Germany': ['Berlin', 'Munich', 'Hamburg', 'Frankfurt'],
  'France': ['Paris', 'Lyon', 'Marseille', 'Nice'],
};

function App() {
  const provinces = Object.keys(DATA);
  
  const [province, setProvince] = useState(provinces[0]);
  const [city, setCity] = useState(DATA[provinces[0]][0]);

  const provinceOptions = provinces.map(p => ({ label: p, value: p }));
  const cityOptions = (DATA[province] || []).map(c => ({ label: c, value: c }));

  const handleProvinceChange = (val) => {
    setProvince(val);
    const nextCities = DATA[val] || [];
    setCity(nextCities[0] || '');
  };

  return (
    <div className="flex gap-4 flex-wrap">
      <SimpleSelect 
        options={provinceOptions} 
        value={province}
        placeholder="Select Province"
        showSearch={false}
        onChange={handleProvinceChange}
      />

      <SimpleSelect 
        options={cityOptions} 
        value={city}
        placeholder="Select City"
        showSearch={false}
        onChange={(val) => setCity(val)}
      />
    </div>
  );
}

const SimpleSelect = ({ 
  options, 
  showSearch = true, 
  placeholder = "Select item", 
  className,
  value,
  ...props 
}) => {
  return (
    <Select.Root
      options={options}
      showSearch={showSearch}
      {...(value !== undefined ? { value } : {})}
      {...props}
    >
      <Select.View
        placeholder={placeholder}
        className={cn(
          // 1. Layout & Size
          'group flex h-[34px] w-52 items-center overflow-hidden px-3',
          // 2. Visuals (Border & Radius)
          'rounded border border-[var(--border-color)]',
          // 3. Hover & Interaction
          'hover:border-[var(--border-color-200)]',
          
          // 4. Focus State
          '[&[data-focused="true"]]:border-[var(--border-color-200)]',
          
          // 5. Disabled State (One per line for clarity)
          '[&[aria-disabled="true"]]:cursor-not-allowed',
          '[&[aria-disabled="true"]]:border-[var(--border-color)]',
          '[&[aria-disabled="true"]]:bg-[var(--bg-color-100)]',
          '[&[aria-disabled="true"]]:text-[var(--text-color-400)]',
          
          // 6. Conditional Logic
          showSearch ? 'cursor-text' : 'cursor-pointer',
          className
        )}
      >
        <div className="flex items-center w-full text-[14px]">
          <Select.Input />
          <Select.Affix 
            className={cn(
              "flex items-center justify-center transition-all duration-100",
              "text-[var(--text-color-400)] text-[14px]"
            )}
          >
            <IconDownLine className="cursor-pointer" />
          </Select.Affix>
        </div>
      </Select.View>
      
      <Select.Content
        className={cn(
          // Layout & Visuals
          "z-popup py-1.5 rounded shadow-md relative",
          "bg-[var(--bg-color)] border border-[var(--border-color)]",
          // Typography
          "text-sm text-[var(--text-color)]"
        )}
      >
        <Select.Empty className="flex justify-center px-3 py-2 text-[var(--text-color-400)]">
          <IconEmptyFill className="text-6xl" />
        </Select.Empty>

        {/* Scroll Container */}
        <div className="max-h-[200px] overflow-y-auto">
          <Select.List>
            {(item, index) => (
              <Select.Option
                key={index}
                item={item}
                className={cn(
                  // Layout
                  'flex justify-between items-center px-3 py-2',
                  // Interaction & Animation
                  'cursor-pointer transition-colors hover:bg-[var(--bg-color-100)]'
                )}
              >
                <span className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis pr-1">
                  {item.label}
                </span>
                <IconCheckLine 
                  className={cn(
                    "transition-all duration-200 opacity-0 text-[var(--primary-color)]",
                    "[[aria-selected='true']_&]:opacity-100" // Selected State
                  )} 
                />
              </Select.Option>
            )}
          </Select.List>
        </div>
      </Select.Content>
    </Select.Root>
  );
};

function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`;

export function CoordinateExample() {
  return <CodePreview2 code={code} />;
}
