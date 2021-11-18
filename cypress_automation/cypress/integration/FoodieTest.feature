Feature: Group Ordering As Guest
  Scenario: Login as a guest
    Given I Navigate to "https://app-staging.food.ee/team-order/8lW9umVBhBBcTGor"
    When Presented with the signing modal
    Then I am able to select guest or sign in
    And I am able to sign in as a guest
  Scenario: Providing user details
    Given I Navigate to "https://app-staging.food.ee/team-order/8lW9umVBhBBcTGor"
    When I sign select sign in as a guest
    Then I am presented with a details form that validates my inputs
  Scenario: Adding items
    Given I've signed in a guest
    When I select an item with no options
    Then That item is added to the cart
  Scenario: Budget Protection
    Given I've signed in a guest
    When I select multiple items with no options
    Then I am unable to exceed the budget
  Scenario: Selecting Options
    Given I've signed in a guest
    When I select an item with options
    Then I am able to select some modifications to the menu item
  Scenario: Checking out
    Given I've signed in a guest
    When I've finished ordering and checkout
    Then I am prompted for cutlery
    And I'm able to accept and finish the checkout process