import { Catalog } from '@/_components/catalog';
import { Basic, catalogList } from './markdown/must-read';

export default function Home() {
  return (
    <>
      <div className="grow shrink basis-0 overflow-hidden mx-16 mt-8 mb-12">
        <Basic />
      </div>
      <Catalog items={catalogList} />
    </>
  );
}
