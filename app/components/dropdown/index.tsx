'use client';

import { ReactNode, useState } from 'react';

import MenuItem from '@/app/components/dropdown/menu-item';

import useOutsideClick from '@/app/hooks/use-outside-click';

import { SubMenuType } from '@/app/types/list';

type Props = {
  submenu: SubMenuType;
  children: (toggleDropdown: () => void, isActive: boolean) => ReactNode;
};

const Dropdown = ({ submenu, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useOutsideClick(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  const toggleDropdown = () => {
    if (submenu) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <li className="relative inline-block text-left" ref={ref}>
      {children(toggleDropdown, isOpen)}
      {isOpen && (
        <div className="origin-top-right absolute left-[-32px] bg-accent-dark-color px-1 py-2 w-[512px] z-10">
          <ul className="border-4 border-black px-1 py-1.5">
            {submenu.map(({ id, ...rest }) => (
              <MenuItem key={id} {...rest} />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default Dropdown;
