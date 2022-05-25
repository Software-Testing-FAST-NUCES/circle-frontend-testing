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

    it("create text only post", function (browser) {
        var postPage = browser.page.post();
    
        postPage
          .navigate()
          .waitForElementVisible("body", 6000)
          //.click("@searchField")
          .assert.visible("@textField")
          .pause(1000)
          .setValue("@textField", "Hello, everyone!")
          .click("@postButton")
          .pause(3000);
        browser.end();
    });

    it("create photo only post", function (browser) {
        var postPage = browser.page.post();
        var filePath = 'C:/Users/aych/Desktop/Certificate.jpeg';
    
        postPage
          .navigate()
          .waitForElementVisible("body", 6000)
          .pause(1000)
          .setValue("@chooseButton", require('path').resolve(filePath))
          .click("@postButton")
          .pause(3000);
        browser.end();
    });

    it("create text and photo post", function (browser) {
      var postPage = browser.page.post();
      var filePath = 'C:/Users/aych/Desktop/Certificate.jpeg';
      // var filePath = '';
  
      postPage
        .navigate()
        .waitForElementVisible("body", 6000)
        .assert.visible("@textField")
        .pause(1000)
        .setValue("@textField", "Hey, everyone! I participated in the SOFTEC 2022 AI Competition...")
        .setValue("@chooseButton", require('path').resolve(filePath))
        .click("@postButton")
        .pause(3000);
      browser.end();
    });

    it("create text and photos post", function (browser) {
      var postPage = browser.page.post();
      var filePath1 = 'C:/Users/aych/Desktop/Certificate.jpeg';
      var filePath2 = 'C:/Users/aych/Desktop/Leaderboard.png';
  
      postPage
        .navigate()
        .waitForElementVisible("body", 6000)
        .assert.visible("@textField")
        .pause(1000)
        .setValue("@textField", "Hello, everyone!")
        .setValue("@chooseButton", [require('path').resolve(filePath1), '\n', require('path').resolve(filePath2)])
        .click("@postButton")
        .pause(3000);
      browser.end();
    });

    it("create post without text and photo", function (browser) {
        var postPage = browser.page.post();
        postPage
          .navigate()
          .waitForElementVisible("body", 6000)
          .pause(1000)
          .click("@postButton")
          .pause(3000);
        browser.end();
      });

});