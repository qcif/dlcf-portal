Feature: Login

  Scenario: Select the login dialog
    Given I go to the home page
    When I click on login
    Then I am on the login page
    And I should see the login dialog


  Scenario: Successful login as a user
    Given I go to the login page
    When I enter test username and test password
    Then I am on the home page
    And I am logged in
