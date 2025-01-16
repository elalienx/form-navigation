// Project files
import data from "data/steps.json";
import ItemNavigation from "./ItemNavigation";

export default function Navigation() {
  // Components
  const Items = data.map((item, index) => (
    <ItemNavigation key={index} item={item} />
  ));

  return (
    <nav className="navigation">
      <ul>{Items}</ul>
    </nav>
  );
}
