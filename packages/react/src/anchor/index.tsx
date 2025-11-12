import { Anchor as Root } from './anchor';
import { AnchorLink } from './link';
import { AnchorContext } from './context';
export * from './interface';

const Anchor = {
  Root,
  Link: AnchorLink,
  Context: AnchorContext,
};

export { Anchor };
