import { catalogList, ThemeNextSolution } from '../../markdown/theme/next';
import { SharedPage } from '@/_components/common-page';

export default SharedPage({
  catalogList,
  ZhMarkdown: <ThemeNextSolution />,
  EnMarkdown: <ThemeNextSolution />,
});
