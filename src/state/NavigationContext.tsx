// Node modules
import { createContext, useContext, useState } from "react";

// Properties
const Context = createContext(null);

// For the parent
export function CartProvider({ children }) {
  // Local state
  const [navigationItem, setNavigationItem] = useState(0); // first item start on index 0
  const [step, setStep] = useState(1);
  const [hasCoAplicant, setHasCoAplicant] = useState(false); // to toggle the secondary steps

  return (
    <Context.Provider
      value={{
        navigationItem,
        setNavigationItem,
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
export function useCart() {
  const context = useContext(Context);

  return context;
}
