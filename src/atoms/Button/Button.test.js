import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders button with children", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: /click me/i })
    ).toBeInTheDocument();
  });

  test("applies custom className", () => {
    render(<Button className="custom-class">Button</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
    expect(button).toHaveClass("font-medium");
    expect(button).toHaveClass("transition-colors");
  });

  test("handles onClick event", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies custom style", () => {
    const customStyle = { backgroundColor: "red" };
    render(<Button style={customStyle}>Styled Button</Button>);

    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ backgroundColor: "red" });
  });

  test("renders with aria-label", () => {
    render(<Button aria-label="Custom Label">Icon</Button>);
    expect(screen.getByLabelText("Custom Label")).toBeInTheDocument();
  });

  test("renders without optional props", () => {
    render(<Button>Basic Button</Button>);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("font-medium");
    expect(button).toHaveClass("transition-colors");
  });

  test("combines default and custom className", () => {
    render(<Button className="text-blue-500">Custom Class Button</Button>);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("font-medium");
    expect(button).toHaveClass("transition-colors");
    expect(button).toHaveClass("text-blue-500");
  });
});
