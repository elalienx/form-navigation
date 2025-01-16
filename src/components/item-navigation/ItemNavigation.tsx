// Project files
import "./item-navigation.css";

interface Props {
  item: {
    name: string;
    navigationLevel: string;
    step: string;
  };
}

export default function ItemNavigation({ item }: Props) {
  const { name, navigationLevel, step } = item;

  // Methods
  function onClick() {
    alert(`Clicked on ${name} to go to ${step}`);
  }

  return (
    <li className={`item-navigation ${navigationLevel}`} onClick={onClick}>
      {name}
    </li>
  );
}
