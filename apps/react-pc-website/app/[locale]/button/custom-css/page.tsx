import { HowMakeCssButton } from './markdown/how-make-css-button';
import { catalogList } from './catalog';
import { SharedPage } from '@/_components/common-page';

export default SharedPage({
  catalogList,
  ZhMarkdown: <HowMakeCssButton />,
  EnMarkdown: <HowMakeCssButton />,
});
