import { catalogList, UsageMDX } from './usage';
import { SharedPage } from '@/_components/common-page';

export default SharedPage({
  catalogList,
  ZhMarkdown: <UsageMDX />,
  EnMarkdown: <UsageMDX />,
});
