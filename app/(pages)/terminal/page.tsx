import ContentTabs from '@/app/components/content-tabs';
import TerminalForm from '@/app/(pages)/terminal/feature/form';
import DirStack from '@/app/components/content-tabs/dir-stack';
import TreeList from '@/app/components/content-tabs/tree-list';
import DirStackWrapper from '@/app/components/content-tabs/dir-stack/dir-stack-wrapper';

import { dirData, treeList } from '@/app/_mock_/mocked';

const TerminalPage = () => {
  return (
    <>
      <section className="flex flex-grow gap-1">
        <ContentTabs directory="NCD Tree" activeContent="C:\">
          <TreeList data={treeList} />
        </ContentTabs>
        <ContentTabs directory="C:\" activeContent="DN">
          <DirStackWrapper>
            <>
              <DirStack data={dirData} />
              <DirStack />
              <DirStack />
            </>
          </DirStackWrapper>
        </ContentTabs>
      </section>
      <TerminalForm />
    </>
  );
};

export default TerminalPage;
