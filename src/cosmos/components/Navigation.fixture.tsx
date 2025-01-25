// Project files
import Navigation from "components/navigation/Navigation";
import { NavigationProvider } from "state/NavigationContext";
import NavigationInitialState from "types/NavigationInitialState";

// Properties
const withouthApplicantState: NavigationInitialState = {
  stepId: "step-1-about-the-loan",
  hasCoApplicant: false,
};
const withApplicantState: NavigationInitialState = {
  stepId: "step-1-about-the-loan",
  hasCoApplicant: true,
};

export default {
  Default: (
    <NavigationProvider initialState={withouthApplicantState}>
      <Navigation />
    </NavigationProvider>
  ),
  WithSecondaryItems: (
    <NavigationProvider initialState={withApplicantState}>
      <Navigation />
    </NavigationProvider>
  ),
};
