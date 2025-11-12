import { type RefObject } from 'react';
import { AnchorProps } from '../interface';

interface ISetActiveLink {
  targetId: string;
  linkMap: RefObject<Map<string, HTMLElement>>;
  wrapperRef: RefObject<HTMLDivElement>;
  currentId: string;
  setCurrentId: (updater: any) => Promise<string>;
  onChange?: AnchorProps['onChange'];
}
/**
 * 判断是否 Link 组件中有对应的 hash 的 Dom 元素，存在则并且 hash 不等于当前的 hash 则设置当前的 link 的 hash
 */
export function setActiveLink({ targetId, linkMap, wrapperRef, currentId, setCurrentId, onChange }: ISetActiveLink) {
  if (!targetId || !wrapperRef.current) return;

  const node = linkMap.current.get(targetId);

  if (node && targetId !== currentId) {
    setCurrentId(targetId).then(() => {
      onChange?.(targetId, currentId);
    });
  }
}
