import UsageMDX from './usage.mdx';
import { catalogList } from './catalog';
import { SharedPage } from '@/_components/common-page';

export default SharedPage({
  catalogList,
  ZhMarkdown: <UsageMDX />,
  EnMarkdown: <UsageMDX />,
});
