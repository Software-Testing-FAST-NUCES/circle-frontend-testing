const page = {
  url: "http://localhost:3000",
  elements: {
    loginBtn: "a[id=login-btn]",
    emailField: "input[id=formBasicEmail]",
    passwordField: "input[id=formBasicPassword]",
    letsGoBtn: "button.connect-login-btn",
    logoutBtn: "button.custom-site-btn3.text-font-family",
    yesLogout: ".react-confirm-alert-button-group > button:first-child",
    editProfileBtn: "a.btn.btn-outline-dark.btn-sm.btn-block.text-font-family",
    updateProfileModal: ".modal-body.modal-body-flex",
    updateBtn: "button.signup-button.mt-3",
    editProfileName1Field: "input[placeholder=Firstname]",
    editProfileName2Field: "input[placeholder=Lastname]",
    editProfileEmailField: "input[placeholder=Email]",
    editProfileDOBField: "input[placeholder=DOB]",
    uploadProfileFile: "input[type=file]",
    editProfileBioField: "form textarea.form-control",
    mainNameTag: "h4.mt-0.mb-4.text-font-family",
    bioArea: "p.font-italic.mb-0.text-font-family ",
    closeModalBtn: ".modal-content button.close.custom-modal-close",
  },
  commands: {
    // because we need basic login for update profile testing
    validLogin: function (email, password) {
      return this.waitForElementVisible("body", 3000)
        .click("@loginBtn")
        .waitForElementVisible("@emailField", 7000)
        .setValue("@emailField", email)
        .setValue("@passwordField", password)
        .click("@letsGoBtn")
        .waitForElementVisible("@logoutBtn", 7000)
        .assert.visible("@logoutBtn", "Login Successful !");
      // .end();
    },
    endCommand: function () {
      return this.end();
    },
    openEditProfileModal: function () {
      return this.click("@editProfileBtn")
        .pause(3000)
        .assert.visible(
          "@updateProfileModal",
          "Update Profile modal has successfuly opened"
        );
    },
    closeEditProfileModal: function () {
      return this.click("@closeModalBtn")
        .waitForElementVisible("@mainNameTag", 10000)
        .assert.visible(
          "@mainNameTag",
          "Update Profile modal has successfuly closed"
        );
    },
    saveProfileWithouChanging: function (browser) {
      return this.getValue(
        "input[placeholder=Firstname]",
        function (result, updatebtn = "@updateBtn", mainText = "@mainNameTag") {
          console.log("THISSS", result.value);
          return browser
            .click(updatebtn)
            .waitForElementVisible("h4.mt-0.mb-4.text-font-family", 7000)
            .assert.textContains("h4.mt-0.mb-4.text-font-family", result.value);
        }
      );
    },
    editDOB: function () {
      return this.waitForElementVisible("@editProfileDOBField", 7000)
        .setValue("@editProfileDOBField", "02-06-2022")
        .assert.valueContains("@editProfileDOBField", "2022-06-02");
    },
    uploadAvatar: function (filePath) {
      return this.setValue("@uploadProfileFile", filePath);
    },
    updateFirstName: function (newFirstName) {
      return this.setValue("@editProfileName1Field", newFirstName)
        .click("@updateBtn")
        .waitForElementVisible("@mainNameTag", 7000)
        .assert.textContains(
          "@mainNameTag",
          newFirstName,
          "First Name Successfully Changed"
        );
    },
    updateSecondName: function (newSecondName) {
      return this.setValue("@editProfileName2Field", newSecondName)
        .click("@updateBtn")
        .waitForElementVisible("@mainNameTag", 7000)
        .assert.textContains(
          "@mainNameTag",
          newSecondName,
          "Second Name Successfully Changed"
        );
    },
    updateEmail: function (newEmail) {
      return this.setValue("@editProfileEmailField", newEmail).click(
        "@updateBtn"
      );
    },
    updateBio: function (newBio) {
      return this.setValue("@editProfileBioField", newBio)
        .click("@updateBtn")
        .waitForElementVisible("@mainNameTag", 7000)
        .assert.textContains("@bioArea", newBio, "Bio Successfully Changed");
    },
    logout: function () {
      return this.waitForElementVisible("@logoutBtn", 10000)
        .click("@logoutBtn")
        .waitForElementVisible("@yesLogout", 7000)
        .click("@yesLogout");
    },
  },
};

module.exports = {
  commands: [page.commands],
  elements: page.elements,
  url: page.url,
};
