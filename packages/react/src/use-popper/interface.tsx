import type { Options as PopperOptions, State as PopperState, Instance as PopperInstance } from '../mini-floating-ui/interface';

export type Options = Partial<PopperOptions>;

type Styles = {
  [key: string]: Partial<CSSStyleDeclaration>;
};

export type State = {
  styles: Styles;
};

export type UsePopperResult = {
  state?: PopperState;
  styles: Styles;
  update?: PopperInstance['update'];
  forceUpdate?: PopperInstance['forceUpdate'];
};
