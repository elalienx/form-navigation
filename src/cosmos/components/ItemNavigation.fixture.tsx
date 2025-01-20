// Node modules
import { ReactNode } from "react";

// Project files
import Navigation from "types/Navigation";
import ItemNavigation from "../../components/item-navigation/ItemNavigation";
import { NavigationProvider } from "state/NavigationContext";

// Properties
const defaultItem: Navigation = {
  title: "About the property",
  navigationLevel: "primary",
  stepToGo: 1,
};
const activeIndex = 1;
const inactiveIndex = 0;

// Decorators
interface Props {
  children: ReactNode;
}

function Decorator({ children }: Props) {
  return <NavigationProvider>{children}</NavigationProvider>;
}

export default {
  Default: (
    <Decorator>
      <ItemNavigation item={defaultItem} index={activeIndex} />
    </Decorator>
  ),
  Active: (
    <Decorator>
      <ItemNavigation item={defaultItem} index={inactiveIndex} />
    </Decorator>
  ),
};
