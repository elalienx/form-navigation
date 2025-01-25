// Project files
import Image from "assets/1.png";
import Button from "components/button/Button";
import { useNavigation } from "state/NavigationContext";

export default function Step1() {
  // Global state
  const { stepNumber, setStepId } = useNavigation();

  // Methods
  function onSubmit() {
    console.log(`Validating form step #${stepNumber}`);
    setStepId("step-2-about-the-home");
  }

  return (
    <div className="step">
      <h3>About the loan</h3>
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
