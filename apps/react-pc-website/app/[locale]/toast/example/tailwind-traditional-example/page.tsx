import { HowMakeCssButton } from './markdown/traditional-example';
import { Catalog } from '@/_components/catalog';
import { catalogList } from './catalog';

export default function Home() {
  return (
    <>
      <div className="grow shrink basis-0 overflow-hidden mx-16 mt-8">
        <HowMakeCssButton />
      </div>
      <Catalog items={catalogList} />
    </>
  );
}
