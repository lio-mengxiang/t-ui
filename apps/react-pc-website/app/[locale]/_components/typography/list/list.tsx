import { cs } from '@/_utils';

export function Ul({ children, className }: { children: React.ReactNode; className?: string }) {
  return <ul className={cs('list-disc p-0 m-6 space-y-4', className)}>{children}</ul>;
}

export function Ol({ children, className }: { children: React.ReactNode; className?: string }) {
  return <ol className={cs('list-decimal p-0 m-6 space-y-4', className)}>{children}</ol>;
}
