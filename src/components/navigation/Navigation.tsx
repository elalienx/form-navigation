// Project files
import ItemPrimary from "components/item-navigation-primary/ItemNavigationPrimary";
import ItemSecondary from "components/item-navigation-secondary/ItemNavigationSecondary";
import ItemMenu from "components/item-navigation-menu/ItemNavigationMenu";
import { useNavigation } from "state/NavigationContext";
import iNavigation from "types/Navigation";
import "./navigation.css";

/**
 * Handles mounting Formulator's navigation system. It does not mutate data, only reacts to it.
 */
interface Props {
  items: iNavigation[];
}

export default function Navigation({ items }: Props) {
  // Global state
  const { stepId, setStepId } = useNavigation();

  // Methods
  function onItemClick(stepId: string) {
    setStepId(stepId);
  }

  // Components
  const Items = items.map((item) => {
    const isActive = item.id === stepId;

    if (item.navigationLevel === "primary")
      return <ItemPrimary key={item.id} item={item} onClick={onItemClick} isActive={isActive} />;

    if (item.navigationLevel === "secondary")
      return <ItemSecondary key={item.id} item={item} onClick={onItemClick} isActive={isActive} />;

    if (item.navigationLevel === "menu") return <ItemMenu key={item.id} item={item} />;
  });

  return <nav className="navigation">{Items}</nav>;
}
