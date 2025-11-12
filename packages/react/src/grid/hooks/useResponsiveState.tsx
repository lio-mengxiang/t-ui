import { useEffect, useRef, useState, useMemo } from 'react';
import ResponsiveObserve, { responsiveArray, ScreenMap } from '../utils/responsive-observe';
import { ResponsiveValue } from '../interface';
import { isObject } from '../../utils';

function isResponsiveValue(val: number | ResponsiveValue): val is ResponsiveValue {
  return isObject(val);
}

export const useResponsiveState = (val: number | ResponsiveValue, defaultValue: number) => {
  const token = useRef<string>(null);
  const [screens, setScreens] = useState<ScreenMap>({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true,
    xxxl: true,
  });
  useEffect(() => {
    token.current = ResponsiveObserve.subscribe((screens) => {
      if (isResponsiveValue(val)) {
        setScreens(screens);
      }
    });

    return () => {
      ResponsiveObserve.unsubscribe(token.current);
    };
  }, []);

  const result = useMemo(() => {
    let res = defaultValue;
    if (isResponsiveValue(val)) {
      for (let i = 0; i < responsiveArray.length; i++) {
        const breakpoint = responsiveArray[i];
        if (screens[breakpoint]) {
          res = val[breakpoint] || defaultValue;
          break;
        }
      }
    } else {
      res = val;
    }
    return res;
  }, [screens, val, defaultValue]);
  return result;
};
