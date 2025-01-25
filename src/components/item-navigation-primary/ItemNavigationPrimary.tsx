// Project files
import Navigation from "types/Navigation";
import "./item-navigation-primary.css";

interface Props {
  /** The object with the information to display the item. */
  item: Navigation;

  /** Flag to highlight the item if active */
  isActive?: boolean;

  /** The actions we want to perform on click */
  onClick: (id: string) => void;
}

export default function ItemNavigationPrimary({ item, isActive, onClick }: Props) {
  const { id, title } = item;

  // Properties
  const activeCSS = isActive ? "active" : "";

  return (
    <li className={`item-navigation-primary ${activeCSS}`} onClick={() => onClick(id)}>
      {title}
    </li>
  );
}
