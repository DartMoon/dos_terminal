type Props = {
  id: number;
  value: string;
  isOpen: boolean;
  toggleDropdown: () => void;
};

const NavigationItem = ({ id, value, isOpen, toggleDropdown }: Props) => {
  return (
    <button
      key={id}
      className={`nav-list first-litter-accent-secondary text-4xl px-9 ${isOpen ? 'active' : null}`}
      onClick={toggleDropdown}
    >
      {value}
    </button>
  );
};

export default NavigationItem;
