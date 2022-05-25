module.exports = {
  url: "http://localhost:3000/Profile/",
  elements: {
    loginBtn: {
      selector: "a[id=login-btn]",
    },
    loginModal: {
      selector: "div[class=login-modal-body]",
    },
    email: {
      selector: "input[type=email]",
    },
    password: {
      selector: "input[type=password]",
    },
    loginSubmit: {
      selector: "button[id=login-sbmt-btn]",
    },
    requestButton:{
      selector: "a[class='btn btn-outline-primary btn-sm btn-block text-font-family']",
    },
    acceptButton:{
      selector: "a[class='btn btn-outline-success btn-sm btn-block text-font-family']"
    },
    unfriendButton:{
      selector: "a[class='btn btn-outline-danger btn-sm btn-block text-font-family']"
    },
    testUserProfile:{
      selector: "cardTextStyle card-title h5"
    },
    profilePic:{
      selector: "rounded mb-2 img-thumbnail main-profile-pic"
    },
    searchField: {
      selector: "input[class='form-control form-control-lg']",
    },
    searchIcon: {
      selector: "img[src=\"/static/media/search.9cec04a7fa93c71dc074bed6b005d2d7.svg\"]"
    },
    userCard: {
      selector: "div[class=card]",
    },
    logoutBtn: {
      selector: "button.custom-site-btn3.text-font-family"
    },
    yesLogout: {
      selector: ".react-confirm-alert-button-group > button:first-child"},
  },
};
