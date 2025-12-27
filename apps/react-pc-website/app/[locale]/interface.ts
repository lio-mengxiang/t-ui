import type { ThemeTypeProps } from '@/_theme';

export type Func = (...args: any[]) => any;

export interface LocalstorageProviderProps extends React.PropsWithChildren {
  themeKey?: string;
  defaultTheme: ThemeTypeProps;
  nonce?: string;
  scriptContent: (defaultTheme: ThemeTypeProps, themeKey: string) => void;
}

export interface LocalstorageContextProps {
  theme: ThemeTypeProps | undefined;
  themeKey: string;
  setThemeState: (theme: ThemeTypeProps) => void;
}
