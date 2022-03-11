@api
Feature: Pet Store Api Tests

  Scenario Outline: verify pets can be found by status
    When user set request path "/pet/findByStatus" "<status value>"
    And user send request
    Then status code should be 200
    And content-type should be "application/json"
    And status value should be equal to the posted "<status value>"
    And each item in response should have an id and not nul
    Examples:
      | status value |
      | Available    |
      | Pending      |


