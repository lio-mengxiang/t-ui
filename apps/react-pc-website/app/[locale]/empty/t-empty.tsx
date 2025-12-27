import { type EmptyProps } from './interface';
import { cs } from '@/_utils';

export function TEmpty(props: EmptyProps) {
  const { description, icon, className, iconClassName, ...rest } = props;

  return (
    <div className={cs('text-sm text-center box-border gap-4', className)} {...rest}>
      <div className={cs('text-8xl leading-[1]', iconClassName)}>
        <div className="inline-flex justify-center">{icon}</div>
      </div>
      <div className="text-color-500">{description}</div>
    </div>
  );
}
