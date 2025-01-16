// Project files
import { useNavigation } from "state/NavigationContext";
import "./debug.css";

export default function Debug() {
  // Global state
  const { navigationIndex, step, hasCoAplicant } = useNavigation();

  // Properties
  const coApplicant = hasCoAplicant ? "✅" : "❌";

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
            <td>navigationIndex</td>
            <td>{navigationIndex}</td>
          </tr>
          <tr>
            <td>step</td>
            <td>{step}</td>
          </tr>
          <tr>
            <td>hasCoAplicant</td>
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
