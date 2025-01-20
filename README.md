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

# To do

- Add badge for bullet states.
- Allow `NavigationProvider` to start with any data configuration to show `<Navigator/>` with or withouth secondary items.
- Block items in the navigation bar that come after the lastest completed step. So users cannot skip incomplete steps.
- Make "co-applicant" start as un-selected on step #3. So users are forced to choose betweem YES/NO.
- Add Playwright to deeply test the App and make sure it goes to the correct steps.
