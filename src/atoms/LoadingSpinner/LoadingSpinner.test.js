import React from "react";
import { render, screen } from "@testing-library/react";
import LoadingSpinner from "./LoadingSpinner";

describe("LoadingSpinner", () => {
  it("renders without crashing", () => {
    render(<LoadingSpinner />);
    expect(screen.getByTestId("spinner-container")).toBeInTheDocument();
  });

  it("renders the spinner element", () => {
    render(<LoadingSpinner />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  it("has correct classes for container", () => {
    render(<LoadingSpinner />);
    const container = screen.getByTestId("spinner-container");
    expect(container).toHaveClass(
      "flex",
      "items-center",
      "justify-center",
      "p-4"
    );
  });

  it("has correct classes for spinner", () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toHaveClass(
      "animate-spin",
      "rounded-full",
      "h-8",
      "w-8",
      "border-b-2",
      "border-gray-900"
    );
  });
});
