'use client';

import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useState } from 'react';

export default function Home({ isShow, time }: { isShow: boolean; time: number }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <AnimatePresence>{isShow && dimensions.width > 0 && <SVG {...dimensions} time={time} />}</AnimatePresence>;
}

export const SVG = ({ width, height, time }: { width: number; height: number; time: number }) => {
  const initialPath = `
    M0 100
    Q${width / 2} 0 ${width} 100
    L${width} ${height + 100}
    Q${width / 2} ${height + 200} 0 ${height + 100}
    L0 100
  `;

  const targetPath = `
    M0 100
    Q${width / 2} ${height / 2} ${width} 100
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 100
  `;

  const newTime = time / 1000;
  const config = {
    duration: newTime,
    ease: [0.76, 0, 0.24, 1],
  };
  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        ...config,
        delay: newTime,
      },
    },
    exit: {
      transitionEnd: {
        d: initialPath,
      },
    },
  };
  const slide = {
    initial: {
      top: '100vh',
    },
    enter: {
      top: '-100px',
      transition: config,
    },
    exit: {
      top: '-100vh',
      transition: config,
      transitionEnd: {
        top: '100vh',
      },
    },
  };
  return (
    <motion.svg
      initial="initial"
      animate="enter"
      exit="exit"
      variants={slide}
      className="z-[99999] w-screen h-[calc(100vh+200px)] top-[100vh] left-0 fixed"
    >
      <motion.path d={initialPath} initial="initial" animate="enter" exit="exit" variants={curve} />
    </motion.svg>
  );
};
