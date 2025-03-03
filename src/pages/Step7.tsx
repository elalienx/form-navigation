// Project files
import Image from "assets/7.png";
import Button from "components/button/Button";
import { useNavigation } from "state/NavigationContext";

export default function Step7() {
  // Global state
  const { stepNumber, setStepId, setNavigationItemId } = useNavigation();

  // Methods
  function onSubmit() {
    console.log(`Validating form step #${stepNumber}`);
    setNavigationItemId("cars-and-homes");
    setStepId("step-8-cars-and-homes");
  }

  return (
    <div className="step">
      <h3>About the household</h3>
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
