import { catalogList } from './catalog';
import { TailwindTraditionalExample } from './markdown/traditional-example';
import { SharedPage } from '@/_components/common-page';

export default SharedPage({
  catalogList,
  ZhMarkdown: <TailwindTraditionalExample />,
  EnMarkdown: <TailwindTraditionalExample />,
});
