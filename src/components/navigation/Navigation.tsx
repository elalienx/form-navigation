// Project files
import ItemPrimary from "components/item-navigation-primary/ItemNavigationPrimary";
import ItemSecondary from "components/item-navigation-secondary/ItemNavigationSecondary";
import ItemMenu from "components/item-navigation-menu/ItemNavigationMenu";
import data from "data/navigation.json";
import { useNavigation } from "state/NavigationContext";
import "./navigation.css";

/**
 * Handles mounting Formulator's navigation system. It does not mutate data, only reacts to it.
 */
export default function Navigation() {
  // Global state
  const { stepId, setStepId, hasCoApplicant } = useNavigation();

  // Methods
  function onItemClick(stepId: string) {
    setStepId(stepId);
  }

  return (
    <nav className="navigation">
      <ul>
        {/* One */}
        <ItemPrimary
          item={data[0]}
          onClick={() => onItemClick(data[0].id)}
          isActive={data[0].id === stepId}
        />
        {/* Two */}
        <ItemPrimary
          item={data[1]}
          onClick={() => onItemClick(data[1].id)}
          isActive={data[1].id === stepId}
        />
        {/* Three */}
        {hasCoApplicant ? (
          <ItemMenu item={data[2]} />
        ) : (
          <ItemPrimary
            item={data[2]}
            onClick={() => onItemClick(data[2].id)}
            isActive={data[2].id === stepId}
          />
        )}
      </ul>
    </nav>
  );
}
