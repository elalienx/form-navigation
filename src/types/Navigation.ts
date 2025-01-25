export default interface Navigation {
  /** ID used to determine to what formulary step to open on click. */
  id: string;

  /** Title to show on the navigation bar */
  title: string;

  /** Determines what kind of navigation has */
  navigationLevel: string;
}
