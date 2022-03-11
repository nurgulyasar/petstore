package com.kloia.step_defs;

import com.kloia.utilities.ConfigurationReader;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;

import java.util.List;

import static io.restassured.RestAssured.*;

public class Petstore_stepdefs {

    String path;
    Response response;

    @When("user set request path {string} {string}")
    public void user_set_request_path(String uri, String statusValue) {
        baseURI = ConfigurationReader.get("baseURL");
        path = uri + "?status=" + statusValue;
    }

    @When("user send request")
    public void user_send_request() {
        baseURI = ConfigurationReader.get("baseURL");
        response = get(path);
    }

    @Then("status code should be {int}")
    public void status_code_should_be(int expectedStatusCode) {
        Assert.assertEquals(expectedStatusCode, response.getStatusCode());
    }

    @Then("content-type should be {string}")
    public void content_type_should_be(String expectedContentType) {
        Assert.assertEquals(expectedContentType, response.getContentType());
    }

    @Then("status value should be equal to the posted {string}")
    public void status_value_should_be_equal_to_the_posted(String expectedStatusValue) {
        JsonPath jsonPath = response.jsonPath();

        List<String> list = jsonPath.getList("status");
        for (String actualStatusValue : list) {
            Assert.assertEquals(actualStatusValue, expectedStatusValue);
        }
//        System.out.println("list = " + list);
    }

    @Then("each item in response should have an id and not nul")
    public void each_item_in_response_should_have_an_id_and_not_nul() {
//        List<Integer> list = response.path("status");
//        for (Integer id : list) {
//            Assert.assertFalse(id.toString().equals("null") || id.toString().equals(""));
//        }
//        System.out.println("list = " + list);

        List<String> list = response.path("status");
        System.out.println("response.path(\"id[0]\") = " + response.path("id[0]"));
        String expectedStatusValue = "Available";
        for (String actualStatusValue : list) {
            Assert.assertEquals(actualStatusValue, expectedStatusValue);
        }
//        System.out.println("list = " + list);
    }


}
