import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LifeStyle from "./LifeStyle";

// Mock the custom hook
jest.mock("../../hooks/useScrollScale", () => ({
  useScrollScale: jest.fn().mockReturnValue(1),
}));

describe("Lifestyle Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders without crashing", () => {
    render(<LifeStyle />);
    expect(screen.getByTestId("lifestyle-section")).toBeInTheDocument();
  });

  test("renders the title correctly", () => {
    render(<LifeStyle />);
    const title = screen.getByTestId("lifestyle-title");
    expect(title).toHaveTextContent("Lifestyle Scenes");
  });

  test("contains zoom container with correct scale transform", () => {
    render(<LifeStyle />);
    const zoomContainer = screen.getByTestId("zoom-container");
    expect(zoomContainer).toHaveStyle({ transform: "scale(1)" });
  });

  test("background image has correct styling", () => {
    render(<LifeStyle />);
    const backgroundImage = screen.getByTestId("background-image");
    expect(backgroundImage).toHaveStyle({
      backgroundPosition: "50%",
      backgroundRepeat: "no-repeat",
      transform: "scale(1.01)",
    });
  });

  test("content overlay is present", () => {
    render(<LifeStyle />);
    const overlay = screen.getByTestId("content-overlay");
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass(
      "relative h-screen w-full flex items-start md:items-center"
    );
  });
});
