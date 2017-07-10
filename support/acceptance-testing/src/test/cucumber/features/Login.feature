Feature: Login

  Scenario: As any user, I select the login dialog
    Given I go to the home page
    When I click on login
    Then I am on the login page
    And I should see the login dialog

#   Once set, any other aaf login will be stuck with the same user/role
  Scenario Outline: As a <role> user, I login using <credentialsType>
    Given I am a <role> user
    And I go to the login page
    When I log in using <credentialsType> credentials
    Then I am on the home page
    And I am logged in
    Examples:
      | role  | credentialsType |
      | admin | local           |
      | guest | aaf             |
