// Project files
import Image from "assets/2.png";
import Button from "components/button/Button";
import { useNavigation } from "state/NavigationContext";

export default function Step2() {
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
    setNavigationIndex(2);
    setStepNumber(3);
  }

  return (
    <div className="step">
      <h3>About the home</h3>
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
