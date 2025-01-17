// Project files
import Image from "assets/5.png";
import { useNavigation } from "state/NavigationContext";

/**
 * This step can go to different steps if the applicant has a co-applicant.
 */
export default function Step5() {
  // Global state
  const { setStep, hasCoAplicant } = useNavigation();

  // Properties
  const nextStep: number = hasCoAplicant ? 6 : 7;

  return (
    <div className="step">
      <h3>Your work situation</h3>
      <img
        className="mock-screenshot"
        src={Image}
        alt="Mock of the real inferface found on Lendo.se"
      />
      <button onClick={() => setStep(nextStep)}>Next ➡️</button>
    </div>
  );
}
