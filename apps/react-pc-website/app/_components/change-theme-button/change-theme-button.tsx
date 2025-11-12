'use client';

import { LIGHT, DARK, THEME } from '@/_theme';
import { LocalstorageContext } from '@/localstorage';
import React, { useContext, useEffect, useState } from 'react';
import { IconMoonLine, IconSunFill } from '@t-headless-ui/react';
import { TextButton } from '@/button/tailwind-button';

export function ChangeThemeButton() {
  const { theme, setThemeState } = useContext(LocalstorageContext);
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <TextButton onlyIcon>
        <div className="w-5 h-5 bg-color-200 border border-solid rounded"></div>
      </TextButton>
    );
  }

  const mergedTheme = theme || localStorage.getItem(THEME);
  const handleTheme = () => {
    if (mergedTheme === LIGHT) {
      return setThemeState(DARK);
    }

    if (mergedTheme === DARK) {
      return setThemeState(LIGHT);
    }
  };
  return (
    <TextButton onClick={handleTheme} onlyIcon>
      {mergedTheme === LIGHT && <IconMoonLine size="20px" />}
      {mergedTheme === DARK && <IconSunFill size="20px" />}
    </TextButton>
  );
}
