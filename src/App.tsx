// Project files
import Debug from "components/debug/Debug";
import Navigation from "components/navigation/Navigation";
import StepManager from "components/step-manager/StepManager";
import "./styles/style.css";

export default function App() {
  return (
    <div className="app">
      <h1>🧭 Form navigator</h1>
      <div className="live-demo">
        <Navigation />
        <StepManager />
      </div>
      <Debug />
    </div>
  );
}
