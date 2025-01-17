// Project files
import Image from "assets/10.png";

export default function Step10() {
  return (
    <div className="step">
      <h3>Summary</h3>
      <img
        className="mock-screenshot"
        src={Image}
        alt="Mock of the real inferface found on Lendo.se"
      />
      <button onClick={() => alert("Form complete 🎉")}>Submit 🏁</button>
    </div>
  );
}
