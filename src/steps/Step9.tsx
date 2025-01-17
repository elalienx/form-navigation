// Project files
import Image from "assets/9.png";
import { useNavigation } from "state/NavigationContext";

export default function Step9() {
  // Global state
  const { setStep } = useNavigation();

  return (
    <div className="step">
      <h3>Other loan and credits</h3>
      <img
        className="mock-screenshot"
        src={Image}
        alt="Mock of the real inferface found on Lendo.se"
      />
      <button onClick={() => setStep(10)}>Next ➡️</button>
    </div>
  );
}
