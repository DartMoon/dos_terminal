import { WithChildren } from '@/app/types/global';

const DirStackWrapper = ({ children }: Readonly<WithChildren>) => {
  return <div className="grid grid-cols-3 h-full dir-wrapper">{children}</div>;
};

export default DirStackWrapper;
