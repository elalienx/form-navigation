// Project files
import iNavigation from "types/Navigation";
import "./item-navigation-menu.css";
import FontAwesomeIcon from "components/font-awesome/FontAwesomeIcon";

interface Props {
  /** The object with the information to display the item. */
  item: iNavigation;
}

export default function ItemNavigationMenu({ item }: Props) {
  const { title } = item;

  return (
    <li className="item-navigation-menu">
      {title} <FontAwesomeIcon icon={["fas", "chevron-down"]} />
    </li>
  );
}
