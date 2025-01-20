// Project files
import Image from "assets/10.png";
import Button from "components/button/Button";

export default function Step10() {
  // Methods
  function onSubmit() {
    alert("Form complete 🎉");
  }

  return (
    <div className="step">
      <h3>Summary</h3>
      <img
        className="mock-screenshot"
        src={Image}
        alt="Mock of the real inferface found on Lendo.se"
      />
      <Button icon={"flag-checkered"} onClick={onSubmit}>
        Submit
      </Button>
    </div>
  );
}
