type Props = {
  value: string;
  isOpen: boolean;
  toggleDropdown: () => void;
};

const NavigationItem = ({ value, isOpen, toggleDropdown }: Props) => {
  return (
    <button
      className={`nav-list first-letter-accent-secondary text-4xl px-9 ${isOpen ? 'active' : null}`}
      onClick={toggleDropdown}
    >
      {value}
    </button>
  );
};

export default NavigationItem;
