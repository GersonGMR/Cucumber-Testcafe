Feature: Login Feature

  As a client I can log in into the page
  Scenario: Successful sign in
    Given I open the login page
    When I enter the username "tomsmith"
    And I enter the password "SuperSecretPassword!"
    And I click on the log in button
    Then A successful message is displayed