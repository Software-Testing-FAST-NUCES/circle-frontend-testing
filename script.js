// Scenario: Scenario_1 (executor: ramping-vus)

import { sleep, group, check } from "k6";
import http from "k6/http";

import { FormData } from "https://jslib.k6.io/formdata/0.0.2/index.js";

export const options = {
  thresholds: {
    http_req_failed: ["rate<0.01"],
    http_req_duration: ["p(90)<1000"],
  },
  scenarios: {
    Scenario_1: {
      executor: "ramping-vus",
      gracefulStop: "30s",
      stages: [
        { target: 10, duration: "15s" },
        { target: 12, duration: "15s" },
        { target: 0, duration: "15s" },
      ],
      gracefulRampDown: "30s",
      exec: "scenario_1",
    },
    Scenario_2: {
      executor: "ramping-vus",
      gracefulStop: "30s",
      stages: [
        { target: 8, duration: "15s" },
        { target: 10, duration: "15s" },
        { target: 0, duration: "15s" },
      ],
      gracefulRampDown: "30s",
      exec: "scenario_2,",
    },
    Scenario_3: {
      executor: "ramping-vus",
      gracefulStop: "30s",
      stages: [
        { target: 8, duration: "15s" },
        { target: 10, duration: "15s" },
        { target: 0, duration: "15s" },
      ],
      gracefulRampDown: "30s",
      exec: "scenario_3,",
    },
  },
};

export function scenario_1() {
  let formData, response;

  group(
    "page_1 - http://localhost:3000/ -> logging into the site and changinf firstname",
    function () {
      response = http.get("http://localhost:3000/", {
        //   headers: {
        //     'upgrade-insecure-requests': '1',
        //     'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        //     'sec-ch-ua-mobile': '?0',
        //     'sec-ch-ua-platform': '"Windows"',
        //   },
      });
      sleep(2.7);
      response = http.post(
        "http://localhost:8000/api/users/signin",
        '{"email":"faiq@gmail.com","password":"faiq123"}',
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );

      check(response, {
        "is status 200": (r) => r.status === 200,
        // "body size was 320 bytes": (r) => r.body.length == 320,
      });

      response = http.get("http://localhost:8000/api/posts/", {
        headers: {
          accept: "application/json, text/plain, */*",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
        },
      });
      sleep(0.7);

      formData = new FormData();
      formData.boundary = "----WebKitFormBoundaryJIp00e4YOQPH9YIQ";
      formData.append("email", "faiq@gmail.com");
      formData.append("firstname", "faiq1122");
      formData.append("lastname", "Rauf2152");
      formData.append("dob", "2022-05-18");
      formData.append("bio", " 123");

      response = http.put(
        "http://localhost:8000/api/users/edit",
        formData.body(),
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type":
              "multipart/form-data; boundary=----WebKitFormBoundaryJIp00e4YOQPH9YIQ",
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhiNDE4NWQwOGUzYjhkNzhkNGQzYTUiLCJpYXQiOjE2NTQ0MzYyMzF9.Dz_y6qr35UVcVSLkiqmAxVt0aTFo8xkgOggomMkynu4",
          },
        }
      );
      //   console.log("resss", response.body);
      check(response, {
        "is status 200": (r) => r.status === 200,
        // "first namw was updated": (r) => r.body.firstname == "faiq1122",
      });
      check(response, {
        "verify first name text": (r) => r.body.includes("faiq1122"),
      });
    }
  );
}
export function scenario_2() {
  let formData, response;

  group(
    "page_1 - http://localhost:3000/ -> logging into the site and changinf firstname",
    function () {
      response = http.get("http://localhost:3000/", {
        //   headers: {
        //     'upgrade-insecure-requests': '1',
        //     'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        //     'sec-ch-ua-mobile': '?0',
        //     'sec-ch-ua-platform': '"Windows"',
        //   },
      });
      sleep(2.7);
      response = http.post(
        "http://localhost:8000/api/users/signin",
        '{"email":"faiq@gmail.com","password":"faiq123"}',
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );

      check(response, {
        "is status 200": (r) => r.status === 200,
        // "body size was 320 bytes": (r) => r.body.length == 320,
      });

      response = http.get("http://localhost:8000/api/posts/", {
        headers: {
          accept: "application/json, text/plain, */*",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
        },
      });
      sleep(0.7);

      formData = new FormData();
      formData.boundary = "----WebKitFormBoundaryJIp00e4YOQPH9YIQ";
      formData.append("email", "faiq@gmail.com");
      formData.append("firstname", "faiq1122");
      formData.append("lastname", "Rauf2");
      formData.append("dob", "2022-05-20");
      formData.append("bio", " 123");

      response = http.put(
        "http://localhost:8000/api/users/edit",
        formData.body(),
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type":
              "multipart/form-data; boundary=----WebKitFormBoundaryJIp00e4YOQPH9YIQ",
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhiNDE4NWQwOGUzYjhkNzhkNGQzYTUiLCJpYXQiOjE2NTQ0MzYyMzF9.Dz_y6qr35UVcVSLkiqmAxVt0aTFo8xkgOggomMkynu4",
          },
        }
      );
      //   console.log("resss", response.body);
      check(response, {
        "is status 200": (r) => r.status === 200,
        // "first namw was updated": (r) => r.body.firstname == "faiq1122",
      });
      check(response, {
        "verify first name text": (r) => r.body.includes("Rauf2"),
      });
      check(response, {
        "verify dob text": (r) => r.body.includes("2022-05-20"),
      });
    }
  );
}
export function scenario_3() {
  let formData, response;

  group(
    "page_1 - http://localhost:3000/ -> logging into the site and changinf firstname",
    function () {
      response = http.get("http://localhost:3000/", {
        //   headers: {
        //     'upgrade-insecure-requests': '1',
        //     'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        //     'sec-ch-ua-mobile': '?0',
        //     'sec-ch-ua-platform': '"Windows"',
        //   },
      });
      sleep(2.7);
      response = http.post(
        "http://localhost:8000/api/users/signin",
        '{"email":"faiq@gmail.com","password":"faiq123"}',
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );

      check(response, {
        "is status 200": (r) => r.status === 200,
        // "body size was 320 bytes": (r) => r.body.length == 320,
      });

      response = http.get("http://localhost:8000/api/posts/", {
        headers: {
          accept: "application/json, text/plain, */*",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
        },
      });
      sleep(0.7);

      formData = new FormData();
      formData.boundary = "----WebKitFormBoundaryJIp00e4YOQPH9YIQ";
      formData.append("email", "faiq@gmail.com");
      formData.append("firstname", "faiq1122");
      formData.append("lastname", "Rauf2");
      formData.append("dob", "2022-05-20");
      formData.append("bio", " 1231212");

      response = http.put(
        "http://localhost:8000/api/users/edit",
        formData.body(),
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "content-type":
              "multipart/form-data; boundary=----WebKitFormBoundaryJIp00e4YOQPH9YIQ",
            "x-auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhiNDE4NWQwOGUzYjhkNzhkNGQzYTUiLCJpYXQiOjE2NTQ0MzYyMzF9.Dz_y6qr35UVcVSLkiqmAxVt0aTFo8xkgOggomMkynu4",
          },
        }
      );
      //   console.log("resss", response.body);
      check(response, {
        "is status 200": (r) => r.status === 200,
        // "first namw was updated": (r) => r.body.firstname == "faiq1122",
      });
      check(response, {
        "verify bio text": (r) => r.body.includes("1231212"),
      });
    }
  );
}
