describe("Friend Request Test Cases.....................", function () {
    it("Sending Friend Request Test Case", function (browser) {
      var profilePage = browser.page.freindrequest();
      var data = browser.globals;
      profilePage
        .navigate()
       .validLogin(data.login.email, data.login.password)
        .TestUserProfileModal(data.testUser.name)
        .click("@requestButton")
        .expect.element("@requestButton").text.to.equal("Requested")
      browser.end();
    });

});