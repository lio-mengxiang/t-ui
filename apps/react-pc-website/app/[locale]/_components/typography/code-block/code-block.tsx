'use client';

import { useLocalStorageContext } from '@/localstorage';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs, vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type CodeBlockProps = {
  language?: string;
  code?: string;
  slot?: React.ReactNode;
  className?: string;
};

export const CodeBlock = ({ language = 'javascript', code, slot, className }: CodeBlockProps) => {
  const { theme } = useLocalStorageContext();

  return (
    <div className={`relative w-full text-sm ${className}`}>
      {slot ? <div className="flex items-center border border-solid border-color rounded-lg mb-4 p-8">{slot}</div> : null}
      <SyntaxHighlighter
        language={language.replace('language-', '')}
        style={theme === 'dark' ? vscDarkPlus : vs}
        className="shrink-0 grow basis-0"
        customStyle={{
          margin: 0,
          padding: 20,
          paddingTop: 30,
          paddingBottom: 30,
          borderRadius: '6px',
          maxHeight: '400px',
          // background: 'transparent',
          fontSize: '0.875rem', // text-sm equivalent
        }}
        wrapLines={true}
        showLineNumbers={true}
        PreTag="div"
      >
        {String(code).trim()}
      </SyntaxHighlighter>
    </div>
  );
};
