import { HowMakeCssCheckbox } from './markdown/how-make-css-checkbox';
import { catalogList } from './catalog';
import { SharedPage } from '@/_components/common-page';

export default SharedPage({
  catalogList,
  ZhMarkdown: <HowMakeCssCheckbox />,
  EnMarkdown: <HowMakeCssCheckbox />,
});
