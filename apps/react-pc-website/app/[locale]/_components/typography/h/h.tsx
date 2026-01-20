import { cs } from '@/_utils';

const getId = (children: React.ReactNode) => (typeof children === 'string' ? children : undefined);

export function H1({ children, subheading }: { children: React.ReactNode; subheading?: string }) {
  return (
    <h1 className="font-medium mb-8 text-[36px]" id={getId(children)}>
      {children}
      <div className="text-lg font-normal text-color-400">{subheading}</div>
    </h1>
  );
}

export function H2({ children, subheading, className, ...rest }: { children: React.ReactNode; className?: string; subheading?: string }) {
  return (
    <h2 className={cs('font-medium mb-8 mt-8 text-[28px]', className)} id={getId(children)} {...rest}>
      {children}
      <div className="text-base font-normal text-color-400">{subheading}</div>
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

export function H3Sub({ children, sub, className }: { children: React.ReactNode; sub?: React.ReactNode; className?: string }) {
  return (
    <div className={cs('font-medium mb-8 mt-8 text-xl', className)}>
      <h3 className="mb-2" id={getId(children)}>
        {children}
      </h3>
      <div className="text-xs font-normal text-color-400">{sub}</div>
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
