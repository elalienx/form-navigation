// Project files
import { useNavigation } from "state/NavigationContext";
import Navigation from "types/Navigation";
import "./item-navigation.css";

interface Props {
  item: Navigation;
}

export default function ItemNavigation({ item }: Props) {
  const { id, title, navigationLevel, stepToGo } = item;

  // Global state
  const { setStepNumber, navigationItemId, setNavigationItemId } =
    useNavigation();

  // Properties
  /** 🔔 Refactor: Pass navigationItemId as prop  */
  const isActive = navigationItemId === id;
  const activeCSS = isActive ? "active" : "";

  // Methods
  /** 🔔 Refactor: Extract this to Navigation.tsx */
  function onClick() {
    setNavigationItemId(id);
    setStepNumber(stepToGo);
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
