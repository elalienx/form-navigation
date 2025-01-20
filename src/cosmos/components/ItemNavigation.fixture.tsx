// Project files
import Navigation from "types/Navigation";
import ItemNavigation from "../../components/item-navigation/ItemNavigation";

// Properties
const defaultItem: Navigation = {
  id: "about-the-property",
  title: "About the property",
  navigationLevel: "primary",
  stepToGo: 1,
};

// Methods
function onClick(navigationItemId: string, stepNumber: number) {
  alert(`ItemId ${navigationItemId}, Step to go ${stepNumber}`);
}

export default {
  Default: <ItemNavigation item={defaultItem} onClick={onClick} />,
  Active: <ItemNavigation item={defaultItem} onClick={onClick} isActive />,
};
