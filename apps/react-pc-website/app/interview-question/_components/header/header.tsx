import Logo from '../logo';
import { useCNTime } from '../../_hooks';

export function Header() {
  const { time, tz } = useCNTime();
  return (
    <header className="flex justify-between h-9 px-4 font-normal tracking-wider text-xs md:text-sm">
      <div className="flex items-center h-full gap-3">
        <Logo className="ml-2" />
        <span className="">保安队长 - 孟队长</span>
      </div>
      <div className="flex items-center justify-between w-[60%]">
        <div className="flex items-center gap-6 tracking-wider cursor-pointer">
          <span>主页</span>
          <span className="text-white/50">作品</span>
          <span className="text-white/50">博客</span>
        </div>
        <div className="flex items-center gap-2 pr-2">
          <span>{time}</span>
          <span>{tz}</span>
        </div>
      </div>
    </header>
  );
}
