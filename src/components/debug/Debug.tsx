// Project files
import { useNavigation } from "state/NavigationContext";
import "./debug.css";

export default function Debug() {
  // Global state
  const { navigationItemId, stepId, hasCoAplicant } = useNavigation();

  // Properties
  const coApplicant = hasCoAplicant ? "Yes ✅" : "No ❌";

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
            <td>Navigation item id</td>
            <td>{navigationItemId}</td>
          </tr>
          <tr>
            <td>Step id</td>
            <td>{stepId}</td>
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
