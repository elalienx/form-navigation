// Project files
import Navigation from "types/Navigation";
import ItemNavigation from "../../components/item-navigation-primary/ItemNavigationPrimary";

// Properties
const defaultItem: Navigation = {
  id: "about-the-property",
  title: "About the property",
  navigationLevel: "primary",
  stepToGo: "step-2-about-the-home",
};

// Methods
function onClick(navigationItemId: string, stepToGo: string) {
  alert(`ItemId ${navigationItemId}, Step to go ${stepToGo}`);
}

export default {
  Default: <ItemNavigation item={defaultItem} onClick={onClick} />,
  Active: <ItemNavigation item={defaultItem} onClick={onClick} isActive />,
};
