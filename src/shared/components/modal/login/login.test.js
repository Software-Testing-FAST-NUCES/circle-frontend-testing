import React from "react";
import { render, screen } from "@testing-library/react";
import LoginModal from ".";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import "@testing-library/jest-dom";
import Form from "react-bootstrap/Form";
describe("Login Modal unit tests", () => {
  test("Form Control component for Email renders fine", () => {
    render(
      <Form.Control placeholder="Enter email" className="text-font-family" />
    );
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  });
  test("Form Control component for Password renders fine", () => {
    render(
      <Form.Control placeholder="Password" className="text-font-family" />
    );
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });
  test("Button for login renders fine", () => {
    render(
      <button
        className="connect-login-btn"
        id="login-sbmt-btn"
        data-testid="login-btn"
      >
        <p className="mb-0">Lets Go</p>
      </button>
    );
    expect(screen.getByTestId("login-btn")).toBeInTheDocument();
  });
  test("Login Modal component renders fine", () => {
    render(
      <Provider store={store}>
        <LoginModal openModal={true} />
      </Provider>
    );
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
  });
});
