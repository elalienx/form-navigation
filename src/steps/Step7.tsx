// Project files
import Image from "assets/7.png";
import { useNavigation } from "state/NavigationContext";

export default function Step7() {
  // Global state
  const { setStep } = useNavigation();

  return (
    <div className="step">
      <img
        className="mock-screenshot"
        src={Image}
        alt="Mock of the real inferface found on Lendo.se"
      />
      <button onClick={() => setStep(8)}>Next ➡️</button>
    </div>
  );
}
