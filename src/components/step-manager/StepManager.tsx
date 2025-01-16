// Project files
import { useNavigation } from "state/NavigationContext";
import Step1 from "steps/Step1";
import Step2 from "steps/Step2";
import Step3 from "steps/Step3";
import Step4 from "steps/Step4";
import Step5 from "steps/Step5";
import Step6 from "steps/Step6";
import Step7 from "steps/Step7";
import Step8 from "steps/Step8";
import Step9 from "steps/Step9";
import Step10 from "steps/Step10";
import "./step-manager.css";

export default function StepManager() {
  // Global state
  const { step } = useNavigation();

  // Properties
  const steps = {
    1: Step1,
    2: Step2,
    3: Step3,
    4: Step4,
    5: Step5,
    6: Step6,
    7: Step7,
    8: Step8,
    9: Step9,
    10: Step10,
  };

  // Dynamically get the component
  const Step = steps[step];
  const Fallback = <div>⚠️ Step not found</div>;

  return <div className="step-manager">{Step ? <Step /> : Fallback}</div>;
}
