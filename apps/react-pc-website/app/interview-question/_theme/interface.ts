import * as React from 'react';

export interface LocalstorageProviderProps extends React.PropsWithChildren {
  defaultValue: Record<string, any>;
  nonce?: string;
  scriptContent: string;
}

export type ThemeTypeProps = 'dark' | 'light';
