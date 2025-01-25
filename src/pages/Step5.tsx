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
  const { stepId, setStepId, hasCoAplicant, navigationItemId, setNavigationItemId } =
    useNavigation();

  // Methods
  useEffect(() => {
    const overrideNavigationItemId = hasCoAplicant ? "applicant-work-situation" : "work-situation";

    setNavigationItemId(overrideNavigationItemId);
  }, [navigationItemId, hasCoAplicant]);

  function onSubmit() {
    console.log(`Validating form step #${stepId}`);
    nextStep();
  }

  function nextStep() {
    const navigationItemId = hasCoAplicant ? "co-applicant-work-situation" : "about-the-household";
    const stepId = hasCoAplicant
      ? "step-6-co-applicant-work-situation"
      : "step-7-about-the-household";

    setNavigationItemId(navigationItemId);
    setStepId(stepId);
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
