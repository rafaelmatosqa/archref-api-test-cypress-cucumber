
Feature: Create Pet

  Scenario: Create a new pet
    When I send a POST request with valid body
    Then I receive a valid response data 'create_pet' and status code 200 
    And The name must be equal "Pitoco"
  