import { INPUT } from '../constants';

export function keepFocus(e) {
  if (e.target.tagName !== INPUT) {
    e.preventDefault();
  }
}
