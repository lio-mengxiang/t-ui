import { useEffect, useRef } from 'react';
import { resetContainerStyle, setContainerStyle } from '../utils';
import { getAttach } from '../../portal/utils';

export function useOverflowHidden(attach: string, hidden: boolean) {
  const needResetContainerStyle = useRef<boolean>(false);
  const originContainerStyle = useRef<Partial<CSSStyleDeclaration>>({});

  useEffect(() => {
    const container = getAttach(attach);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    hidden
      ? setContainerStyle({ needResetContainerStyle, originContainerStyle, container })
      : resetContainerStyle({ needResetContainerStyle, originContainerStyle, container });
    return () => {
      resetContainerStyle({ needResetContainerStyle, originContainerStyle, container });
    };
  }, [attach, hidden]);
}
