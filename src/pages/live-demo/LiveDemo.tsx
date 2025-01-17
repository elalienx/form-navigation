// Project files
import Navigation from "components/navigation/Navigation";
import StepManager from "components/step-manager/StepManager";
import "./live-demo.css";

export default function LiveDemo() {
  return (
    <div className="live-demo">
      <Navigation />
      <StepManager />
    </div>
  );
}
