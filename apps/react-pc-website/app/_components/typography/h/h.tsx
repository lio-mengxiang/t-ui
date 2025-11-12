import { cs } from '@/_utils';
import React from 'react';

const getId = (children: React.ReactNode) => (typeof children === 'string' ? children : undefined);

export function H1({ children, subheading }: { children: React.ReactNode; subheading?: string }) {
  return (
    <h1 className="font-medium mb-8 text-[36px]" id={getId(children)}>
      {children}
      <div className="text-xl font-normal text-color-400">{subheading}</div>
    </h1>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-medium mb-8 mt-8 text-[28px]" id={getId(children)}>
      {children}
    </h2>
  );
}

export function H3({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={cs('font-medium mb-8 mt-8 text-[20px]', className)} id={getId(children)}>
      {children}
    </h3>
  );
}

export function H3Sub({ children, sub }: { children: React.ReactNode; sub: React.ReactNode }) {
  return (
    <div className="mb-8">
      <H3 className="mb-2">{children}</H3>
      <div className="text-[13px]">{sub}</div>
    </div>
  );
}

export function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-medium mb-8 mt-8 text-[16px]" id={getId(children)}>
      {children}
    </h4>
  );
}

export function H5({ children }: { children: React.ReactNode }) {
  return (
    <h5 className="font-medium mb-8 mt-8 text-[14px]" id={getId(children)}>
      {children}
    </h5>
  );
}

export function H6({ children }: { children: React.ReactNode }) {
  return (
    <h6 className="font-medium mb-8 mt-8 text-[12px]" id={getId(children)}>
      {children}
    </h6>
  );
}
