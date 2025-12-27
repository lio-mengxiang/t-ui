import { HowMakeCssRadio } from './markdown/how-make-css-radio';
import { catalogList } from './catalog';
import { SharedPage } from '@/_components/common-page';

export default SharedPage({
  catalogList,
  ZhMarkdown: <HowMakeCssRadio />,
  EnMarkdown: <HowMakeCssRadio />,
});
