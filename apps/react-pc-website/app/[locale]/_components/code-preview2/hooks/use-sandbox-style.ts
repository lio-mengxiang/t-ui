import { useId, useRef, useState } from 'react';
import { scopeCss } from '../utils';
import { useUpdate } from './use-update';

interface UseSandboxStyleProps {
  css?: string;
}

export function useSandboxStyle({ css }: UseSandboxStyleProps) {
  const sandboxId = useId().replace(/[^a-zA-Z0-9_-]/g, '_');
  // 使用 ref 存储 style 标签，避免重复创建，提高编辑器性能
  const styleElRef = useRef<HTMLStyleElement | null>(null);
  const [cssState, setCssState] = useState(initState(css));

  function initState(code: string | undefined) {
    if (!code) {
      return { error: undefined, cssString: undefined };
    }

    try {
      if (typeof code !== 'string') {
        throw new Error('Css must be a string');
      }

      return { error: undefined, cssString: scopeCss(code, sandboxId) };
    } catch (error: any) {
      return { error: error.toString(), cssString: undefined };
    }
  }

  // 核心更新方法：将 CSS 作用域化并应用到 DOM
  const updateStyle = (newCss: string) => {
    const sandboxRoot = document.getElementById(sandboxId);
    if (!newCss || !sandboxRoot) return;

    try {
      if (!newCss) {
        if (styleElRef.current) styleElRef.current.textContent = '';
        return;
      }

      const scopedCss = scopeCss(newCss, sandboxId);

      setCssState({ error: undefined, cssString: scopedCss });
    } catch (err: any) {
      setCssState({ error: err.toString(), cssString: undefined });
    }
  };

  useUpdate(() => {
    updateStyle(css || '');
  }, [css]);

  return { sandboxId, onCssChange: updateStyle, cssState };
}
