type Props = {
  id: number;
  value: string;
  subValue: string;
};

const MenuItem = ({ id, value, subValue }: Props) => (
  <li key={id} className="nav-list first-letter-accent-secondary text-4xl px-0.5">
    <span>{value}</span> <span className="float-end">{subValue}</span>
  </li>
);

export default MenuItem;
