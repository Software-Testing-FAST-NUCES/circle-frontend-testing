const page = {
    url: "http://localhost:3000",
    elements: {
      requestButton: "btn btn-outline-primary btn-sm btn-block text-font-family",
      loginBtn: "a[id=login-btn]",
      emailField: "input[id=formBasicEmail]",
      passwordField: "input[id=formBasicPassword]",
      letsGoBtn: "button.connect-login-btn",
      logoutBtn: "button.custom-site-btn3.text-font-family",
      search:"form-control form-control-lg",
      searchURL: "http://localhost:3000/search",
      UtestserProfile: "cardTextStyle card-title h5",
      profilePic: "rounded mb-2 img-thumbnail main-profile-pic",
    },
    commands: {
      // because we need basic login for update profile testing
      validLogin: function (email, password) {
        return this.waitForElementVisible("body", 3000)
          .click("@loginBtn")
          .waitForElementVisible("@emailField", 4000)
          .setValue("@emailField", email)
          .setValue("@passwordField", password)
          .click("@letsGoBtn")
          .waitForElementVisible("@logoutBtn", 4000)
          .assert.visible("@logoutBtn", "Login Successful !");
      },
      TestUserProfileModal: function (name){
        return this.waitForElementVisible("body", 3000)
        .navigate("@searchURL")
        .setValue("@search",name)
        .click("@search")
        .click("@search")
        .click("@testUserProfile");
      },

      hello: function ()
      {
        return 0
      },
    },
};

module.exports = {
    commands: [page.commands],
    elements: page.elements,
    url: page.url,
    
  };
  