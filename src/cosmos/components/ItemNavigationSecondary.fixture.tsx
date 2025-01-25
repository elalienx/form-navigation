// Project files
import Navigation from "types/Navigation";
import ItemNavigationSecondary from "components/item-navigation-secondary/ItemNavigationSecondary";

// Properties
const defaultItem: Navigation = {
  id: "step-4-co-applicant-personal-data",
  title: "Co-applicant's data",
  navigationLevel: "secondary",
};

// Methods
function onClick(id: string) {
  alert(`Step to go ${id}`);
}

export default {
  Default: <ItemNavigationSecondary item={defaultItem} onClick={onClick} />,
  Active: <ItemNavigationSecondary item={defaultItem} onClick={onClick} isActive />,
};
