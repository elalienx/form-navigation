# Form Navigation

A proposal to simplify form navigation by dynamically hidding steps that aren't needed based on decisions made on previous steps.

# UI:

In the current Lendo navigation we combine navigation selection with completion status, which creates too many possible combinations.
This proposal splits the proccess in 2 UI components to make it easier for customer to understand and easier to maintain by developers.

Navigation item states to tackle what item is currenctly selected:

- active: for the item currently active.
- inactive: for items that are not selected (default).

Navigation bullet states to tackle what steps have been completed:

- completed: for formulary steps that have been validated.
- uncompleted: for formulary steps that have not been validated.

# Polish

- Add Lendo's blue button.
- Add icons.
- Add badge for bullet states.

# Gotchas

- Allow `NavigationProvider` to start with any data configuration to show `<Navigator/>` with or withouth secondary items.
- If I hide a secondary navigation item, I must set the active item to the inmediate parent.
- The button next on secondary items should go to the next primary navigation or their sibling secondary navigation depennding on `hasCoAplicant`
- Block and gray out the items in the navigation bar that come after the last step that is completed. So users cannot navigate to the end and skip steps.
