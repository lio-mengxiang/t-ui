import * as React from 'react';
import { cs } from '@/_utils';
import { TButton } from '@/button/tailwind-button';
import { IconInfoFileLine, IconOpenFileLine, IconSearchFileLine } from '@t-headless-ui/react';

interface EmptyStateProps {
  title: string;
  description?: string;
  icons: React.ReactNode[];
  action?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export function EmptyState({ title, description, icons = [], action, className }: EmptyStateProps) {
  return (
    <div className={cs('bg-background border-border text-center', 'border-1 rounded-xl p-14 w-full', 'group', className)}>
      <div className="flex justify-center">
        {icons.length === 3 ? (
          <>
            <div className="bg-color size-12 grid place-items-center rounded-xl relative left-2.5 top-1.5 -rotate-6 shadow-lg group-hover:-translate-x-5 group-hover:-rotate-12 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200 border-color border">
              {icons[0]}
            </div>
            <div className="bg-color size-12 grid place-items-center rounded-xl relative z-10 shadow-lg group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200  border-color border">
              {icons[1]}
            </div>
            <div className="bg-color size-12 grid place-items-center rounded-xl relative right-2.5 top-1.5 rotate-6 shadow-lg group-hover:translate-x-5 group-hover:rotate-12 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200  border-color border">
              {icons[2]}
            </div>
          </>
        ) : (
          <div className="bg-color size-12 grid place-items-center rounded-xl shadow-lg ring-border group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
            {icons[0]}
          </div>
        )}
      </div>
      <h2 className="text-foreground font-medium mt-6">{title}</h2>
      {description ? <p className="text-sm mt-2">{description}</p> : null}
      <TButton status="primary" onClick={action?.onClick} className="w-20 mt-3">
        {action?.label || 'Reload'}
      </TButton>
    </div>
  );
}
export function BasicExample() {
  return (
    <div className="border border-border rounded-xl">
      <EmptyState title="No Data" icons={[<IconInfoFileLine key={1} />, <IconOpenFileLine key={2} />, <IconSearchFileLine key={3} />]} />
    </div>
  );
}
