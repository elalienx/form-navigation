// Project files
import ItemNavigation from "components/item-navigation/ItemNavigation";
import data from "data/navigation.json";
import { useNavigation } from "state/NavigationContext";
import "./navigation.css";

/**
 * Handles mounting Formulator's navigation system. It does not mutate data, only reacts to it.
 */
export default function Navigation() {
  // Global state
  const { hasCoAplicant } = useNavigation();

  // Components
  const Items = data.map((item, index) => {
    const isPrimary = item.navigationLevel === "primary";

    // Safeguard
    if (!hasCoAplicant && !isPrimary) return;

    return <ItemNavigation key={index} item={item} index={index} />;
  });

  return (
    <nav className="navigation">
      <ul>{Items}</ul>
    </nav>
  );
}
