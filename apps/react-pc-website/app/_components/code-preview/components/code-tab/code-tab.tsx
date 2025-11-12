import { LazyMotion, domAnimation, AnimatePresence, m, useAnimate } from 'motion/react';
import React, { useState } from 'react';
import { JS, CSS } from './constants';
import { JsPreview } from '../js-preview';
import { CssPreview } from '../css-preview';

import type { PreviewTypeProps } from './interface';
import type { JsPreviewProps } from '../js-preview/interface';
import { IconCodeLine } from '@t-headless-ui/react';
import { cs } from '@/_utils';

export function CodeTab({ code, cssCode, onChange }: JsPreviewProps) {
  const [type, setType] = useState<PreviewTypeProps>(null);
  const [scopeJS, animateJS] = useAnimate();
  const [scopeCSS, animateCss] = useAnimate();

  return (
    <div className="pt-3">
      <div className="flex justify-end mb-3">
        {cssCode && (
          <div
            className={cs(
              'flex items-center text-xs text-color-400 hover:bg-color-100 px-2 py-1 rounded-md cursor-pointer border border-solid border-color mr-3',
              {
                'bg-color-100': type === CSS,
              },
            )}
            onClick={() => {
              if (type === CSS) {
                const exitAnimation = async () => {
                  await animateCss(scopeCSS.current, { height: 0 });
                };
                setType(null);
                exitAnimation();
                return;
              }
              if (type === JS) {
                const animation = async () => {
                  await animateJS(scopeJS.current, { height: 0 }, { duration: 0 });
                  await animateCss(scopeCSS.current, { height: 'auto' }, { duration: 0 });
                };
                animation();
                setType(CSS);
                return;
              }

              const enterAnimation = async () => {
                await animateCss(scopeCSS.current, { height: 'auto' });
              };
              enterAnimation();
              setType(CSS);
            }}
          >
            Css
          </div>
        )}
        <div
          className={cs(
            'flex items-center text-xs text-color-400 hover:bg-color-100 px-2 py-1 rounded-md cursor-pointer border border-solid border-color',
            {
              'bg-color-100': type === JS,
            },
          )}
          onClick={() => {
            if (type === JS) {
              const exitAnimation = async () => {
                await animateJS(scopeJS.current, { height: 0 });
              };
              setType(null);
              exitAnimation();
              return;
            }

            if (type === CSS) {
              const animation = async () => {
                await animateCss(scopeCSS.current, { height: 0 }, { duration: 0 });
                await animateJS(scopeJS.current, { height: 'auto' }, { duration: 0 });
              };
              animation();
              setType(JS);
              return;
            }

            const enterAnimation = async () => {
              await animateJS(scopeJS.current, { height: 'auto' });
            };
            enterAnimation();
            setType(JS);
          }}
        >
          <span className="mr-1">编辑代码</span>
          <IconCodeLine size="14px" />
        </div>
      </div>
      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          <m.div className="overflow-hidden" ref={scopeJS} initial={{ height: 0 }} key={1}>
            <JsPreview code={code} onChange={onChange} />
          </m.div>
          {cssCode && (
            <m.div className="overflow-hidden" ref={scopeCSS} initial={{ height: 0 }} key={2}>
              <CssPreview cssCode={cssCode} />
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}
