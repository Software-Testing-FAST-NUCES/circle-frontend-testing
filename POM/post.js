module.exports = {
    url: "http://localhost:3000/CreatePost",
    // after: function(browser) {
    //   browser.end();
    // },
    elements: {
      textField: {
        selector: "textarea[class='text-font-family form-control form-control-lg']",
      },
      chooseButton: {
        selector: "input[type=file]",
      },
      postButton: {
        selector: "button[type=button]",
      },
    },
  };