// Project files
import Image from "assets/3.png";
import { useNavigation } from "state/NavigationContext";

export default function Step3() {
  // Global state
  const { setStep } = useNavigation();

  return (
    <div className="step">
      <img
        className="mock-screenshot"
        src={Image}
        alt="Mock of the real inferface found on Lendo.se"
      />
      <button onClick={() => setStep(4)}>Next ➡️</button>
    </div>
  );
}
