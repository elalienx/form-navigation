// Project files
import iNavigation from "types/Navigation";
import ItemNavigationSecondary from "components/item-navigation-secondary/ItemNavigationSecondary";

// Properties
const item: iNavigation = {
  id: "step-4-co-applicant-personal-data",
  title: "Co-applicant's data",
  navigationLevel: "secondary",
};

// Methods
function onClick(id: string) {
  alert(`Step to go ${id}`);
}

export default {
  Default: <ItemNavigationSecondary item={item} onClick={onClick} />,
  Active: <ItemNavigationSecondary item={item} onClick={onClick} isActive />,
};
