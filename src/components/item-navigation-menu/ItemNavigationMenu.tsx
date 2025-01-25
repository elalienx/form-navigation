// Project files
import Navigation from "types/Navigation";
import "./item-navigation-menu.css";

interface Props {
  /** The object with the information to display the item. */
  item: Navigation;
}

export default function ItemNavigationMenu({ item }: Props) {
  const { title } = item;

  return <li className="item-navigation-menu">{title}</li>;
}
