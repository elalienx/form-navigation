// Project files
import Image from "assets/9.png";
import Button from "components/button/Button";
import { useNavigation } from "state/NavigationContext";

export default function Step9() {
  // Global state
  const { stepNumber, setStepNumber, setNavigationItemId } = useNavigation();

  // Methods
  function onSubmit() {
    validateForm();
    nextStep();
  }

  function validateForm() {
    console.log(`Validating form step #${stepNumber}`);
  }

  function nextStep() {
    setNavigationItemId("summary");
    setStepNumber(10);
  }

  return (
    <div className="step">
      <h3>Other loan and credits</h3>
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
