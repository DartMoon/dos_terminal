import { NavList } from '@/app/types/list';

type Props = {
  navList: NavList;
};

const Header = ({ navList }: Props) => {
  return (
    <header>
      <nav>
        <ul className={`flex`}>
          {navList.map(({ id, value }) => (
            <li key={`${id}_${value}`}>{value}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
