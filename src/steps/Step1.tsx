// Project files
import Image from "assets/1.png";
import { useNavigation } from "state/NavigationContext";

export default function Step1() {
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
    setNavigationIndex(1);
    setStepToGo(2);
  }

  return (
    <div className="step">
      <h3>About the loan</h3>
      <img
        className="mock-screenshot"
        src={Image}
        alt="Mock of the real inferface found on Lendo.se"
      />
      <button onClick={onSubmit}>Next ➡️</button>
    </div>
  );
}
