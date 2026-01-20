import { TraditionalExampleEnMDX, TraditionalExampleMDX } from './markdown';
import { catalogList } from './catalog';
import { SharedPage2 } from '@/_components/common-page';

export default SharedPage2({
  EnCatalogList: catalogList,
  ZhCatalogList: catalogList,
  ZhMarkdown: <TraditionalExampleMDX />,
  EnMarkdown: <TraditionalExampleEnMDX />,
});
