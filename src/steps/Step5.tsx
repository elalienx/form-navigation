// Project files
import Image from "assets/5.png";
import { useNavigation } from "state/NavigationContext";

/**
 * This step can go to different steps if the applicant has a co-applicant.
 */
export default function Step5() {
  // Global state
  const {
    stepToGo,
    setStepToGo,
    hasCoAplicant,
    setHasCoAplicant,
    setNavigationIndex,
  } = useNavigation();

  // Methods
  function onSubmit() {
    validateForm();
    nextStep();
  }

  function validateForm() {
    console.log(`Validating form step #${stepToGo}`);
  }

  function nextStep() {
    const nextStep: number = hasCoAplicant ? 6 : 7;

    setNavigationIndex(2);
    setStepToGo(nextStep);
  }

  return (
    <div className="step">
      <h3>Your work situation</h3>
      <img
        className="mock-screenshot"
        src={Image}
        alt="Mock of the real inferface found on Lendo.se"
      />
      <button onClick={onSubmit}>Next ➡️</button>
    </div>
  );
}
