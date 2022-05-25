module.exports = {
  url: "http://localhost:3000/search",
  // after: function(browser) {
  //   browser.end();
  // },
  elements: {
    searchField: {
      selector: "input[class='form-control form-control-lg']",
    },
    userCard: {
      selector: "div[class=card]",
    },
  },
};
