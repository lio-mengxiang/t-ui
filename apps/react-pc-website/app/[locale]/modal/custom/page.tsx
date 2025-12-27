import { HowMakeCssToast } from './markdown/how-make-css-toast';
import { catalogList } from './catalog';
import { SharedPage } from '@/_components/common-page';

export default SharedPage({
  catalogList,
  ZhMarkdown: <HowMakeCssToast />,
  EnMarkdown: <HowMakeCssToast />,
});
