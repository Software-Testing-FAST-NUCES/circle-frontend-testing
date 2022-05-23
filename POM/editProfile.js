const page = {
  url: "http://localhost:3000",
  elements: {
    loginBtn: "a[id=login-btn]",
    emailField: "input[id=formBasicEmail]",
    passwordField: "input[id=formBasicPassword]",
    letsGoBtn: "button.connect-login-btn",
    logoutBtn: "button.custom-site-btn3.text-font-family",
    editProfileBtn: "a.btn.btn-outline-dark.btn-sm.btn-block.text-font-family",
  },
  commands: {
    // because we need basic login for update profile testing
    validLogin: function (email, password) {
      return this.waitForElementVisible("body", 3000)
        .click("@loginBtn")
        .pause(1000)
        .setValue("@emailField", email)
        .setValue("@passwordField", password)
        .click("@letsGoBtn")
        .pause(3000)
        .assert.visible("@logoutBtn", "Login Successful !");
      // .end();
    },
    openEditProfileModal: function () {
      return this.click("@editProfileBtn").pause(1000).end();
    },
  },
};

module.exports = {
  commands: [page.commands],
  elements: page.elements,
  url: page.url,
};
