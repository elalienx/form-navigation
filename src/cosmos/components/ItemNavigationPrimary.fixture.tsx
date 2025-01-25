// Project files
import Navigation from "types/Navigation";
import ItemNavigationPrimary from "components/item-navigation-primary/ItemNavigationPrimary";

// Properties
const item: Navigation = {
  id: "step-1-about-the-loan",
  title: "1. About the loan",
  navigationLevel: "primary",
};

// Methods
function onClick(id: string) {
  alert(`Step to go ${id}`);
}

export default {
  Default: <ItemNavigationPrimary item={item} onClick={onClick} />,
  Active: <ItemNavigationPrimary item={item} onClick={onClick} isActive />,
};
