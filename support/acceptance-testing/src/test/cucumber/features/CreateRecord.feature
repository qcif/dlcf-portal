Feature: CreateRecord

  Scenario: As a user who is not logged in, I observe the layout, via the default workflow
    Given I go to the Home page
    When I click on Proceed to the dashboard
    Then I am on the Login page
    And I should see the default body panels
    And the header should show that I am not logged in

  Scenario: As a user who is not logged in, I observe the layout, by typing in a url
    When I try to go to the CreateRecord page
    Then I am redirected to the Login page
    And I should see the default body panels
    And the header should show that I am not logged in

  Scenario Outline: As a <role> user, who logs in using <credentialsType> credentials, I observe the CreateRecord Page
    Given I am a <role> user
    And I go to the Home page
    And I click on login
    And I log in using <credentialsType> credentials
    When I go to the CreateRecord page
    Then I should see the <role> body panels
    And the header should show that I am logged in
    And I should see the CreateRecord panel
    Examples:
      | role  | credentialsType |
      | admin | local           |

#  Scenario: Observe the create record Introduction panel
#    Given I have logged in
#    And I have entered create a new record
#    When I click on Introduction
#
#  Scenario: Observe the create record Overview panel
#    Given I have logged in
#    And I have entered create a new record
#    When I click on Overview
#    Then I should see the label Project Title
#    And I should the input for Project Title
#    And I should see the label Project Description
#    And I should see the input for Project Description
#    And I should see the label Start Date
#    And I should see the input for Start Date
#    And I should see the label End Date
#    And I should see the input for End Date
#    And I should see the label Field of Research Codes
#    And I should see the input for Field of Research Codes
#    And I should see the plus button for Field of Research Codes
#    But I should not see more than 1 inputs for Field of Research Codes
#    And I should see the Save button
#    And I should see the Cancel button
#
#  Scenario: Observe the create record Contributors panel
#    Given I have logged in
#    And I have entered create a new record
#    When I click on Contributors
#    Then I should see the label Research Name
#    And I should see the input for Research Name
#    And I should see the label Email Address
#    And I should see the input for Email Address
#    And I should see the Project Role
#    And I should see the input for Project Role
#    And I should see the plus button for Contributors
#    But I should not see more than 1 inputs for Contributors
#    And I should see the Save button
#    And I should see the Cancel button
#
#  Scenario: Observe the create record Submit panel
#    Given I have logged in
#    And I have entered create a new record
#    When I click on Submit
#    Then I should see instructions
#    And I should see the Make the plan active button
#    And I should see the Save button
#    And I should see the Cancel button



