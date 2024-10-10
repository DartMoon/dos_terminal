import { DirListType } from '@/app/types/list';
import StackItem from '@/app/components/content-tabs/dir-stack/stack-item';

type Props = {
  data?: DirListType;
};

const DirStack = ({ data }: Props) => {
  return (
    <div className="border-accent-color border-r-4 overflow-hidden">
      <p className="text-center text-accent-secondary-color">Name</p>
      <ul className="px-1.5">
        {data &&
          data.map(({ id, ...rest }) => {
            return <StackItem key={id} {...rest} />;
          })}
      </ul>
    </div>
  );
};

export default DirStack;
