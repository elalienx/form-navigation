// Node modules
import { useEffect } from "react";

// Project files
import Image from "assets/5.png";
import Button from "components/button/Button";
import { useNavigation } from "state/NavigationContext";

/**
 * This step can go to different steps if the applicant has a co-applicant.
 */
export default function Step5() {
  // Global state
  const { stepNumber, setStepNumber, hasCoAplicant, setNavigationIndex } =
    useNavigation();

  // Methods
  useEffect(() => {
    const overrideNavigation = hasCoAplicant ? 6 : 5;

    setNavigationIndex(overrideNavigation);
  }, [hasCoAplicant]);

  function onSubmit() {
    validateForm();
    nextStep();
  }

  function validateForm() {
    console.log(`Validating form step #${stepNumber}`);
  }

  function nextStep() {
    const navigationIndex: number = hasCoAplicant ? 7 : 8;
    const stepNumber: number = hasCoAplicant ? 6 : 7;

    setNavigationIndex(navigationIndex);
    setStepNumber(stepNumber);
  }

  return (
    <div className="step">
      <h3>Your work situation</h3>
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
