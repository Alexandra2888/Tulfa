import React from "react";
import { render, screen } from "@testing-library/react";
import SizeVar from "./SizeVar";

describe("SizeVars Component", () => {
  beforeEach(() => {
    render(<SizeVar />);
  });

  test("renders the component without crashing", () => {
    const container = screen.getByTestId("size-vars-container");
    const content = screen.getByTestId("size-vars-content");

    expect(container).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  test("renders all shelf containers", () => {
    expect(screen.getByTestId("large-shelf-container")).toBeInTheDocument();
    expect(screen.getByTestId("medium-shelf-container")).toBeInTheDocument();
    expect(screen.getByTestId("small-shelf-container")).toBeInTheDocument();
  });

  test("renders all shelf images", () => {
    expect(screen.getByTestId("large-shelf-image")).toBeInTheDocument();
    expect(screen.getByTestId("medium-shelf-image")).toBeInTheDocument();
    expect(screen.getByTestId("small-shelf-image")).toBeInTheDocument();
  });

  test("renders size labels", () => {
    expect(screen.getByTestId("large-shelf-label")).toHaveTextContent("L");
    expect(screen.getByTestId("medium-shelf-label")).toHaveTextContent("M");
    expect(screen.getByTestId("small-shelf-label")).toHaveTextContent("S");
  });

  test("renders description text", () => {
    const description = screen.getByTestId("size-vars-description");
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent("Lorem ipsum Dolor Sit Amet");
  });

  test("container has correct base styling classes", () => {
    const container = screen.getByTestId("size-vars-container");
    expect(container).toHaveClass(
      "relative",
      "w-full",
      "flex",
      "flex-col",
      "items-center",
      "justify-end",
      "bg-[#F0F3FB]",
      "overflow-hidden"
    );
  });
});
