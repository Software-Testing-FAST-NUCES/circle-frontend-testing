module.exports = {
  url: "http://localhost:3000/",
  elements: {
    signUpBtn: {
      selector: "a[id=signup-btn]",
    },
    signUpModal: {
      selector: "div[class=signup-login-form]",
    },
    firstname: {
      selector: "input[id=firstname]",
    },
    lastname: {
      selector: "input[id=lastname]",
    },
    email: {
      selector: "input[id=email]",
    },
    password: {
      selector: "input[id=password]",
    },
    dob: {
      selector: "input[type=date]",
    },
    signUpSubmit: {
      selector: "button[id=signup-sbmt-btn]",
    },
  },
};
