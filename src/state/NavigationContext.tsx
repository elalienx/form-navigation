// Node modules
import { createContext, useContext, useState } from "react";

// Properties
const Context = createContext(null);

// For the parent
export function NavigationProvider({ children }) {
  // Local state
  const [navigationItemId, setNavigationItemId] = useState("about-the-loan");
  const [stepId, setStepId] = useState("step-1-about-the-loan");
  const [hasCoAplicant, setHasCoAplicant] = useState(false); // to toggle the secondary steps, this should not be here but on the form data global state

  return (
    <Context.Provider
      value={{
        navigationItemId,
        setNavigationItemId,
        stepId,
        setStepId,
        hasCoAplicant,
        setHasCoAplicant,
      }}
    >
      {children}
    </Context.Provider>
  );
}

// For the children
export function useNavigation() {
  const context = useContext(Context);
  const errorMessage = `This component is using global state from useNavigation(). Ensure that it is wrapped with a NavigationProvider.`;

  // Safeguard
  if (!context) throw new Error(errorMessage);

  return context;
}
