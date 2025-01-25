// Project files
import StepManager from "components/step-manager/StepManager";
import { NavigationProvider } from "state/NavigationContext";

export default {
  Step1: (
    <NavigationProvider>
      <StepManager />
    </NavigationProvider>
  ),
};
