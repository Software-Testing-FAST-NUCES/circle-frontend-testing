describe("Update Profile Test Cases", function () {
  it("test for opening edit profile modal", function (browser) {
    var data = browser.globals;
    var editProfilePage = browser.page.editProfile();
    editProfilePage
      .navigate()
      .validLogin(data.login.email, data.login.password)
      .openEditProfileModal();
    browser.end();
  });
  it("test for saving profile without changing anything", function (browser) {
    var data = browser.globals;
    var editProfilePage = browser.page.editProfile();
    editProfilePage
      .navigate()
      .validLogin(data.login.email, data.login.password)
      .openEditProfileModal()
      .saveProfileWithouChanging(browser)
      .endCommand();
  });
  it("test for updating first name", function (browser) {
    var data = browser.globals;
    var editProfilePage = browser.page.editProfile();
    editProfilePage
      .navigate()
      .validLogin(data.login.email, data.login.password)
      .openEditProfileModal()
      .updateFirstName(data.login.newFirstName)
      .endCommand();
  });
  it("test for updating second name", function (browser) {
    var data = browser.globals;
    var editProfilePage = browser.page.editProfile();
    editProfilePage
      .navigate()
      .validLogin(data.login.email, data.login.password)
      .openEditProfileModal()
      .updateSecondName(data.login.newSecondName)
      .endCommand();
  });
  it("test for updating email ", function (browser) {
    var data = browser.globals;
    var editProfilePage = browser.page.editProfile();
    editProfilePage
      .navigate()
      .validLogin(data.login.email, data.login.password)
      .openEditProfileModal()
      .updateEmail(data.login.newEmail)
      .logout()
      .validLogin(data.login.newEmail, data.login.password)
      .endCommand();
  });
  it("test for updating bio ", function (browser) {
    var data = browser.globals;
    var editProfilePage = browser.page.editProfile();
    editProfilePage
      .navigate()
      .validLogin(data.login.email, data.login.password)
      .openEditProfileModal()
      .updateBio(data.login.newBio)
      .endCommand();
  });
  it("test for updating date of birth ", function (browser) {
    var data = browser.globals;
    var editProfilePage = browser.page.editProfile();
    editProfilePage
      .navigate()
      .validLogin(data.login.email, data.login.password)
      .openEditProfileModal()
      .editDOB()
      .endCommand();
  });
  it("test for uplaoding user avatar", function (browser) {
    var data = browser.globals;
    var editProfilePage = browser.page.editProfile();
    editProfilePage
      .navigate()
      .validLogin(data.login.email, data.login.password)
      .openEditProfileModal()
      .uploadAvatar(data.login.filePath)
      .endCommand();
  });
  it("test for closing update profile modal", function (browser) {
    var data = browser.globals;
    var editProfilePage = browser.page.editProfile();
    editProfilePage
      .navigate()
      .validLogin(data.login.email, data.login.password)
      .openEditProfileModal()
      .closeEditProfileModal()
      .uploadAvatar(data.login.filePath)
      .endCommand();
  });
});
