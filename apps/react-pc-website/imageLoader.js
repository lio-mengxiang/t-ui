'use client';

import { getBasePath } from './next.config';

export default function ImageLoader({ src }) {
  return `${getBasePath()}${src}`;
}
