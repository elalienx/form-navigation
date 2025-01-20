// Node modules
import { createContext, useContext, useState } from "react";

// Properties
const Context = createContext(null);

// For the parent
export function NavigationProvider({ children }) {
  // Local state
  const [navigationIndex, setNavigationIndex] = useState(0); // first item start on index 0
  const [step, setStep] = useState(1);
  const [hasCoAplicant, setHasCoAplicant] = useState(false); // to toggle the secondary steps

  return (
    <Context.Provider
      value={{
        navigationIndex,
        setNavigationIndex,
        step,
        setStep,
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
