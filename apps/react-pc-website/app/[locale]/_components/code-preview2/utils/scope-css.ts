import postcss, { type Rule } from 'postcss';
import selectorParser, { id, combinator } from 'postcss-selector-parser';

const PROCESSED = Symbol('processed');

interface ScopedRule extends Rule {
  [PROCESSED]?: boolean;
}

export function scopeCss(css: string, scopeId: string): string {
  return postcss([
    {
      postcssPlugin: 'scope-css',
      Rule(rule: ScopedRule) {
        if (rule[PROCESSED]) return;

        rule.selector = selectorParser((selectors) => {
          selectors.each((selector) => {
            const scopeNode = id({ value: scopeId });

            // #scopeId
            selector.prepend(scopeNode);

            // #scopeId␠
            selector.insertAfter(scopeNode, combinator({ value: ' ' }));
          });
        }).processSync(rule.selector);

        rule[PROCESSED] = true;
      },
    },
  ]).process(css).css;
}
