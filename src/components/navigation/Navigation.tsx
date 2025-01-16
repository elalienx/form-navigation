// Project files
import data from "data/steps.json";
import ItemNavigation from "../item-navigation/ItemNavigation";
import "./navigation.css";

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
