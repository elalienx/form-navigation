// Node modules
import { ReactNode } from "react";

// Project files
import StepManager from "components/step-manager/StepManager";
import { NavigationProvider } from "state/NavigationContext";

// Decorators
interface Props {
  children: ReactNode;
}

function Decorator({ children }: Props) {
  return <NavigationProvider>{children}</NavigationProvider>;
}

export default {
  Step1: (
    <Decorator>
      <StepManager />
    </Decorator>
  ),
};
