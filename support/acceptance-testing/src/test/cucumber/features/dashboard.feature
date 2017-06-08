Feature: Dashboard

  Scenario: Navigate the dashboard
    Given I have logged in
    When I click on Proceed to the dashboard
    Then I am on the dashboard page
    And I should see the 'Create a plan' button
    And I should see my plans

