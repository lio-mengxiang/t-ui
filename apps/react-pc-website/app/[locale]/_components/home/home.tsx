'use client';

import { useState } from 'react';
import { Page2 } from '@/_components/home/page2';
import { Page1 } from './page1';
import Overlay from './overlay';
import { useLocaleRouter } from '@/_hooks';

export function Home() {
  const [isShow, setShow] = useState(false);
  const [isOverlay, setIsOverlay] = useState(false);
  const router = useLocaleRouter();
  const time = 750;

  const goToPage = (isOverlay = true) => {
    setShow(true);
    setTimeout(() => {
      setIsOverlay(isOverlay);
      setShow(false);
    }, time);
  };

  return (
    <div>
      <Overlay isShow={isShow} time={time} />
      {isOverlay ? <Page2 goToPage={() => goToPage(false)} router={router} /> : <Page1 goToPage={goToPage} />}
    </div>
  );
}
