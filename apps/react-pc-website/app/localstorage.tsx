'use client';

import React, { createContext, memo, useContext, useState, useCallback, useEffect, useMemo } from 'react';
import type { LocalstorageContextProps, LocalstorageProviderProps } from './interface';
import { THEME, THEME_COLORS, type ThemeTypeProps } from './_theme';

export const LocalstorageContext = createContext<LocalstorageContextProps>({
  theme: undefined,
  setThemeState: () => {},
  themeKey: THEME,
});

const saveToLS = (storageKey: string, value: string) => {
  // Save to storage
  try {
    localStorage.setItem(storageKey, value);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    // Unsupported
  }
};

export const useLocalStorageContext = () => useContext(LocalstorageContext);

export const NextLocalStorage = ({ defaultTheme, children, nonce, scriptContent, themeKey = THEME }: LocalstorageProviderProps) => {
  const [theme, setTheme] = useState<ThemeTypeProps | undefined>(undefined);

  const setThemeState = useCallback(
    (value: ThemeTypeProps) => {
      setTheme(value);
      saveToLS(themeKey, value);
    },
    [themeKey],
  );

  // localStorage event handling
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.newValue && THEME_COLORS.includes(e.newValue) && e.key === themeKey) {
        setThemeState(e.newValue as ThemeTypeProps);
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [setThemeState, themeKey]);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.classList = '';
    document.documentElement.classList.add(theme as ThemeTypeProps);
  }, [theme]);

  const providerValue = useMemo(
    () => ({
      theme,
      themeKey,
      setThemeState,
    }),
    [setThemeState, theme, themeKey],
  );

  return (
    <LocalstorageContext value={providerValue}>
      <ThemeScript
        {...{
          themeKey,
          defaultTheme,
          nonce,
          scriptContent,
        }}
      />

      {children}
    </LocalstorageContext>
  );
};

const ThemeScript = memo(({ nonce, scriptContent, defaultTheme, themeKey }: Omit<LocalstorageProviderProps, 'children'>) => {
  return (
    <script
      suppressHydrationWarning
      nonce={typeof window === 'undefined' ? nonce : ''}
      dangerouslySetInnerHTML={{
        __html: `
   (${scriptContent.toString()})('${defaultTheme}', '${themeKey}');
  `,
      }}
    />
  );
});
