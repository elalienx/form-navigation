// Project files
import Image from "assets/3.png";
import { useNavigation } from "state/NavigationContext";

export default function Step3() {
  // Global state
  const { setStep, hasCoAplicant, setHasCoAplicant } = useNavigation();

  // Properties
  const nextStep = hasCoAplicant ? 4 : 5;

  return (
    <div className="step">
      <img
        className="mock-screenshot"
        src={Image}
        alt="Mock of the real inferface found on Lendo.se"
      />
      {/* Co Applicant question which alters the lengh of the whole formulary */}
      <div className="question-co-applicant">
        <p>Do you have a co-applicant?</p>
        <button onClick={() => setHasCoAplicant(true)}>Yes</button>
        <button onClick={() => setHasCoAplicant(false)}>No</button>
      </div>
      <hr />
      <button onClick={() => setStep(nextStep)}>Next ➡️</button>
    </div>
  );
}
