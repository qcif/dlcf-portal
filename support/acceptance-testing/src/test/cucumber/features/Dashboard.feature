Feature: Dashboard

  Scenario Outline: As a <role> user, I login using <credentialsType> credentials, and I navigate the dashboard
    Given I am a <role> user
    And I login using <credentialsType> credentials
    And I am on the home page
    When I click on Proceed to the dashboard
    Then I am on the dashboard page
    And I should see the 'Create a plan' button
    And I should see my plans
    Examples:
      | role  | credentialsType |
      | admin | local           |
      | guest | aaf             |

  Scenario Outline: As a <role> user, I login using <credentialsType> credentials, and I create a dashboard plan
    Given I am a <role> user
    And I login using <credentialsType> credentials
    And I am on the home page
    When I go to the dashboard page
    And I click on Create a plan
    Then I am on the record edit page
    And I should see the Welcome to the Data Management Plan form
    Examples:
      | role  | credentialsType |
      | admin | local           |
      | guest | aaf             |

