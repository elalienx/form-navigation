// Project files
import Image from "assets/8.png";
import Button from "components/button/Button";
import { useNavigation } from "state/NavigationContext";

export default function Step8() {
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
    setNavigationIndex(10);
    setStepToGo(9);
  }

  return (
    <div className="step">
      <h3>Cars and homes</h3>
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
