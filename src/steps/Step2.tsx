// Project files
import Image from "assets/2.png";

export default function Step2() {
  return (
    <div id="Step2" className="step">
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
