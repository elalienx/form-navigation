// Node modules
import { useEffect } from "react";

// Project files
import Image from "assets/3.png";
import Button from "components/button/Button";
import { useNavigation } from "state/NavigationContext";

/**
 * This step decides the formulary lenght based if the applicant has a co-applicant.
 */
export default function Step3() {
  // Global state
  const {
    stepId,
    setStepId,
    hasCoAplicant,
    setHasCoAplicant,
    navigationItemId,
    setNavigationItemId,
  } = useNavigation();

  // Methods
  useEffect(() => {
    const overrideNavigationItemId = hasCoAplicant ? "applicant-personal-data" : "personal-data";

    setNavigationItemId(overrideNavigationItemId);
  }, [navigationItemId, hasCoAplicant]);

  function onSubmit() {
    console.log(`Validating form step #${stepId}`);
    nextStep();
  }

  function nextStep() {
    const navigationItemId = hasCoAplicant ? "co-applicant-personal-data" : "work-situation";
    const stepId = hasCoAplicant
      ? "step-4-co-applicant-personal-data"
      : "step-5-applicant-work-situation";

    setNavigationItemId(navigationItemId);
    setStepId(stepId);
  }

  return (
    <div className="step">
      <h3>Your personal data</h3>
      <img
        className="mock-screenshot"
        src={Image}
        alt="Mock of the real inferface found on Lendo.se"
      />
      {/* Co Applicant question which alters the lengh of the whole formulary */}
      <div className="question-co-applicant">
        <p>Do you have a co-applicant?</p>
        <label>
          <input
            type="radio"
            name="coApplicant"
            value="yes"
            checked={hasCoAplicant === true}
            onChange={() => setHasCoAplicant(true)}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="coApplicant"
            value="no"
            checked={hasCoAplicant === false}
            onChange={() => setHasCoAplicant(false)}
          />
          No
        </label>
      </div>
      <Button icon={"arrow-right"} onClick={onSubmit}>
        Next
      </Button>
    </div>
  );
}
