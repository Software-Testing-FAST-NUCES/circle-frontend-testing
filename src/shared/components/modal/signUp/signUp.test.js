import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "react-bootstrap/Form";
describe("Signup Modal unit tests", () => {
  test("Form Control component for First name renders fine", () => {
    render(
      <Form.Control placeholder="First name" className="text-font-family" />
    );
    expect(screen.getByPlaceholderText("First name")).toBeInTheDocument();
  });
});
