// Project files
import Image from "assets/1.png";

export default function Step5() {
  return (
    <div id="Step5" className="step">
      <h1>About the loan</h1>
      <img
        className="mock-screenshot"
        src={Image}
        alt="Mock of the real inferface found on Lendo.se"
      />
      <button>Next ➡️</button>
    </div>
  );
}
