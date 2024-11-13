import React from "react";
import { render, screen } from "@testing-library/react";
import DescriptionCto3 from "./DescriptionCto3";

describe("DescriptionCto3", () => {
  it("renders without crashing", () => {
    render(<DescriptionCto3 />);
  });

  it("renders the main heading text", () => {
    render(<DescriptionCto3 />);
    expect(screen.getByText("Lorem ipsum dolor sit amet.")).toBeInTheDocument();
  });

  it("renders the secondary text", () => {
    render(<DescriptionCto3 />);
    expect(
      screen.getByText(/Quo odit atque ut architecto/)
    ).toBeInTheDocument();
  });

  it("has correct background gradient style", () => {
    const { container } = render(<DescriptionCto3 />);
    const section = container.querySelector("section");

    expect(section).toHaveStyle({
      background:
        "linear-gradient(113deg, #2A266A 0%, #433E99 50%, #2A266A 100%)",
    });
  });

  it("has correct styling classes", () => {
    const { container } = render(<DescriptionCto3 />);
    const section = container.querySelector("section");

    expect(section).toHaveClass("w-full");
    expect(section).toHaveClass("flex");
    expect(section).toHaveClass("justify-center");
    expect(section).toHaveClass("items-center");
  });
});
