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
      <small>ℹ️ This table is only for developers.</small>
    </section>
  );
}
