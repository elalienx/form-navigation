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
  const { stepId, setStepId, hasCoAplicant } = useNavigation();

  // Methods
  function onItemClick(stepId: string) {
    setStepId(stepId);
  }

  // Components
  const Items = data.map((item) => {
    const isPrimary = item.navigationLevel === "primary";
    const isActive = stepId === item.id;

    // Safeguard
    if (!hasCoAplicant && !isPrimary) return;

    return <ItemNavigation key={item.id} item={item} onClick={onItemClick} isActive={isActive} />;
  });

  return (
    <nav className="navigation">
      <ul>{Items}</ul>
    </nav>
  );
}
