import FooterNavigation from '@/app/components/footer/navigation/navigation';

import { helperList } from '@/app/_mock_/mocked';

const Footer = () => {
  return (
    <footer className="bg-accent-dark-color">
      <FooterNavigation footerList={helperList} />
    </footer>
  );
};

export default Footer;
