import { TraditionalExampleEnMDX, TraditionalExampleMDX, zhCatalog, enCatalog } from './markdown';
import { SharedPage2 } from '@/_components/common-page';

export default SharedPage2({
  EnCatalogList: enCatalog,
  ZhCatalogList: zhCatalog,
  ZhMarkdown: <TraditionalExampleMDX />,
  EnMarkdown: <TraditionalExampleEnMDX />,
});
