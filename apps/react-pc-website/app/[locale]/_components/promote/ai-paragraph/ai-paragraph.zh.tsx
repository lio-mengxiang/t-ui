import { H2, Paragraph, Code, Ul, Block } from '@/_components/typography';

export function AiParagraphZH() {
  return (
    <div>
      <H2>AI 时代，正在淘汰的不是前端，而是「只会写代码的前端」</H2>

      <Paragraph>
        如果你还把前端的核心竞争力理解为「写 JSX / 写 CSS / 调 API」，那必须很残酷地告诉你： 这个能力正在被 AI 以数量级的速度碾压。
      </Paragraph>

      <Paragraph>
        未来的 Web 开发，不再区分前端、后端、全栈， 真正存在的岗位只剩下一种：<strong>AI Agent 工程师</strong>。
      </Paragraph>

      <Paragraph>
        这并不是危言耸听。某 top3 级别大厂的技术负责人已经在内部明确提出： 公司未来所有技术岗统一调整为 Agent Engineer，
        核心能力不是「写代码」，而是<strong>设计系统、约束 AI、兜底 AI</strong>。
      </Paragraph>
      <Paragraph>
        从 2025 年开始，从新闻和周围很多以前大厂的同事交谈中才了解到，公司已经开始明确表示必须要将自己的工作 AI 化，实现业务的快速稳定迭代！
      </Paragraph>

      <Paragraph>
        类似的趋势也正在发生在越来越多的团队中： 前后端边界被打破，80% 以上的业务代码由 AI 生成， 工程师的主要工作变成了——给 AI
        足够好的上下文，并对结果负责。
      </Paragraph>

      <Paragraph>
        如果你是初级或中级前端开发者，我必须说一句实话：
        <strong>留给你转型为 Agent 开发工程师的时间，已经不多了。</strong>
      </Paragraph>

      <H2>前端真正的「兜底能力」是什么？</H2>

      <Paragraph>放眼所有 Web 项目，超过 90% 的业务场景，本质上都是在「使用组件」。 区别只是：是用现成的，还是组合出来的。</Paragraph>

      <Paragraph>AI 非常擅长完成这 90% 的工作，但在真实项目中，我们遇到了一个致命问题：</Paragraph>

      <Block>
        <Paragraph>
          <strong>市面上的组件库，天然分裂成两种极端：</strong>
        </Paragraph>

        <Paragraph>
          一类是高度聚合的传统组件库，例如 <Code>Ant Design</Code>、<Code>Material UI</Code>。 功能强、场景全，但对 AI 极不友好——
          组件是黑盒，AI 无法理解内部语义，更谈不上可靠地改造和组合。
        </Paragraph>

        <Paragraph>
          另一类是 Headless / 无样式组件库，例如 <Code>Shadcn UI</Code>、<Code>Base UI</Code>。 它们对 AI 极其友好，代码语义清晰、结构可控，
          但问题同样明显：<strong>只能解决简单场景，无法承载复杂业务。</strong>
        </Paragraph>
      </Block>

      <Paragraph>
        问题就出在这里：<strong>为什么没有一种组件体系，能同时满足「AI 友好」和「复杂业务能力」？</strong>
      </Paragraph>

      <H2>AI Native UI：为 AI Agent 而生的组件体系</H2>

      <Paragraph className="text-orange-600">
        我们做的这套组件库，目标非常明确： 它不是给「人」用的组件库，而是给 <strong>AI Agent + 人</strong> 协作使用的 UI 系统。
      </Paragraph>

      <Paragraph className="text-orange-600">
        它既拥有 Headless 组件的原子性、可组合性、强语义， 又可以像 <Code>Ant Design</Code> 一样，通过组合直接构建复杂、完整的业务组件。
      </Paragraph>

      <Paragraph>
        更重要的是：<strong>所有组件源码都是教学内容的一部分。</strong>
        你不是在「使用一个 npm 包」，而是在真正掌握一整套 AI Native UI 的设计方法。
      </Paragraph>

      <Paragraph>
        这意味着什么？ 意味着这些组件可以直接放进你的项目源码中， 不需要黑盒依赖，AI 可以获得完整上下文，
        你可以随时重组、裁剪、改造，适配任何真实业务。
      </Paragraph>

      <Paragraph>在课程和网站中，你会看到每一个组件都包含两类示例：</Paragraph>

      <Ul>
        <li>
          <strong>[基础用法]</strong> —— 类似 <Code>Shadcn UI</Code> / <Code>Base UI</Code>， 展示最小原子能力，完全 AI 友好。
        </li>
        <li>
          <strong>[传统案例]</strong> —— 使用这些原子组件，逐步组合出
          <Code>Ant Design</Code>、<Code>Material UI</Code> 同等级复杂度的完整功能。
        </li>
      </Ul>

      <Paragraph>
        这不是在教你「用组件库」， 而是在教你：<strong>如何在 AI 时代，构建一个能长期进化的 UI 系统。</strong>
      </Paragraph>
      <Paragraph>
        最后，我想说一句，未来大部分组件你不会依赖 <Code>Ant Design</Code>、<Code>Material UI</Code>, 也不会依赖 <Code>Shadcn UI</Code>、
        <Code>Base UI</Code>。而是以来 AI 和你自己。欢迎加入！开始你的 web 前端 AI 转型之旅！
      </Paragraph>
    </div>
  );
}
