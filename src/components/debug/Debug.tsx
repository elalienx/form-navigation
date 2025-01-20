// Project files
import { useNavigation } from "state/NavigationContext";
import "./debug.css";

export default function Debug() {
  // Global state
  const { navigationIndex, stepToGo, hasCoAplicant } = useNavigation();

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
            <td>Navigation index</td>
            <td>{navigationIndex}</td>
          </tr>
          <tr>
            <td>Step</td>
            <td>{stepToGo}</td>
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
