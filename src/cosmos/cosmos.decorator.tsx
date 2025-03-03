// Node modules
import type { ReactNode } from "react";

// Project files
import "styles/style.css"; // global CSS including font styles, colors, spacing, etc.
import "./cosmos-style.css"; // To center tested components on screen

interface Props {
  children: ReactNode;
}

export default function decorator({ children }: Props) {
  return <div id="cosmos">{children}</div>;
}
