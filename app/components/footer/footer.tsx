import { NavList } from '@/app/types/list';

type Props = {
  footerList: NavList;
};

const Footer = ({ footerList }: Props) => {
  return (
    <footer className="bg-accent-dark-color">
      <ul className={`flex`}>
        {footerList.map(({ id, value }) => (
          <li key={`${id}_${value}`}>{value}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
