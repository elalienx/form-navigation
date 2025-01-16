// Project files
import Image from "assets/1.png";

export default function Step1() {
  return (
    <div className="step">
      <img
        className="mock-screenshot"
        src={Image}
        alt="Mock of the real inferface found on Lendo.se"
      />
      <button>Next ➡️</button>
    </div>
  );
}
