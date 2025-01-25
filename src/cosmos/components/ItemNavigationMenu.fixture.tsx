// Project files
import Navigation from "types/Navigation";
import ItemNavigationMenu from "components/item-navigation-menu/ItemNavigationMenu";

// Properties
const defaultItem: Navigation = {
  title: "3. Personal data",
  navigationLevel: "primary",
  id: "step-3-applicant-personal-data",
};

export default <ItemNavigationMenu item={defaultItem} />;
