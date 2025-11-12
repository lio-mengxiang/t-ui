'use client';

import { cs, getImageUrl } from '@/_utils';

import React, { Fragment } from 'react';

const cardList = [
  {
    className: 'translate-x-1 translate-y-1 rotate-[2deg]',
    imgUrl: '/solution/cylinder.webp',
    title: '欢迎加入我们的前端亮点项目社区！',
    content: [
      '- 有免费群，我们一起交流前端技术；也有付费群，帮你打造简历亮点！',
      '- 欢迎加入讨论，直达你的“高光项目”！',
      '- 微信：a2298613245。',
    ],
  },
  {
    className: '-translate-x-1 -translate-y-1 rotate-[-1deg]',
    imgUrl: '/solution/ball.webp',
    title: '全方位覆盖了日常开发核心技术！',
    content: [
      '- 这不仅是一个高光项目，更是一张覆盖前端核心技术的“能力地图”！',
      '- 同时，更是你通往高级前端的晋升计划！',
      '- 从用轮子到造轮子！',
    ],
  },
  {
    imgUrl: '/solution/cube.webp',
    title: '简历没有亮点？你可能只差一个“高光项目”！',
    content: ['- 完整项目足以面试专家级职位！', '- 我们不仅教你实现，更教你如何向面试官表达这些硬核亮点！', '- 为你定制匹配的简历内容！'],
  },
];

export function Card() {
  return (
    <>
      {cardList.map((item: any, index) => (
        <div
          className={cs(
            'detail z-1 absolute top-[26vh] md:top-[36vh] rotate-[5deg] -translate-x-1 -translate-y-1 shadow-xl bg-white',
            item?.className,
          )}
          key={index}
        >
          <div className="w-[32vh] h-[54vh] md:w-[50vh] md:h-[50vh] rounded-[2px] p-[3.4vh] overflow-hidden">
            <Fragment key={index}>
              <img src={getImageUrl(item.imgUrl)} alt="" className="w-full h-[12vh] object-cover rounded-[2px]" />
              <div className={cs('tracking-wide text-[#0f0f0f] text-[2.4vh] md:text-[3vh] font-serif my-[2vh]', item?.titleClassName)}>
                {item.title}
              </div>
              <div className={cs('border-b-[1px] border-[#cacaca] my-[2vh]', item?.lineClassName)}></div>
              {item.content.map((content: string, index: number) => (
                <div
                  key={index}
                  className={cs(
                    'tracking-wide text-[1.6vh] md:text-[1.8vh] text-[#797979] mb-[1vh] leading-[3.3vh]',
                    item?.contentItemClassName,
                  )}
                >
                  {content}
                </div>
              ))}
            </Fragment>
          </div>
        </div>
      ))}
    </>
  );
}
