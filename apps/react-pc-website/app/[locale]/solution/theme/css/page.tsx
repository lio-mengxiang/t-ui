import { catalogList, ThemeSolution } from '../../markdown/theme/css';
import { SharedPage } from '@/_components/common-page';

export default SharedPage({
  catalogList,
  ZhMarkdown: <ThemeSolution />,
  EnMarkdown: <ThemeSolution />,
});
