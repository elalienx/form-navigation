export default interface NavigationInitialState {
  /** ID used to determine to what formulary step to open on click. */
  stepId: string;

  /** Special value which alters the customer journey. */
  hasCoApplicant: boolean;
}
