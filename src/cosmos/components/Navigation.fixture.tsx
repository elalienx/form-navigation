// Project files
import Navigation from "components/navigation/Navigation";
import { NavigationProvider } from "state/NavigationContext";

export default {
  Default: (
    <NavigationProvider>
      <Navigation />
    </NavigationProvider>
  ),
  WithSecondaryItems: <p>⚠️ Pending</p>,
};
