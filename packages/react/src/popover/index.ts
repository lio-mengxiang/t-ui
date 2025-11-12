import { Popup } from './popover';
import { Trigger } from './trigger';
import { Content } from './content';
import { PopupContext } from './root-context';

const Popover = {
  Root: Popup,
  Trigger,
  Content,
  PopoverContext: PopupContext,
};

export { Popover };
export * from './interface';
