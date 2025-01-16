// Project files
import Debug from "components/pages/debug/Debug";
import LiveDemo from "components/pages/LiveDemo";
import "./styles/style.css";

export default function App() {
  return (
    <div className="app">
      <h1>🧭 Form navigator</h1>
      <Debug />
      <LiveDemo />
    </div>
  );
}
