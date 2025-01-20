// Project files
import Debug from "components/debug/Debug";
import Navigation from "components/navigation/Navigation";
import StepManager from "components/step-manager/StepManager";
import "./styles/style.css";

export default function App() {
  return (
    <div className="app">
      <h1>Formulator</h1>
      <p>
        This is a UX experimentation for testing formulary navigations. Do not
        submit sensitive data in it.
      </p>
      <div className="formulary">
        <Navigation />
        <StepManager />
      </div>
      <Debug />
    </div>
  );
}
