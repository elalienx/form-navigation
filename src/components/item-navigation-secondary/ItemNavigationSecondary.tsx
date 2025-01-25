// Project files
import iNavigation from "types/Navigation";
import "./item-navigation-secondary.css";

interface Props {
  /** The object with the information to display the item. */
  item: iNavigation;

  /** Flag to highlight the item if active */
  isActive?: boolean;

  /** The actions we want to perform on click */
  onClick: (id: string) => void;
}

export default function ItemNavigationSecondary({ item, isActive, onClick }: Props) {
  const { id, title } = item;

  // Properties
  const activeCSS = isActive ? "active" : "";

  return (
    <li className={`item-navigation-secondary ${activeCSS}`} onClick={() => onClick(id)}>
      {title}
    </li>
  );
}
