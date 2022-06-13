describe("Reset Password Test", function () {
    // test() and specify() is also available

    beforeEach(function(browser){
        var loginPage = browser.page.login();
    
        loginPage
            .navigate()
            .waitForElementVisible("body", 6000)
            .click("@loginBtn")
            .waitForElementVisible("@loginModal", 6000)
            .pause(2000)
    });

    it("enter valid email address", function (browser) {
        var resetPassPage = browser.page.resetPass();
    
        resetPassPage
          .click("@forgetPassButton")
          .assert.visible("@inpField")
          .pause(1000)
          .setValue("@inpField", "haseeb@gmail.com")
          .pause(1000)
          .click("@nextButton")
          .pause(3000);
        browser.end();
    });

    it("enter invalid email address", function (browser) {
      var resetPassPage = browser.page.resetPass();
  
      resetPassPage
        .click("@forgetPassButton")
        .assert.visible("@inpField")
        .pause(1000)
        .setValue("@inpField", "ahsank@gmail.com")
        .pause(1000)
        .click("@nextButton")
        .pause(3000);
      browser.end();
    });

    it("enter nothing and click next", function (browser) {
      var resetPassPage = browser.page.resetPass();
  
      resetPassPage
        .click("@forgetPassButton")
        .assert.visible("@inpField")
        .pause(1000)
        .click("@nextButton")
        .pause(3000);
      browser.end();
    });

    it("enter valid email and invalid otp", function (browser) {
      var resetPassPage = browser.page.resetPass();
  
      resetPassPage
        .click("@forgetPassButton")
        .assert.visible("@inpField")
        .pause(1000)
        .setValue("@inpField", "ctrlaych@gmail.com")
        .pause(1000)
        .click("@nextButton")
        .assert.visible("@inpField")
        .pause(1000)
        .setValue("@inpField", "000000")
        .pause(1000)
        .click("@nextButton")
        .pause(3000);
      browser.end();
    });

    it("enter valid email and valid otp", function (browser) {
      var resetPassPage = browser.page.resetPass();
  
      resetPassPage
        .click("@forgetPassButton")
        .assert.visible("@inpField")
        .pause(1000)
        .setValue("@inpField", "ctrlaych@gmail.com")
        .pause(1000)
        .click("@nextButton")
        .assert.visible("@inpField")
        .pause(5000);
      browser.end();
    });

});