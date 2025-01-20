// Node modules
import { ReactElement } from "react";

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

/**
 * Handles mounting Formulator's current form to display. It does not mutate data, only reacts to it.
 */
export default function StepManager() {
  // Global state
  const { stepNumber } = useNavigation();

  // Properties
  const steps = {
    1: <Step1 />,
    2: <Step2 />,
    3: <Step3 />,
    4: <Step4 />,
    5: <Step5 />,
    6: <Step6 />,
    7: <Step7 />,
    8: <Step8 />,
    9: <Step9 />,
    10: <Step10 />,
  };

  // Components
  const Step: ReactElement = steps[stepNumber];

  // Safeguard
  if (!Step) return <div>⚠️ Step not found</div>;

  return <div className="step-manager">{Step}</div>;
}
