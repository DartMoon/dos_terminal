import FooterNavigationItem from '@/app/components/footer/navigation/navigation-item';

import { HelperList } from '@/app/types/list';

type Props = {
  footerList: HelperList;
};

const FooterNavigation = ({ footerList }: Props) => {
  return (
    <ol className="flex" style={{ counterReset: 'item' }}>
      {footerList.map((props, idx) => (
        <FooterNavigationItem {...props} order={idx + 1} />
      ))}
    </ol>
  );
};

export default FooterNavigation;
