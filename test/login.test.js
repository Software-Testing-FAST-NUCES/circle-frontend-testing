describe("Ecosia", function () {
  // test() and specify() is also available

  it("demo test", function (browser) {
    var loginPage = browser.page.login();

    loginPage
      .navigate()
      .waitForElementVisible("body", 3000)
      // .assert.title("Google")
      // .assert.visible("@searchBar")
      // .setValue("@searchBar", "nightwatch")
      .click("@loginBtn")
      .waitForElementVisible("@loginModal", 3000)
      .pause(3000);

    browser.end();
  });
});
