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
  "keyword": "Scenario Outline"
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
        "rekhamca.h88@gmail.com",
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
  "keyword": "Scenario Outline"
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
  "duration": 455487800,
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument\n  (Session info: chrome\u003d91.0.4472.164)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RANJITHREKHA-PC\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.164, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\RANJIT~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58307}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6178c14dfd5806f5b79a7502389909cb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.demobaseclass.DemoBaseClass.openUrl(DemoBaseClass.java:49)\r\n\tat com.adactin.stepdefenition.StepDefinitionDemo.user_must_launch_the_loin_page(StepDefinitionDemo.java:29)\r\n\tat ✽.Given User must launch the loin page(Adactin.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionDemo.user_confirm_it_and_navigate_to_the_search_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "User Checking the login functionality using valid username and password",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-login-functionality-using-valid-username-and-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "duration": 30594700,
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument\n  (Session info: chrome\u003d91.0.4472.164)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RANJITHREKHA-PC\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.164, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\RANJIT~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58307}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6178c14dfd5806f5b79a7502389909cb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.demobaseclass.DemoBaseClass.openUrl(DemoBaseClass.java:49)\r\n\tat com.adactin.stepdefenition.StepDefinitionDemo.user_must_launch_the_loin_page(StepDefinitionDemo.java:29)\r\n\tat ✽.Given User must launch the loin page(Adactin.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionDemo.user_confirm_it_and_navigate_to_the_search_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "User Checking the login functionality using valid username and password",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-login-functionality-using-valid-username-and-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "duration": 28044500,
  "error_message": "org.openqa.selenium.InvalidArgumentException: invalid argument\n  (Session info: chrome\u003d91.0.4472.164)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RANJITHREKHA-PC\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.164, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\RANJIT~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58307}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6178c14dfd5806f5b79a7502389909cb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.demobaseclass.DemoBaseClass.openUrl(DemoBaseClass.java:49)\r\n\tat com.adactin.stepdefenition.StepDefinitionDemo.user_must_launch_the_loin_page(StepDefinitionDemo.java:29)\r\n\tat ✽.Given User must launch the loin page(Adactin.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionDemo.user_confirm_it_and_navigate_to_the_search_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "User Checking the Booking Functionality for Searching Hotel",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-booking-functionality-for-searching-hotel",
  "type": "scenario",
  "keyword": "Scenario"
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
  "duration": 2206500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_Select_the_location_by_using_Single_Drop_Down_Method()"
});
formatter.result({
  "duration": 62503300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027location\u0027]\"}\n  (Session info: chrome\u003d91.0.4472.164)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RANJITHREKHA-PC\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.164, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\RANJIT~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58307}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6178c14dfd5806f5b79a7502389909cb\n*** Element info: {Using\u003dname, value\u003dlocation}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat com.demobaseclass.DemoBaseClass.dropdownUsingValue(DemoBaseClass.java:329)\r\n\tat com.adactin.stepdefenition.StepDefinitionDemo.user_Must_Select_the_location_by_using_Single_Drop_Down_Method(StepDefinitionDemo.java:72)\r\n\tat ✽.When User Must Select the location by using Single Drop Down Method(Adactin.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_Select_the_Hotel_by_using_Single_Drop_Down_Method()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_Select_the_RoomType_by_using_Single_Drop_Down_Method()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_Select_Number_Of_Rooms_by_using_Single_Drop_Down_Method()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_Select_the_Room_for_Adults_by_using_Single_Drop_Down_Method()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_Select_the_Room_for_Children_by_using_Single_Drop_Down_Method()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Confirm_it_by_Clicking_the_Search_button_and_Navigated_to_the_Select_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "User Checking the booking Functionality fo Selecting the Hotel",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-booking-functionality-fo-selecting-the-hotel",
  "type": "scenario",
  "keyword": "Scenario"
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
  "duration": 2301100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_must_click_the_radio_Button_to_confirm_the_Hoteol()"
});
formatter.result({
  "duration": 37597800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027radiobutton_0\u0027]\"}\n  (Session info: chrome\u003d91.0.4472.164)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RANJITHREKHA-PC\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.164, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\RANJIT~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58307}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6178c14dfd5806f5b79a7502389909cb\n*** Element info: {Using\u003dname, value\u003dradiobutton_0}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.demobaseclass.DemoBaseClass.clickCheckBox(DemoBaseClass.java:171)\r\n\tat com.adactin.stepdefenition.StepDefinitionDemo.user_must_click_the_radio_Button_to_confirm_the_Hoteol(StepDefinitionDemo.java:120)\r\n\tat ✽.When User must click the radio Button to confirm the Hoteol(Adactin.feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_must_click_the_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Confirm_it_and_Navigated_to_the_Book_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 37,
  "name": "User checking the Booking Functionality to Book a Hotel",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-booking-functionality-to-book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario"
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
  "duration": 2299500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_enter_First_name_in_the_First_Name_Field()"
});
formatter.result({
  "duration": 50931500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//input[@class\u003d\u0027reg_input\u0027])[1]\"}\n  (Session info: chrome\u003d91.0.4472.164)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RANJITHREKHA-PC\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.164, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\RANJIT~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58307}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6178c14dfd5806f5b79a7502389909cb\n*** Element info: {Using\u003dxpath, value\u003d(//input[@class\u003d\u0027reg_input\u0027])[1]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat com.demobaseclass.DemoBaseClass.sendTheValues(DemoBaseClass.java:132)\r\n\tat com.adactin.stepdefenition.StepDefinitionDemo.user_enter_First_name_in_the_First_Name_Field(StepDefinitionDemo.java:144)\r\n\tat ✽.When User enter First name in the First Name Field(Adactin.feature:41)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_enter_Last_Name_in_the_Last_Name_Field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Enter_Address_in_the_Address_Field()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_select_the_Credit_card_type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_select_Expiry_Date_by_using_single_drop_down_method()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Must_select_Expiry_Year_by_using_single_drop_down_method()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionDemo.user_must_enter_the_CVV_Number_in_the_CVV_Number_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Confirm_it_by_clicking_BookNow_button_and_Navigated_to_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 53,
  "name": "User Checking the Fuctionality to log out the Page",
  "description": "",
  "id": "testing-the-booking-functionality-of-the-adactin-hotel-booking-application;user-checking-the-fuctionality-to-log-out-the-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 55,
  "name": "User just click the BookNow button",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "User must verify the Booking Confirmation page",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "User must click the Logout button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user Confirm it and navigated to the Logout Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionDemo.user_just_click_the_BookNow_button()"
});
formatter.result({
  "duration": 2168800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_must_verify_the_Booking_Confirmation_page()"
});
formatter.result({
  "duration": 33500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_must_click_the_Logout_button()"
});
formatter.result({
  "duration": 10103301900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@value\u003d\u0027Logout\u0027]\"}\n  (Session info: chrome\u003d91.0.4472.164)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RANJITHREKHA-PC\u0027, ip: \u0027192.168.0.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 91.0.4472.164, chrome: {chromedriverVersion: 91.0.4472.19 (1bf021f248676..., userDataDir: C:\\Users\\RANJIT~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58307}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6178c14dfd5806f5b79a7502389909cb\n*** Element info: {Using\u003dxpath, value\u003d//input[@value\u003d\u0027Logout\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat com.demobaseclass.DemoBaseClass.clickTheButton(DemoBaseClass.java:126)\r\n\tat com.adactin.stepdefenition.StepDefinitionDemo.user_must_click_the_Logout_button(StepDefinitionDemo.java:209)\r\n\tat ✽.And User must click the Logout button(Adactin.feature:57)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitionDemo.user_Confirm_it_and_navigated_to_the_Logout_Page()"
});
formatter.result({
  "status": "skipped"
});
});