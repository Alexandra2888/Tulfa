import React from "react";
import { render, screen } from "@testing-library/react";
import Title from "./Title";

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    h2: ({ children, className, initial, animate, variants, ...props }) => (
      <h2 className={className} data-testid="motion-h2" {...props}>
        {children}
      </h2>
    ),
  },
}));

describe("Title Component", () => {
  it("renders without crashing", () => {
    render(<Title text="Test Title" />);
    expect(screen.getByTestId("motion-h2")).toBeInTheDocument();
  });

  it("displays the correct text", () => {
    const testText = "Hello World";
    render(<Title text={testText} />);
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  it("has the correct className", () => {
    render(<Title text="Test" />);
    const titleElement = screen.getByTestId("motion-h2");
    expect(titleElement).toHaveClass(
        "text-4xl",
        "xl:text-6xl",
      "font-semibold",
      "text-center",
      "md:text-left",
      "font-sans",
      "bg-gradient-to-r",
      "from-[#433E99]",
      "to-[#EF4B32]",
      "text-transparent",
      "bg-clip-text"
    );
  });

  it("renders with initial animation properties", () => {
    render(<Title text="Test" />);
    const titleElement = screen.getByTestId("motion-h2");
    expect(titleElement).toBeInTheDocument();
  });
});
