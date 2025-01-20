// Project files
import Image from "assets/6.png";
import Button from "components/button/Button";
import { useNavigation } from "state/NavigationContext";

/**
 * This step is skipped if the applicant does not have a co-applicant.
 */
export default function Step6() {
  // Global state
  const { stepNumber, setStepNumber, setNavigationIndex } = useNavigation();

  // Methods
  function onSubmit() {
    validateForm();
    nextStep();
  }

  function validateForm() {
    console.log(`Validating form step #${stepNumber}`);
  }

  function nextStep() {
    setNavigationIndex(8);
    setStepNumber(7);
  }

  return (
    <div className="step">
      <h3>Co-applicant's work situation</h3>
      <img
        className="mock-screenshot"
        src={Image}
        alt="Mock of the real inferface found on Lendo.se"
      />
      <Button icon={"arrow-right"} onClick={onSubmit}>
        Next
      </Button>
    </div>
  );
}
