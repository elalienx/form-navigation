# Form Navigation

A proposal to simplify form navigation by dynamically hidding steps that aren't needed based on decisions made on previous steps.

# Gotchas

- If I hide a secondary navigation item, I must set the active item to the inmediate parent.
- The button next on secondary items should go to the next primary navigation or their sibling secondary navigation depennding on `hasCoAplicant`
- Block and gray out the items in the navigation bar that come after the last step that is completed. So users cannot navigate to the end and skip steps.
