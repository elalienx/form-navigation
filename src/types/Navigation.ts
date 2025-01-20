export default interface Navigation {
  /** Title to show on the navigation bar */
  title: string;

  /** Determines what kind of navigation has */
  navigationLevel: string;

  /** Determines to what formulary step to open on click. */
  stepToGo: number;
}
