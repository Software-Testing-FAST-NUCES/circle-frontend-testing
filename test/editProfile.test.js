describe("Update Profile Test Cases", function () {
  it("test for opening edit profile modal", function (browser) {
    var data = browser.globals;
    var editProfilePage = browser.page.editProfile();
    editProfilePage
      .navigate()
      .validLogin(data.login.email, data.login.password)
      .openEditProfileModal();
  });
});
