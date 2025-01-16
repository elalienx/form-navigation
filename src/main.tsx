// Node modules
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Project files
import App from "./App.tsx";
import { NavigationProvider } from "state/NavigationContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </StrictMode>
);
