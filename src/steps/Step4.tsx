// Project files
import Image from "assets/4.png";
import Button from "components/button/Button";
import { useNavigation } from "state/NavigationContext";

/**
 * This step is skipped if the applicant does not have a co-applicant.
 */
export default function Step4() {
  // Global state
  const { stepToGo, setStepToGo, setNavigationIndex } = useNavigation();

  // Methods
  function onSubmit() {
    validateForm();
    nextStep();
  }

  function validateForm() {
    console.log(`Validating form step #${stepToGo}`);
  }

  function nextStep() {
    setNavigationIndex(5);
    setStepToGo(5);
  }

  return (
    <div className="step">
      <h3>Co-applicant's personal data</h3>
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
