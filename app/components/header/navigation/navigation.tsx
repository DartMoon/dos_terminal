'use client';

import Dropdown from '@/app/components/dropdown';
import NavigationItem from '@/app/components/header/navigation/navigation-item';

import { NavListType } from '@/app/types/list';

type Props = {
  data: NavListType;
};

const Navigation = ({ data }: Props) => {
  return (
    <nav>
      <ul className="flex px-8">
        {data.map(({ id, submenu, ...rest }) => (
          <Dropdown submenu={submenu} key={id}>
            {(toggleDropdown, isOpen) => (
              <NavigationItem key={id} isOpen={isOpen} toggleDropdown={toggleDropdown} {...rest} />
            )}
          </Dropdown>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
