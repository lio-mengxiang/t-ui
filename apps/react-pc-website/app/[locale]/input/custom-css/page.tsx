import { HowMakeCssInput } from './markdown/how-make-css-input';
import { catalogList } from './catalog';
import './markdown/example/input.css';
import { SharedPage } from '@/_components/common-page';

export default SharedPage({
  catalogList,
  ZhMarkdown: <HowMakeCssInput />,
  EnMarkdown: <HowMakeCssInput />,
});
