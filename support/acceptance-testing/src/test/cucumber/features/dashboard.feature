Feature: Dashboard

  Scenario: Navigate the dashboard
    Given I have logged in
    When I click on Proceed to the dashboard
    Then I am on the dashboard page
    And I should see the 'Create a plan' button
    And I should see my plans

  Scenario: Create a dashboard plan
    Given I have logged in
    And I go to the dashboard page
    And I click on Create a plan
    Then I am on the record edit page
    And I should see the Welcome to the Data Management Plan form

