// Node modules
import { ReactElement } from "react";

// Project files
import { useNavigation } from "state/NavigationContext";
import Step1 from "pages/Step1";
import Step2 from "pages/Step2";
import Step3 from "pages/Step3";
import Step4 from "pages/Step4";
import Step5 from "pages/Step5";
import Step6 from "pages/Step6";
import Step7 from "pages/Step7";
import Step8 from "pages/Step8";
import Step9 from "pages/Step9";
import Step10 from "pages/Step10";
import "./step-manager.css";

/**
 * Handles mounting Formulator's current form to display. It does not mutate data, only reacts to it.
 */
export default function StepManager() {
  // Global state
  const { stepId } = useNavigation();

  // Properties
  const steps = {
    "step-about-the-loan": <Step1 />,
    "step-about-the-home": <Step2 />,
    "step-applicant-personal-data": <Step3 />,
    "step-co-applicant-personal-data": <Step4 />,
    "step-applicant-work-situation": <Step5 />,
    "step-co-applicant-work-situation": <Step6 />,
    "step-about-the-household": <Step7 />,
    "step-cars-and-homes": <Step8 />,
    "step-other-loan-and-credits": <Step9 />,
    "step-summary": <Step10 />,
  };

  // Components
  const Step: ReactElement = steps[stepId];

  // Safeguard
  if (!Step) return <div>⚠️ Step not found</div>;

  return <div className="step-manager">{Step}</div>;
}
