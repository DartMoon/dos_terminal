import { ReactNode } from 'react';

type Props = {
  directory: string;
  activeContent: string;
  children: ReactNode;
};

const ContentTabs = ({ directory, activeContent, children }: Props) => {
  return (
    <div className="flex flex-col flex-grow w-1/2 border-4 border-t-0 border-accent-color text-accent-color">
      <div className="bg-accent-color text-center text-4xl leading-none">
        <span className="bg-primary-color px-4">{directory}</span>
      </div>
      <div className="flex flex-col flex-grow border-2 border-t-0 border-accent-color mx-1 mb-1 text-32">
        {children}
        <div className="mt-auto px-2 py-6 border-t-4 border-accent-color">
          <span className="text-3xl leading-none">{activeContent}</span>
        </div>
      </div>
    </div>
  );
};

export default ContentTabs;
