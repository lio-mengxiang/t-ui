import React from 'react';
import type { MDXComponents } from 'mdx/types';
import { H1, H2, H3, H4, H5, H6, Ol, Paragraph, Ul, Code, Link, Pre, CodeBlock } from '@/_components/typography';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <H1>{children}</H1>,
    h2: ({ children }) => <H2>{children}</H2>,
    h3: ({ children }) => <H3>{children}</H3>,
    h4: ({ children }) => <H4>{children}</H4>,
    h5: ({ children }) => <H5>{children}</H5>,
    h6: ({ children }) => <H6>{children}</H6>,
    p: ({ children }) => <Paragraph className="text-[15px] break-words">{children}</Paragraph>,
    ol: ({ children }) => <Ol className="text-[15px] break-words">{children}</Ol>,
    ul: ({ children }) => <Ul className="text-[15px] break-words">{children}</Ul>,
    code: ({ children, className }) => {
      // 代码块里的 code（```）
      if (className?.startsWith('language-')) {
        return <CodeBlock language={className} code={children} />;
      }

      // 行内 code（`xxx`）
      return <Code>{children}</Code>;
    },
    a: (props) => <Link className="text-[15px]" {...props} />,
    pre: ({ children }) => <Pre>{children}</Pre>,
    ...components,
  };
}
