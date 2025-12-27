import { useAnimate, AnimationPlaybackControls, motion } from 'motion/react';
import { useRef } from 'react';

export function Button({ onClick }: { onClick: () => void }) {
  const [scope, animate] = useAnimate();
  const controlsRef = useRef<AnimationPlaybackControls>(null);

  const handleHoverStart = async () => {
    controlsRef.current?.stop();
    // 再从 208px 动画到 70px
    animate([
      [scope.current, { '--offset': '208px' }, { duration: 0 }],
      [scope.current, { '--offset': '70px' }, { duration: 0.6, ease: 'easeIn' }],
    ]);
  };

  const handleHoverEnd = async () => {
    controlsRef.current = animate(scope.current, { '--offset': '-161px' }, { duration: 0.8, ease: 'easeOut' });
  };

  return (
    <div
      className="h-11 overflow-hidden mt-10 flex justify-center w-full cursor-pointer relative"
      ref={scope}
      onClick={onClick}
      style={
        {
          '--radius': '160px',
          '--offset': '208px',
        } as any
      }
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <div className="flex items-center justify-center bg-[#e1ff01] text-[#202023] h-10 w-full rounded-[6.8rem] tracking-[0.4rem] border border-[#202023]">
        了解一下~
      </div>
      <motion.div className="absolute left-0 top-0 flex items-center justify-center h-10 bg-[#202023] text-[#e1ff01] w-full rounded-[6.8rem] tracking-[0.4rem] [clip-path:circle(var(--radius)_at_center_var(--offset))]">
        了解一下~
      </motion.div>
    </div>
  );
}
