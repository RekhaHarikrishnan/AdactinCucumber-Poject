$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing the booking functionality of the Adactin Hotel Booking application",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User Checking the login functionality using valid username and password",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-login-functionality-using-valid-username-and-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User must launch the loin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the valid username \"\u003cusername\u003e\" in the username field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user ente the valid password \"\u003cpassword\u003e\" in the password field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirm it and navigate to the search page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-login-functionality-using-valid-username-and-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-login-functionality-using-valid-username-and-password;;1"
    },
    {
      "cells": [
        "rekhamca.h88@gmail.com",
        "vibin"
      ],
      "line": 12,
      "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-login-functionality-using-valid-username-and-password;;2"
    },
    {
      "cells": [
        "rekhamcah88@gmail.com",
        "Vibin@@16"
      ],
      "line": 13,
      "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-login-functionality-using-valid-username-and-password;;3"
    },
    {
      "cells": [
        "Rekha1234",
        "Vibin@@16"
      ],
      "line": 14,
      "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-login-functionality-using-valid-username-and-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "User Checking the login functionality using valid username and password",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-login-functionality-using-valid-username-and-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User must launch the loin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the valid username \"rekhamca.h88@gmail.com\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user ente the valid password \"vibin\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirm it and navigate to the search page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionDemo.user_must_launch_the_loin_page()"
});
formatter.result({
  "duration": 3494174500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rekhamca.h88@gmail.com",
      "offset": 31
    }
  ],
  "location": "StepDefinitionDemo.user_enter_the_valid_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 709803300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vibin",
      "offset": 30
    }
  ],
  "location": "StepDefinitionDemo.user_ente_the_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 309815500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_confirm_it_and_navigate_to_the_search_page()"
});
formatter.result({
  "duration": 737399600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User Checking the login functionality using valid username and password",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-login-functionality-using-valid-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User must launch the loin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the valid username \"rekhamcah88@gmail.com\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user ente the valid password \"Vibin@@16\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirm it and navigate to the search page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionDemo.user_must_launch_the_loin_page()"
});
formatter.result({
  "duration": 421767200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rekhamcah88@gmail.com",
      "offset": 31
    }
  ],
  "location": "StepDefinitionDemo.user_enter_the_valid_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 404169200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vibin@@16",
      "offset": 30
    }
  ],
  "location": "StepDefinitionDemo.user_ente_the_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 250043700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_confirm_it_and_navigate_to_the_search_page()"
});
formatter.result({
  "duration": 545343000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User Checking the login functionality using valid username and password",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-login-functionality-using-valid-username-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User must launch the loin page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the valid username \"Rekha1234\" in the username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user ente the valid password \"Vibin@@16\" in the password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User confirm it and navigate to the search page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionDemo.user_must_launch_the_loin_page()"
});
formatter.result({
  "duration": 406401200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rekha1234",
      "offset": 31
    }
  ],
  "location": "StepDefinitionDemo.user_enter_the_valid_username_in_the_username_field(String)"
});
formatter.result({
  "duration": 315484600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vibin@@16",
      "offset": 30
    }
  ],
  "location": "StepDefinitionDemo.user_ente_the_valid_password_in_the_password_field(String)"
});
formatter.result({
  "duration": 228862900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_confirm_it_and_navigate_to_the_search_page()"
});
formatter.result({
  "duration": 1162353000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User Checking the Booking Functionality for Searching Hotel",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-booking-functionality-for-searching-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User must click the Login Button",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User Must Select the location by using Single Drop Down Method",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User Must Select the Hotel by using Single Drop Down Method",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User Must Select the RoomType by using Single Drop Down Method",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User Must Select Number Of Rooms by using Single Drop Down Method",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Must Select the Room for Adults by using Single Drop Down Method",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User Must Select the Room for Children by using Single Drop Down Method",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User Confirm it by Clicking the Search button and Navigated to the Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionDemo.user_must_click_the_Login_Button()"
});
formatter.result({
  "duration": 218700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_Select_the_location_by_using_Single_Drop_Down_Method()"
});
formatter.result({
  "duration": 657098200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_Select_the_Hotel_by_using_Single_Drop_Down_Method()"
});
formatter.result({
  "duration": 409947600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_Select_the_RoomType_by_using_Single_Drop_Down_Method()"
});
formatter.result({
  "duration": 490611000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_Select_Number_Of_Rooms_by_using_Single_Drop_Down_Method()"
});
formatter.result({
  "duration": 348952900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_Select_the_Room_for_Adults_by_using_Single_Drop_Down_Method()"
});
formatter.result({
  "duration": 370724600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_Select_the_Room_for_Children_by_using_Single_Drop_Down_Method()"
});
formatter.result({
  "duration": 391471900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Confirm_it_by_Clicking_the_Search_button_and_Navigated_to_the_Select_Hotel_Page()"
});
formatter.result({
  "duration": 846396500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User Checking the booking Functionality fo Selecting the Hotel",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-booking-functionality-fo-selecting-the-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User must click the serach button",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User must click the radio Button to confirm the Hoteol",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User must click the continue button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User Confirm it and Navigated to the Book Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionDemo.user_must_click_the_serach_button()"
});
formatter.result({
  "duration": 182100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_must_click_the_radio_Button_to_confirm_the_Hoteol()"
});
formatter.result({
  "duration": 247596500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_must_click_the_continue_button()"
});
formatter.result({
  "duration": 814362400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Confirm_it_and_Navigated_to_the_Book_Hotel_Page()"
});
formatter.result({
  "duration": 909900,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "User checking the Booking Functionality to Book a Hotel",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-booking-functionality-to-book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "User should click the continue button",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User enter First name in the First Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User enter Last Name in the Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User Enter Address in the Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User Enter The credit Card Number by using 16digits in the Credit Card Field",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User Must select the Credit card type",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User Must select Expiry Date by using single drop down method",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User Must select Expiry Year by using single drop down method",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User must enter the CVV Number in the CVV Number field",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "User Confirm it by clicking BookNow button and Navigated to Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionDemo.user_should_click_the_continue_button()"
});
formatter.result({
  "duration": 165800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_enter_First_name_in_the_First_Name_Field()"
});
formatter.result({
  "duration": 336657800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_enter_Last_Name_in_the_Last_Name_Field()"
});
formatter.result({
  "duration": 231895000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Enter_Address_in_the_Address_Field()"
});
formatter.result({
  "duration": 262613300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 43
    }
  ],
  "location": "StepDefinitionDemo.user_Enter_The_credit_Card_Number_by_using_digits_in_the_Credit_Card_Field(int)"
});
formatter.result({
  "duration": 256138400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_select_the_Credit_card_type()"
});
formatter.result({
  "duration": 280428200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_select_Expiry_Date_by_using_single_drop_down_method()"
});
formatter.result({
  "duration": 493581700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_select_Expiry_Year_by_using_single_drop_down_method()"
});
formatter.result({
  "duration": 381825500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_must_enter_the_CVV_Number_in_the_CVV_Number_field()"
});
formatter.result({
  "duration": 330292000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Confirm_it_by_clicking_BookNow_button_and_Navigated_to_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 249320200,
  "status": "passed"
});
});