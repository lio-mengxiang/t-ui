import { UsageEnMDX, UsageMDX, zhCatalog, enCatalog } from './_component/usage';
import { SharedPage2 } from '@/_components/common-page';

export default SharedPage2({
  EnCatalogList: enCatalog,
  ZhCatalogList: zhCatalog,
  ZhMarkdown: <UsageMDX />,
  EnMarkdown: <UsageEnMDX />,
});
