describe("Signup", function () {
  it("passes with valid fields data", function (browser) {
    var SignUpPage = browser.page.signup();

    SignUpPage.navigate()
      .waitForElementVisible("body", 6000)
      .click("@signUpBtn")
      .waitForElementVisible("@signUpModal", 6000)
      .assert.visible("@email")
      .setValue("@email", "test1@gmail.com")
      .assert.visible("@password")
      .setValue("@password", "test1122")
      .assert.visible("@firstname")
      .setValue("@firstname", "Test")
      .assert.visible("@lastname")
      .setValue("@lastname", "1")
      .assert.visible("@dob")
      .setValue("@dob", "25-05-2020")
      .click("@signUpSubmit")
      .pause(6000);
    browser.end();
  });

  it("fails with invalid fields data", function (browser) {
    var SignUpPage = browser.page.signup();

    SignUpPage.navigate()
      .waitForElementVisible("body", 6000)
      .click("@signUpBtn")
      .waitForElementVisible("@signUpModal", 6000)
      .assert.visible("@email")
      .setValue("@email", "")
      .assert.visible("@password")
      .setValue("@password", "test1122")
      .assert.visible("@firstname")
      .setValue("@firstname", "Test")
      .assert.visible("@lastname")
      .setValue("@lastname", "1")
      .assert.visible("@dob")
      .setValue("@dob", "25-05-2020")
      .click("@signUpSubmit")
      .pause(6000);
    browser.end();
  });
});
