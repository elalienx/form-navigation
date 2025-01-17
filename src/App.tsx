// Project files
import Debug from "pages/debug/Debug";
import LiveDemo from "pages/live-demo/LiveDemo";
import "./styles/style.css";

export default function App() {
  return (
    <div className="app">
      <h1>🧭 Form navigator</h1>
      <LiveDemo />
      <Debug />
    </div>
  );
}
