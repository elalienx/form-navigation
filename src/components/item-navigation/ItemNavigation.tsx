// Project files
import { useNavigation } from "state/NavigationContext";
import Navigation from "types/Navigation";
import "./item-navigation.css";

interface Props {
  item: Navigation;
  index: number;
}

export default function ItemNavigation({ item, index }: Props) {
  const { title, navigationLevel, stepToGo } = item;

  // Global state
  const { setStep, navigationIndex, setNavigationIndex } = useNavigation();

  // Properties
  const isActive = navigationIndex === index;
  const activeCSS = isActive ? "active" : "";

  // Methods
  function onClick() {
    console.log(`Clicked on ${title} to go to ${stepToGo}`);
    setNavigationIndex(index);
    setStep(stepToGo);
  }

  return (
    <li
      className={`item-navigation ${navigationLevel} ${activeCSS}`}
      onClick={onClick}
    >
      {title}
    </li>
  );
}
