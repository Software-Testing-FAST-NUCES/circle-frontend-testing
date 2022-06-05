import { sleep, group, check } from "k6";
import http from "k6/http";

export const options = {
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(90)<1000"],
  },
  scenarios: {
    Login_scenario: {
      executor: "ramping-vus",
      gracefulStop: "5s",
      stages: [
        { target: 20, duration: "15s" },
        { target: 20, duration: "15s" },
        { target: 0, duration: "15s" },
      ],
      exec: "Login_scenario",
    },
  },
};

export function Login_scenario() {
  let response;

  response = http.post(
    "http://localhost:8000/api/users/signin",
    '{"email":"haseeb@gmail.com","password":"haseeb1122"}',
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );

  check(response, {
    "is status 200": (r) => r.status === 200,
    "body size was 320 bytes": (r) => r.body.length == 320,
  });

  group("Google Login - http://localhost:3000/", function () {
    response = http.get("https://apis.google.com/js/api.js", {});
    sleep(1);

    response = http.post(
      "http://localhost:8000/api/users/googleauth",
      '{"email":"hadishams38.hs@gmail.com","firstname":"Hadi","lastname":"Shams","googleId":"111163562798024071104"}',
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    check(response, {
      "is status 200": (r) => r.status === 200,
      "body size was 320 bytes": (res) => res.body.length == 308,
    });
  });

  sleep(1);
}
