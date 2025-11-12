import React from 'react';

export function Ul({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc p-0 m-6 space-y-4">{children}</ul>;
}

export function Ol({ children }: { children: React.ReactNode }) {
  return <ol className="list-decimal p-0 m-6 space-y-4">{children}</ol>;
}
