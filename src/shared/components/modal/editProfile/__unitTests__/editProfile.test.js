import React, { useState } from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import EditProfileModal from "../index";
import { Provider } from "react-redux";

import { store } from "../../../../redux/store";

import "@testing-library/jest-dom";
import Form from "react-bootstrap/Form";
import { Spinner } from "react-bootstrap";

describe("--> Unit testing for UI components", () => {
  test("Form component renders fine", () => {
    render(
      <Form.Control
        placeholder="Firstname"
        value={""}
        className="text-font-family"
      />
    );
    expect(screen.getByPlaceholderText("Firstname")).toBeInTheDocument();
  });
  test("Spinner component renders fine", () => {
    const { container } = render(<Spinner animation="grow" size="sm" />);
    expect(container.firstChild).toHaveClass("spinner-grow");
  });
  test("Update Profile Modal component renders fine", () => {
    const dummyUser = {
      user: {
        email: "faiq@gmail.com",
        bio: "dummmy Bio",
        firstname: "faiq",
        lastname: "rauf",
        dob: "2022-2-2",
      },
    };
    render(
      <Provider store={store}>
        <EditProfileModal openModal={true} user={dummyUser} />
      </Provider>
    );
    expect(screen.getByText("Edit Profile")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Update" })).toBeInTheDocument();
  });
  test("Update Profile Modal has all relevant details of user passed", () => {
    const dummyUser = {
      user: {
        email: "faiq@gmail.com",
        bio: "dummmy Bio",
        firstname: "faiq",
        lastname: "rauf",
        dob: "2022-2-2",
      },
    };
    render(
      <Provider store={store}>
        <EditProfileModal openModal={true} user={dummyUser} />
      </Provider>
    );
    expect(screen.getByText("Edit Profile")).toBeInTheDocument();
    expect(screen.getByDisplayValue("faiq")).toBeInTheDocument();
    expect(screen.getByDisplayValue("rauf")).toBeInTheDocument();
    expect(screen.getByDisplayValue("dummmy Bio")).toBeInTheDocument();

    // expect(screen.getElementsByClassName("form-control")).toHaveLength(5);
    // const inputEl = screen.getByText("faiq");
    // expect(inputEl).toBeInTheDocument();
    // expect(inputEl).toHaveAttribute("type", "email");
  });
});

// UNIT FEEDBACK
//shallow rendering vs rendering
