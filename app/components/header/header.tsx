import Navigation from '@/app/components/header/navigation/navigation';

import { navList } from '@/app/_mock_/mocked';

const Header = () => {
  return (
    <header className="bg-accent-dark-color">
      <Navigation data={navList} />
    </header>
  );
};

export default Header;
