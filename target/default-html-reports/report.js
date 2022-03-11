$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/petstore.feature");
formatter.feature({
  "name": "Pet Store Api Tests",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.scenarioOutline({
  "name": "verify pets can be found by status",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user set request path \"/pet/findByStatus\" \"\u003cstatus value\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user send request",
  "keyword": "And "
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "name": "content-type should be \"application/json\"",
  "keyword": "And "
});
formatter.step({
  "name": "status value should be equal to the posted \"\u003cstatus value\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "each item in response should have an id and not nul",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "status value"
      ]
    },
    {
      "cells": [
        "Available"
      ]
    },
    {
      "cells": [
        "Pending"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify pets can be found by status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "user set request path \"/pet/findByStatus\" \"Available\"",
  "keyword": "When "
});
formatter.match({
  "location": "Petstore_stepdefs.user_set_request_path(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send request",
  "keyword": "And "
});
formatter.match({
  "location": "Petstore_stepdefs.user_send_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Petstore_stepdefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "content-type should be \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "Petstore_stepdefs.content_type_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status value should be equal to the posted \"Available\"",
  "keyword": "And "
});
formatter.match({
  "location": "Petstore_stepdefs.status_value_should_be_equal_to_the_posted(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each item in response should have an id and not nul",
  "keyword": "And "
});
formatter.match({
  "location": "Petstore_stepdefs.each_item_in_response_should_have_an_id_and_not_nul()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify pets can be found by status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@api"
    }
  ]
});
formatter.step({
  "name": "user set request path \"/pet/findByStatus\" \"Pending\"",
  "keyword": "When "
});
formatter.match({
  "location": "Petstore_stepdefs.user_set_request_path(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user send request",
  "keyword": "And "
});
formatter.match({
  "location": "Petstore_stepdefs.user_send_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "Petstore_stepdefs.status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "content-type should be \"application/json\"",
  "keyword": "And "
});
formatter.match({
  "location": "Petstore_stepdefs.content_type_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "status value should be equal to the posted \"Pending\"",
  "keyword": "And "
});
formatter.match({
  "location": "Petstore_stepdefs.status_value_should_be_equal_to_the_posted(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "each item in response should have an id and not nul",
  "keyword": "And "
});
formatter.match({
  "location": "Petstore_stepdefs.each_item_in_response_should_have_an_id_and_not_nul()"
});
formatter.result({
  "status": "passed"
});
});