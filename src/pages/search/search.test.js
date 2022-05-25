import React, { useState } from "react";
import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Form from "react-bootstrap/Form";
import { Spinner } from "react-bootstrap";

describe("Unit testing for Searh Components", () => {
  test("search field renders fine", () => {
    render(
      <Form.Control
        type="text"
        placeholder="Search"
        size="lg"
      />
    );
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });
  
});