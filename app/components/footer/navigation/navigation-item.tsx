type Props = {
  id: number;
  value: string;
  order: number;
};

const FooterNavigationItem = ({ id, value, order }: Props) => {
  return (
    <li key={id} className="text-4xl leading-none pr-6">
      <span className="bg-dark-color text-gray-color pl-2">{order}</span>
      <span>{value}</span>
    </li>
  );
};

export default FooterNavigationItem;
