import { catalogList, MustRead } from './_must-read';
import { SharedPage } from '@/_components/common-page';

export default SharedPage({
  catalogList,
  ZhMarkdown: <MustRead />,
  EnMarkdown: <MustRead />,
});
