describe("Signup", function () {
  // test() and specify() is also available

  it("passes with valid fields data", function (browser) {
    var loginPage = browser.page.login();

    loginPage
      .navigate()
      .waitForElementVisible("body", 6000)
      // .assert.title("Google")
      .click("@loginBtn")
      .waitForElementVisible("@loginModal", 6000)
      .assert.visible("@email")
      .setValue("@email", "haseeb@gmail.com")
      .assert.visible("@password")
      .setValue("@password", "haseeb1122")
      .click("@loginSubmit")
      .pause(6000);
    browser.end();
  });

  it("fails with inValid fields data", function (browser) {
    var loginPage = browser.page.login();

    loginPage
      .navigate()
      .waitForElementVisible("body", 6000)
      // .assert.title("Google")
      .click("@loginBtn")
      .waitForElementVisible("@loginModal", 6000)
      .assert.visible("@email")
      .setValue("@email", "haseeb2@gmail.com")
      .assert.visible("@password")
      .setValue("@password", "haseeb1122")
      .click("@loginSubmit")
      .pause(6000);
    browser.end();
  });
  it("fails with no fields data", function (browser) {
    var loginPage = browser.page.login();

    loginPage
      .navigate()
      .waitForElementVisible("body", 6000)
      // .assert.title("Google")
      .click("@loginBtn")
      .waitForElementVisible("@loginModal", 6000)
      .assert.visible("@email")
      .assert.visible("@password")
      .click("@loginSubmit")
      .pause(6000);
    browser.end();
  });
});
