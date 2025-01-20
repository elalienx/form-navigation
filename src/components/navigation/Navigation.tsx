// Project files
import data from "data/steps.json";
import ItemNavigation from "components/item-navigation/ItemNavigation";
import { useNavigation } from "state/NavigationContext";
import "./navigation.css";

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
