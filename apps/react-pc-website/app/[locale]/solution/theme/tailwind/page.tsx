import { catalogList, ThemTailwindSolution } from '../../markdown/theme/tailwind';
import { SharedPage } from '@/_components/common-page';

export default SharedPage({
  catalogList,
  ZhMarkdown: <ThemTailwindSolution />,
  EnMarkdown: <ThemTailwindSolution />,
});
