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
        {/* Three (special) */}
        {hasCoApplicant ? (
          <ItemMenu item={data[2]} />
        ) : (
          <ItemPrimary
            item={data[2]}
            onClick={() => onItemClick(data[2].id)}
            isActive={data[2].id === stepId}
          />
        )}
        {/* Four */}
        {hasCoApplicant ? (
          <ItemSecondary
            item={data[3]}
            onClick={() => onItemClick(data[3].id)}
            isActive={data[3].id === stepId}
          />
        ) : null}
        {/* Five */}
        {hasCoApplicant ? (
          <ItemSecondary
            item={data[4]}
            onClick={() => onItemClick(data[4].id)}
            isActive={data[4].id === stepId}
          />
        ) : null}
        {/* Six (special) */}
        {hasCoApplicant ? (
          <ItemMenu item={data[5]} />
        ) : (
          <ItemPrimary
            item={data[5]}
            onClick={() => onItemClick(data[5].id)}
            isActive={data[5].id === stepId}
          />
        )}
        {/* Seven */}
        {hasCoApplicant ? (
          <ItemSecondary
            item={data[6]}
            onClick={() => onItemClick(data[6].id)}
            isActive={data[6].id === stepId}
          />
        ) : null}
        {/* Eight */}
        {hasCoApplicant ? (
          <ItemSecondary
            item={data[7]}
            onClick={() => onItemClick(data[7].id)}
            isActive={data[7].id === stepId}
          />
        ) : null}
        {/* Nine */}
        <ItemPrimary
          item={data[8]}
          onClick={() => onItemClick(data[8].id)}
          isActive={data[8].id === stepId}
        />
        {/* Ten */}
        <ItemPrimary
          item={data[9]}
          onClick={() => onItemClick(data[9].id)}
          isActive={data[9].id === stepId}
        />
        {/* Eleven */}
        <ItemPrimary
          item={data[10]}
          onClick={() => onItemClick(data[10].id)}
          isActive={data[10].id === stepId}
        />
        {/* Twelve */}
        <ItemPrimary
          item={data[11]}
          onClick={() => onItemClick(data[11].id)}
          isActive={data[11].id === stepId}
        />
      </ul>
    </nav>
  );
}
