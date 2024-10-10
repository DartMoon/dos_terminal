import { NavList } from '@/app/types/list';

type Props = {
  navList: NavList;
};

const Header = ({ navList }: Props) => {
  return (
    <header className="bg-accent-dark-color">
      <nav>
        <ul className={`flex`}>
          {navList.map(({ id, value }) => (
            <li className="first-letter-color" key={`${id}_${value}`}>
              {value}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
