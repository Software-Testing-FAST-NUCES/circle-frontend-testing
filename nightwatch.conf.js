module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ["test"],
  page_objects_path: "POM",

  webdriver: {
    start_process: true,
    port: 9515,
    server_path: require("chromedriver").path,
    cli_args: [
      // very verbose geckodriver logs
      // '-vv'
    ],

    // start_process: true,
    //  server_path: 'C:/Users/aych/Desktop/ST/circle-frontend/node_modules/chromedriver/lib/chromedriver/chromedriver.exe',
    //  port: 9515,
    //  host: 'localhost',
    //  ssl: false,
    //  default_path_prefix: '',
    //  proxy: undefined,
    //  cli_args: []
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
