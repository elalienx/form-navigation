// Project files
import Navigation from "components/navigation/Navigation";
import StepManager from "components/step-manager/StepManager";
import "./live-demo.css";

export default function LiveDemo() {
  return (
    <section className="live-demo">
      <h2>🎉 Live demo</h2>
      <div className="container">
        <Navigation />
        <StepManager />
      </div>
    </section>
  );
}
