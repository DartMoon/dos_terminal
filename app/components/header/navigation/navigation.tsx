'use client';

import Dropdown from '@/app/components/dropdown';
import NavigationItem from '@/app/components/header/navigation/navigation-item';

import { NavList } from '@/app/types/list';

type Props = {
  navList: NavList;
};

const Navigation = ({ navList }: Props) => {
  return (
    <nav>
      <ul className="flex px-8">
        {navList.map(({ id, submenu, ...rest }) => (
          <Dropdown submenu={submenu} key={id}>
            {(toggleDropdown, isOpen) => (
              <NavigationItem {...rest} id={id} isOpen={isOpen} toggleDropdown={toggleDropdown} />
            )}
          </Dropdown>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
