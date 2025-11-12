import React from 'react';
import type { MDXComponents } from 'mdx/types';
import { H1, H2, H3, H4, H5, H6, Ol, Paragraph, Ul, Code, Link } from '@/_components/typography';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <H1>{children}</H1>,
    h2: ({ children }) => <H2>{children}</H2>,
    h3: ({ children }) => <H3>{children}</H3>,
    h4: ({ children }) => <H4>{children}</H4>,
    h5: ({ children }) => <H5>{children}</H5>,
    h6: ({ children }) => <H6>{children}</H6>,
    p: ({ children }) => <Paragraph>{children}</Paragraph>,
    ol: ({ children }) => <Ol>{children}</Ol>,
    ul: ({ children }) => <Ul>{children}</Ul>,
    code: ({ children }) => <Code>{children}</Code>,
    a: (props) => <Link {...props} />,
    ...components,
  };
}
