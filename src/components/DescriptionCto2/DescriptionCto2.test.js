import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DescriptionCto2 from "./DescriptionCto2";

// Mock the AnimatedText component
jest.mock("../../atoms/AnimatedText/AnimatedText", () => {
  return function MockAnimatedText() {
    return <div data-testid="animated-text">Mocked Animated Text</div>;
  };
});

describe("DescriptionCto2", () => {
  it("renders without crashing", () => {
    render(<DescriptionCto2 />);
  });

  it("renders the AnimatedText component", () => {
    render(<DescriptionCto2 />);
    expect(screen.getByTestId("animated-text")).toBeInTheDocument();
  });

  it("renders the yellow couch image with correct attributes", () => {
    render(<DescriptionCto2 />);
    const image = screen.getByAltText("Yellow Couch");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731228451/tulfa/Banner%20Videos/modern-scandinavian-yellow-sofa-isolated-over-whit-2023-11-27-05-20-00-utc_kobqbr.jpg"
    );
    expect(image).toHaveClass("w-full h-auto object-contain");
  });

it("has correct section styling", () => {
  render(<DescriptionCto2 />);
  const section = screen.getByTestId("cto-description");

  expect(section).toHaveClass(
    "min-h-screen flex flex-col items-center justify-center px-4 py-12 max-w-7xl mx-auto"
  );
});
});
