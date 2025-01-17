// Project files
import { useNavigation } from "state/NavigationContext";
import "./item-navigation.css";

interface Props {
  item: {
    name: string;
    navigationLevel: string;
    step: number;
  };
  index: number;
}

export default function ItemNavigation({ item, index }: Props) {
  const { name, navigationLevel, step } = item;

  // Global state
  const { setStep, navigationIndex, setNavigationIndex } = useNavigation();

  // Properties
  const isActive = navigationIndex === index;
  const activeCSS = isActive ? "active" : "";

  // Methods
  function onClick() {
    console.log(`Clicked on ${name} to go to ${step}`);
    setNavigationIndex(index);
    setStep(step);
  }

  return (
    <li
      className={`item-navigation ${navigationLevel} ${activeCSS}`}
      onClick={onClick}
    >
      {name}
    </li>
  );
}
