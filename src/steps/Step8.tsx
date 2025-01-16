// Project files
import Image from "assets/8.png";
import { useNavigation } from "state/NavigationContext";

export default function Step8() {
  // Global state
  const { setStep } = useNavigation();

  return (
    <div className="step">
      <img
        className="mock-screenshot"
        src={Image}
        alt="Mock of the real inferface found on Lendo.se"
      />
      <button onClick={() => setStep(9)}>Next ➡️</button>
    </div>
  );
}
