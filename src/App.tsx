// Project files
import Navigation from "components/navigation/Navigation";
import "./styles/style.css";

export default function App() {
  return (
    <div className="app">
      <h1>🧭 Form navigator</h1>
      <section className="debug">
        <h2>🐞 Debug</h2>
        <ol>
          <li>Current navigation item active</li>
          <li>Current step active</li>
          <li>Does the applicant has a co-applicant?</li>
        </ol>
        <small>
          This is only for developers, so we can track what is happening behind
          the scenes to catch any errors.
        </small>
      </section>
      <section className="live-demo">
        <h2>▶️ Live demo</h2>
        <Navigation />
      </section>
    </div>
  );
}
