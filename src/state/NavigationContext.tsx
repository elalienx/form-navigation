// Node modules
import { createContext, ReactElement, useContext, useState } from "react";
import NavigationInitialState from "types/NavigationInitialState";

// Properties
const Context = createContext(null);

interface Props {
  children: ReactElement;
  initialState: NavigationInitialState;
}

export function NavigationProvider({ children, initialState }: Props) {
  // Local state
  const [stepId, setStepId] = useState(initialState.stepId);
  const [hasCoApplicant, setHasCoApplicant] = useState(initialState.hasCoApplicant);

  return (
    <Context.Provider
      value={{
        stepId,
        setStepId,
        hasCoApplicant,
        setHasCoApplicant,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useNavigation() {
  const context = useContext(Context);
  const errorMessage = `This component is using global state from useNavigation(). Ensure that it is wrapped with a NavigationProvider.`;

  // Safeguard
  if (!context) throw new Error(errorMessage);

  return context;
}
