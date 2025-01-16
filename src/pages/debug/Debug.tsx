// Project files
import { useNavigation } from "state/NavigationContext";
import "./debug.css";

export default function Debug() {
  const { navigationIndex, step, hasCoAplicant } = useNavigation();

  // Derived state
  const coApplicant = hasCoAplicant ? "Yes ✅" : "No ❌";

  return (
    <section id="debug">
      <h2>🐞 Debug</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Current navigation item active</td>
            <td>{navigationIndex}</td>
          </tr>
          <tr>
            <td>Current step active</td>
            <td>{step}</td>
          </tr>
          <tr>
            <td>Does the applicant has a co-applicant?</td>
            <td>{coApplicant}</td>
          </tr>
        </tbody>
      </table>
      <small>
        ℹ️ This is only for developers, so we can track what is happening behind
        the scenes to catch any errors.
      </small>
    </section>
  );
}
