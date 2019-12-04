Feature: 99acres.com
@toggle
Scenario: Toggle button validation
	Given User landed on acrers home page
	When  User click on toggle slider button
	Then  User can able to see products moving

@search	
Scenario: Search for the flots near your location
	Given User landed on acrers home page
	When  User type location as "hyderabad"
	And   User clicks on serach
	Then  User can see all floats under hyderabad
	
@viewProduct	
Scenario: View detail of each flot for the floats near your location
	Given User landed on acrers home page
	When  User type location as "hyderabad"
	And   User clicks on serach
	Then  User can see all floats under hyderabad
	When  User clicks on particular flot
	Then  User navigates to details page
	

