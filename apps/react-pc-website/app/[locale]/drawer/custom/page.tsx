import { HowMakeCssDrawerMDX } from './markdown/how-make-css-drawer';
import { catalogList } from './catalog';
import { SharedPage } from '@/_components/common-page';

export default SharedPage({
  catalogList,
  ZhMarkdown: <HowMakeCssDrawerMDX />,
  EnMarkdown: <HowMakeCssDrawerMDX />,
});
