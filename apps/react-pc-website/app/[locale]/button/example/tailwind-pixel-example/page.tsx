import { TraditionalPixelExample } from './markdown/traditional-pixel-example';
import { catalogList } from './catalog';
import { SharedPage } from '@/_components/common-page';

export default SharedPage({
  catalogList,
  ZhMarkdown: <TraditionalPixelExample />,
  EnMarkdown: <TraditionalPixelExample />,
});
