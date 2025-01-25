// Project files
import Navigation from "types/Navigation";
import "./item-navigation.css";

interface Props {
  /** The object with the information to display the item. */
  item: Navigation;

  /** Flag to highlight the item if active */
  isActive?: boolean;

  /** The actions we want to perform on click */
  onClick: (navigationItemId: string, stepId: string) => void;
}

export default function ItemNavigation({ item, isActive = false, onClick }: Props) {
  const { id, title, navigationLevel, stepToGo } = item;

  // Properties
  const activeCSS = isActive ? "active" : "";

  return (
    <li
      className={`item-navigation ${navigationLevel} ${activeCSS}`}
      onClick={() => onClick(id, stepToGo)}
    >
      {title}
    </li>
  );
}
