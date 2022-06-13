module.exports = {
    url: "http://localhost:3000/",
    // after: function(browser) {
    //   browser.end();
    // },
    elements: {
      forgetPassButton: {
        selector: "ins",
      },
      inpField: {
        selector: "input[id=formBasicEmail]",
      },
      nextButton: {
        selector: "button[class=connect-login-btn]",
      },
    },
  };