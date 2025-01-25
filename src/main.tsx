// Node modules
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Project files
import App from "./App.tsx";
import { NavigationProvider } from "state/NavigationContext.tsx";
import NavigationInitialState from "types/NavigationInitialState.ts";

// Properties
const initialState: NavigationInitialState = {
  stepId: "step-1-about-the-loan",
  hasCoApplicant: false,
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavigationProvider initialState={initialState}>
      <App />
    </NavigationProvider>
  </StrictMode>
);
