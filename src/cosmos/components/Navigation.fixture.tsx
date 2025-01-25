// Project files
import dataWithCoApplicant from "data/with-co-applicant.json";
import dataWithoutCoApplicant from "data/withouth-co-applicant.json";
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
      <Navigation items={dataWithoutCoApplicant} />
    </NavigationProvider>
  ),
  WithSecondaryItems: (
    <NavigationProvider initialState={withApplicantState}>
      <Navigation items={dataWithCoApplicant} />
    </NavigationProvider>
  ),
};
