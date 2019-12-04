$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Home.feature");
formatter.feature({
  "line": 1,
  "name": "99acres.com",
  "description": "",
  "id": "99acres.com",
  "keyword": "Feature"
});
formatter.before({
  "duration": 35374749700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Toggle button validation",
  "description": "",
  "id": "99acres.com;toggle-button-validation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@toggle"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User landed on acrers home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on toggle slider button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User can able to see products moving",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinationClass.user_landed_on_acrers_home_page()"
});
formatter.result({
  "duration": 464781600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationClass.user_click_on_toggle_slider_button()"
});
formatter.result({
  "duration": 819057900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationClass.user_can_able_to_see_products_moving()"
});
formatter.result({
  "duration": 113300,
  "status": "passed"
});
formatter.after({
  "duration": 4847603800,
  "status": "passed"
});
formatter.before({
  "duration": 45862201900,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Search for the flots near your location",
  "description": "",
  "id": "99acres.com;search-for-the-flots-near-your-location",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User landed on acrers home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User type location as \"hyderabad\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User clicks on serach",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User can see all floats under hyderabad",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinationClass.user_landed_on_acrers_home_page()"
});
formatter.result({
  "duration": 1159400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hyderabad",
      "offset": 23
    }
  ],
  "location": "StepDefinationClass.user_type_location_as(String)"
});
formatter.result({
  "duration": 1154918300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationClass.user_clicks_on_serach()"
});
formatter.result({
  "duration": 450782100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationClass.user_can_see_all_floats_under_hyderabad()"
});
formatter.result({
  "duration": 642851500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027newNdgeCochMrk hide\u0027]//img\"}\n  (Session info: chrome\u003d78.0.3904.87)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027SEKHAR-PC\u0027, ip: \u0027172.20.10.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.87, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\Sekhar\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49751}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b0ee4a5034295b9ddd989e7ebed2ef85\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027newNdgeCochMrk hide\u0027]//img}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat pages.HomePage.getNoOfPlots(HomePage.java:86)\r\n\tat stepDefinationFiles.StepDefinationClass.user_can_see_all_floats_under_hyderabad(StepDefinationClass.java:79)\r\n\tat ✽.Then User can see all floats under hyderabad(Home.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1102946800,
  "status": "passed"
});
formatter.before({
  "duration": 37441382800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "View detail of each flot for the floats near your location",
  "description": "",
  "id": "99acres.com;view-detail-of-each-flot-for-the-floats-near-your-location",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@viewProduct"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User landed on acrers home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "User type location as \"hyderabad\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User clicks on serach",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User can see all floats under hyderabad",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User clicks on particular flot",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "User navigates to details page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinationClass.user_landed_on_acrers_home_page()"
});
formatter.result({
  "duration": 2700400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hyderabad",
      "offset": 23
    }
  ],
  "location": "StepDefinationClass.user_type_location_as(String)"
});
formatter.result({
  "duration": 864941900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationClass.user_clicks_on_serach()"
});
formatter.result({
  "duration": 381809000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinationClass.user_can_see_all_floats_under_hyderabad()"
});
formatter.result({
  "duration": 594977400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027newNdgeCochMrk hide\u0027]//img\"}\n  (Session info: chrome\u003d78.0.3904.87)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027SEKHAR-PC\u0027, ip: \u0027172.20.10.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.87, chrome: {chromedriverVersion: 78.0.3904.70 (edb9c9f3de024..., userDataDir: C:\\Users\\Sekhar\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49829}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6c10b072c09fbac18be05cabeac132d1\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027newNdgeCochMrk hide\u0027]//img}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat pages.HomePage.getNoOfPlots(HomePage.java:86)\r\n\tat stepDefinationFiles.StepDefinationClass.user_can_see_all_floats_under_hyderabad(StepDefinationClass.java:79)\r\n\tat ✽.Then User can see all floats under hyderabad(Home.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinationClass.user_clicks_on_particular_flot()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinationClass.user_navigates_to_details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4763178800,
  "status": "passed"
});
});