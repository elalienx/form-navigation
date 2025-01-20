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
    stepToGo,
    setStepToGo,
    hasCoAplicant,
    setHasCoAplicant,
    setNavigationIndex,
  } = useNavigation();

  // Methods
  useEffect(() => {
    const overrideNavigation = hasCoAplicant ? 3 : 2;

    setNavigationIndex(overrideNavigation);
  }, [hasCoAplicant]);

  function onSubmit() {
    validateForm();
    nextStep();
  }

  function validateForm() {
    console.log(`Validating form step #${stepToGo}`);
  }

  function nextStep() {
    const navigationIndex: number = hasCoAplicant ? 4 : 5;
    const stepToGo: number = hasCoAplicant ? 4 : 5;

    setNavigationIndex(navigationIndex);
    setStepToGo(stepToGo);
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
