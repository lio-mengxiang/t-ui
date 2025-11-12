'use client';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type CodeBlockProps = {
  language: string;
  code: string;
  slot?: React.ReactNode;
  className?: string;
};

export const CodeBlock = ({ language = 'javascript', code, slot, className }: CodeBlockProps) => {
  return (
    <div className={`relative w-full text-sm ${className}`}>
      {slot ? <div className="flex items-center border border-solid border-color rounded-lg mb-4 p-8">{slot}</div> : null}
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        className="shrink-0 grow basis-0"
        customStyle={{
          margin: 0,
          padding: 20,
          borderRadius: '6px',
          maxHeight: '400px',
          // background: 'transparent',
          fontSize: '0.875rem', // text-sm equivalent
        }}
        wrapLines={true}
        showLineNumbers={true}
        PreTag="div"
      >
        {String(code)}
      </SyntaxHighlighter>
    </div>
  );
};
