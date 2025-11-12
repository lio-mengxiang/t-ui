'use client';

import React, { useEffect, useRef } from 'react';
import { useStateWithPromise, useEvent } from '../hooks';
import { getContainer, getEleInViewport, scrollIntoView, setActiveLink } from './utils';
import { trailingThrottle } from '../utils';
import type { AnchorProps } from './interface';

interface StoreProps {
  propScrollContainer: AnchorProps['scrollContainer'];
  onChange: AnchorProps['onChange'];
  offset: AnchorProps['offset'];
  queryKey?: AnchorProps['queryKey'];
  isCloseInitAnchor?: AnchorProps['isCloseInitAnchor'];
}

export function useStore({ propScrollContainer, onChange, offset, queryKey, isCloseInitAnchor }: StoreProps) {
  // ref (get dom)
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollContainer = useRef<HTMLElement | Window>(null);

  // state
  const linkMap = useRef<Map<string, HTMLElement>>(new Map());
  const isScrolling = useRef(false);
  const [currentId, setCurrentId] = useStateWithPromise('');

  function onLinkClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>, targetId: string) {
    e.preventDefault();

    setActiveLink({ targetId, linkMap, wrapperRef, currentId, setCurrentId, onChange });
    scrollIntoView({ scrollContainer, targetId, offset, isScrolling });
  }

  const handleScroll = useEvent(() => {
    /**
     * @zh 防止在点击link的时候出发滚动事件(会激活activeLink)，但是滚动函数会改变activeLink
     * @enPrevent the scroll event from being triggered when the link is clicked (activeLink will be activated), but the scroll function will change the activeLink
     */

    if (isScrolling.current) return;
    const element = getEleInViewport({ linkMap, scrollContainer });
    if (element?.id) {
      setActiveLink({ targetId: element.id, linkMap, wrapperRef, currentId, setCurrentId, onChange });
    }
  });

  const onScroll = useEvent(
    trailingThrottle(() => {
      handleScroll();
      isScrolling.current = false;
    }, 30),
  );

  useEffect(() => {
    // get real scrollContainer
    scrollContainer.current = getContainer(propScrollContainer);
    scrollContainer.current?.addEventListener('scroll', onScroll);
    return () => {
      scrollContainer.current?.removeEventListener('scroll', onScroll);
    };
  }, [onScroll, propScrollContainer]);

  useEffect(() => {
    if (!isCloseInitAnchor) {
      onScroll();
      return;
    }
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const targetId = params.get(queryKey);

    if (targetId) {
      setActiveLink({ targetId, linkMap, wrapperRef, currentId, setCurrentId, onChange });
      scrollIntoView({ scrollContainer, targetId, offset, isScrolling });
    }
  }, []);

  return {
    onScroll,
    currentId,
    onLinkClick,
    wrapperRef,
    scrollContainer,
    linkMap,
  };
}
