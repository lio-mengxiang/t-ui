import { CSSProperties } from 'react';

export interface CodePreviewProps {
  /**
   * `JSX` source code
   */
  code?: string;
  css?: string;
  /**
   * Dependent component
   */
  dependencies?: Record<string, any>;
  demoContainerStyle?: CSSProperties;
  id?: string;
  cssEditable?: boolean;
  isCenter?: boolean;
}
