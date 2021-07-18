
Feature: List users


  Scenario: List all users
    When I send a valid request
    Then I receive a 'list_users' and status code 200
   

  