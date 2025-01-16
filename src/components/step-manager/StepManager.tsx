// Project files
import { useNavigation } from "state/NavigationContext";
import Step1 from "steps/Step1";
import Step2 from "steps/Step2";
import Step3 from "steps/Step3";
import Step4 from "steps/Step4";
import Step5 from "steps/Step5";

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
  };

  // Dynamically get the component
  const Step = steps[step];
  const Fallback = <div>⚠️ Step not found</div>;

  return <>{Step ? <Step /> : Fallback}</>;
}
