// Project files
import "./debug.css";

export default function Debug() {
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
            <td>555</td>
          </tr>
          <tr>
            <td>Current step active</td>
            <td>666</td>
          </tr>
          <tr>
            <td>Does the applicant has a co-applicant?</td>
            <td>MAYBE</td>
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
