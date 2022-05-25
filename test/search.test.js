describe("Search Test", function () {
  // test() and specify() is also available

  beforeEach(function(browser){
      var loginPage = browser.page.login();
  
      loginPage
          .navigate()
          .waitForElementVisible("body", 6000)
          .click("@loginBtn")
          .waitForElementVisible("@loginModal", 6000)
          .assert.visible("@email")
          .setValue("@email", "haseeb@gmail.com")
          .assert.visible("@password")
          .setValue("@password", "haseeb1122")
          .click("@loginSubmit")
          .pause(5000);
  });

  it("entered user exists", function (browser) {
      var searchPage = browser.page.search();
  
      searchPage
        .navigate()
        .waitForElementVisible("body", 6000)
        //.click("@searchField")
        .assert.visible("@searchField")
        .setValue("@searchField", "Saqlain")
        .sendKeys("@searchField", browser.Keys.ENTER)
        .pause(500)
        .sendKeys("@searchField", browser.Keys.ENTER)
        .pause(3000);
      browser.end();
  });

  it("entered user does not exist", function (browser) {
      var searchPage = browser.page.search();
  
      searchPage
        .navigate()
        .waitForElementVisible("body", 6000)
        .assert.visible("@searchField")
        .setValue("@searchField", "Ahsan")
        .sendKeys("@searchField", browser.Keys.ENTER)
        .pause(500)
        .sendKeys("@searchField", browser.Keys.ENTER)
        .pause(3000);
      browser.end();
  });

  it("all users are displayed", function (browser) {
      var searchPage = browser.page.search();
  
      searchPage
        .navigate()
        .waitForElementVisible("body", 6000)
        //.setValue("@searchField", "")
        //.click("@searchField")
        .assert.visible("@searchField")
        .sendKeys("@searchField", browser.Keys.ENTER)
        .pause(3000);
      browser.end();
  });

  it("moves to user's profile", function (browser) {
      var searchPage = browser.page.search();
  
      searchPage
        .navigate()
        .waitForElementVisible("body", 6000)
        .assert.visible("@searchField")
        .setValue("@searchField", "Saqlain")
        .sendKeys("@searchField", browser.Keys.ENTER)
        .pause(500)
        .sendKeys("@searchField", browser.Keys.ENTER)
        .click("@userCard")
        .pause(3000);
      browser.end();
  });

  it("moves to own profile", function (browser) {
      var searchPage = browser.page.search();
  
      searchPage
        .navigate()
        .waitForElementVisible("body", 6000)
        .assert.visible("@searchField")
        .setValue("@searchField", "Haseeb")
        .sendKeys("@searchField", browser.Keys.ENTER)
        .pause(500)
        .sendKeys("@searchField", browser.Keys.ENTER)
        .click("@userCard")
        .pause(3000);
      browser.end();
  });
});