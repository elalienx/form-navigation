// Project files
import StepManager from "components/step-manager/StepManager";
import { NavigationProvider } from "state/NavigationContext";
import NavigationInitialState from "types/NavigationInitialState";

// Properties
const initialState: NavigationInitialState = {
  stepId: "step-1-about-the-loan",
  hasCoApplicant: false,
};

export default {
  Step1: (
    <NavigationProvider initialState={initialState}>
      <StepManager />
    </NavigationProvider>
  ),
};
