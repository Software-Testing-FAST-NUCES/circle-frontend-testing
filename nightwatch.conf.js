module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ["test"],
  page_objects_path: "POM",
  globals_path: "test-data/data.js", //seeded data

  webdriver: {
    start_process: true,
    port: 4444,
    server_path: require("chromedriver").path, //path for chromium driver i.e. chromium.exe
    cli_args: [
      // very verbose geckodriver logs
      // '-vv'
    ],
  },

  test_settings: {
    default: {
      launch_url: "https://nightwatchjs.org",
      desiredCapabilities: {
        browserName: "chrome",
      },
    },
  },
};
