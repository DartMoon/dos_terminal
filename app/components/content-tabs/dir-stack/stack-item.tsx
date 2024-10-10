type Props = {
  value: string;
  subValue?: string;
};

const StackItem = ({ value, subValue }: Props) => {
  return (
    <li
      className={`leading-none ${value === 'command' ? 'text-primary-color bg-accent-color' : null}`}
    >
      <span>{value}</span>
      {subValue && <span className="float-end">{subValue}</span>}
    </li>
  );
};

export default StackItem;
