import { H2, Paragraph, Code, Ul, Block } from '@/_components/typography';

export function AiParagraphZH() {
  return (
    <div>
      <Paragraph>在 AI 自动生成代码的时代，你是否也曾感到一丝迷茫？</Paragraph>
      <Paragraph>
        如今面试中，越来越常听到这样一个问题： <strong>“既然 AI 都能写代码了，你的独特价值在哪里？”</strong>
      </Paragraph>
      <Paragraph> 我想用这个项目，给出我的答案——也是一个能让面试官记住的回答。 </Paragraph>
      <H2>我是这样回答的：</H2>
      <Block>
        <Paragraph>“我和其他前端开发者最大的不同在于：</Paragraph>
        <Paragraph>AI 可以搭建一个复杂组件的初步框架，但真正落地时，仍需要大量精细调整。</Paragraph>
        <Paragraph>
          尤其当项目规模扩大、功能迭代频繁时，AI 会不断出现各种细小问题—— 即使反复调试提示，也很难彻底解决。即便是 Claude
          这样的顶级模型，也依然如此。”
        </Paragraph>
        <Paragraph>
          <strong>
            而我能在极短时间内定位问题、实施修改， 因为我曾从 0 到 1 完整开发过一个组件库，参考了业界多个主流组件库的设计与实现。
          </strong>
        </Paragraph>
        <Paragraph>
          前端大多数情况都是在用组件库完成工作, 因为组件库几乎涵盖了 90% 常见的前端业务和技术核心，这是其它面试者不具备的系统性经验。
        </Paragraph>
      </Block>
      <Paragraph>
        尤其是在面试 <Code>大厂</Code> 和 <Code>remote</Code> 全栈开发时，面试官对我产生了极大的兴趣！
      </Paragraph>
      <Paragraph>
        因为大厂定制化开发场景非常非常多，普通的组件库已经完全
        不能满足他们的定制化需求了，国外则是没见过这样的面试者，直接一个人能对标他们常用的，例如 <Code>Shadcn UI</Code>，
        <Code>Base UI</Code>，<Code>Hero UI</Code> 组件库，而且能轻易实现远比这些组件库复杂的功能。
      </Paragraph>
      <H2>全栈：紧随其后</H2>
      <Paragraph>
        <Code>AI</Code> 的进化与企业的需求，正在倒逼前端工程师快速向后端延伸。 <Code>全栈化</Code> 已成为不可逆的趋势。
      </Paragraph>
      <Paragraph>你的竞争对手，早已不只是前端开发者， 而是那些能独立交付完整业务逻辑的全栈工程师。</Paragraph>
      <Paragraph>然而，大多数人的时间与精力，被两个黑洞吞噬：</Paragraph>
      <Ul>
        <li>不断在零散的“玩具项目”中循环， 每个项目只触及皮毛，无法形成深度、可复用的能力体系。</li>
        <li>试图通过广度覆盖“补全”前端知识， 学了无数碎片化的库和技巧，却依然缺乏一套应对复杂业务的核心方法论。</li>
      </Ul>
      <Paragraph>结果往往是：</Paragraph>
      <Ul>
        <li>既未在前端建立起真正的技术壁垒，</li>
        <li>也没有足够精力攻克后端，</li>
        <li>陷入“既不全，也不专”的尴尬境地。</li>
      </Ul>
      <Paragraph>
        注：也欢迎你加入我们的 <Code>Node.js 全栈交流圈</Code>，一起突破瓶颈，哈哈。
      </Paragraph>
      <H2>破局！</H2>
      <Paragraph>
        用一个“顶级项目”，贯通前端核心能力。与其在碎片知识中疲于奔命，
        不如深度攻克一个能覆盖前端核心的“集大成”项目。让我们的企业级的前端组件库项目让你在前端技术提高路上速成！
      </Paragraph>
      <Paragraph> 节约你宝贵的时间去学习其它的全栈和 ai 知识。</Paragraph>
      <Paragraph>这样的项目，不仅能成为你技术的证明，更能为你打开通往全栈的大门。我邀请你，一起踏上这条深度突破之路！</Paragraph>
    </div>
  );
}
