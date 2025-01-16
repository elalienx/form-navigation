// Project files
import Image from "assets/1.png";
import { useNavigation } from "state/NavigationContext";

export default function Step1() {
  // Global state
  const { setStep } = useNavigation();

  return (
    <div className="step">
      <img
        className="mock-screenshot"
        src={Image}
        alt="Mock of the real inferface found on Lendo.se"
      />
      <button onClick={() => setStep(2)}>Next ➡️</button>
    </div>
  );
}
