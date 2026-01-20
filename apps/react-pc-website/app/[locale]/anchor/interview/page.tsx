import { SharedPage2 } from '@/_components/common-page';
import { enCatalog, zhCatalog, InterviewMDX, InterviewEnMDX } from '../_component/interview';

export default SharedPage2({
  EnCatalogList: enCatalog,
  ZhCatalogList: zhCatalog,
  ZhMarkdown: <InterviewMDX />,
  EnMarkdown: <InterviewEnMDX />,
});
