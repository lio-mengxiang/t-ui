import { TraditionalExample } from './markdown/traditional-example';
import { catalogList } from './catalog';
import { SharedPage } from '@/_components/common-page';

export default SharedPage({
  catalogList,
  ZhMarkdown: <TraditionalExample />,
  EnMarkdown: <TraditionalExample />,
});
