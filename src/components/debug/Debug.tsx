// Project files
import { useNavigation } from "state/NavigationContext";
import "./debug.css";

export default function Debug() {
  // Global state
  const { navigationItemId, stepNumber, hasCoAplicant } = useNavigation();

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
            <td>Navigation item</td>
            <td>{navigationItemId}</td>
          </tr>
          <tr>
            <td>Step number</td>
            <td>{stepNumber}</td>
          </tr>
          <tr>
            <td>Has co-applicant?</td>
            <td>{coApplicant}</td>
          </tr>
        </tbody>
      </table>
      <small>This table is only for developers.</small>
    </section>
  );
}
