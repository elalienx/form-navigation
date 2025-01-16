// Project files
import { useNavigation } from "state/NavigationContext";
import "./item-navigation.css";

interface Props {
  item: {
    name: string;
    navigationLevel: string;
    step: number;
  };
}

export default function ItemNavigation({ item }: Props) {
  const { name, navigationLevel, step } = item;

  // Global state
  const { setStep } = useNavigation();

  // Methods
  function onClick() {
    console.log(`Clicked on ${name} to go to ${step}`);
    setStep(step);
  }

  return (
    <li className={`item-navigation ${navigationLevel}`} onClick={onClick}>
      {name}
    </li>
  );
}
