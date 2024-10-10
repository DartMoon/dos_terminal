import FooterNavigationItem from '@/app/components/footer/navigation/navigation-item';

import { HelperList } from '@/app/types/list';

type Props = {
  data: HelperList;
};

const FooterNavigation = ({ data }: Props) => {
  return (
    <ol className="flex" style={{ counterReset: 'item' }}>
      {data.map((props, idx) => (
        <FooterNavigationItem key={props.id} {...props} order={idx + 1} />
      ))}
    </ol>
  );
};

export default FooterNavigation;
