// Node modules
import { ReactNode } from "react";

// Project files
import Navigation from "components/navigation/Navigation";
import { NavigationProvider } from "state/NavigationContext";

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
      <Navigation />
    </Decorator>
  ),
};
