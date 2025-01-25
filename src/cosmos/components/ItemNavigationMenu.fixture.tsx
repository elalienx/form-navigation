// Project files
import iNavigation from "types/Navigation";
import ItemNavigationMenu from "components/item-navigation-menu/ItemNavigationMenu";

// Properties
const defaultItem: iNavigation = {
  title: "3. Personal data",
  navigationLevel: "primary",
  id: "step-3-applicant-personal-data",
};

export default <ItemNavigationMenu item={defaultItem} />;
