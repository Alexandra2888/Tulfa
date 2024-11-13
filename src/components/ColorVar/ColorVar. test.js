import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ColorVar from "./ColorVar";


// Mock data for variants
export const mockVariants = {
  orange: {
    gradient: ["#FFA500", "#FF8C00"],
    images: ["/orange-main.jpg", "/orange-secondary.jpg"],
  },
  blue: {
    gradient: ["#0000FF", "#000080"],
    images: ["/blue-main.jpg", "/blue-secondary.jpg"],
  },
};

// Mock the variants import
jest.mock("../../data/data", () => ({
  variants: {
    orange: {
      gradient: ["#FFA500", "#FF8C00"],
      images: ["/orange-main.jpg", "/orange-secondary.jpg"],
    },
    blue: {
      gradient: ["#0000FF", "#000080"],
      images: ["/blue-main.jpg", "/blue-secondary.jpg"],
    },
  },
}));

// Mock the Button component
jest.mock("../../atoms/Button/Button", () => {
  return function MockButton({
    children,
    onClick,
    className,
    "aria-label": ariaLabel,
  }) {
    return (
      <button
        onClick={onClick}
        className={className}
        aria-label={ariaLabel}
        data-testid={`color-button-${ariaLabel?.split(" ")[1]}`}
      >
        {children}
      </button>
    );
  };
});

describe("ColorVar Component", () => {
  it("renders without crashing", () => {
    render(<ColorVar />);
    expect(screen.getByAltText("Main view")).toBeInTheDocument();
    expect(screen.getByAltText("Secondary view")).toBeInTheDocument();
  });

  it("displays color selector buttons", () => {
    render(<ColorVar />);
    expect(screen.getAllByTestId(/color-button-/)).toHaveLength(4); // 2 sets of buttons (mobile & desktop) * 2 colors
  });

  it("starts with orange color selected", () => {
    render(<ColorVar />);
    const mainImage = screen.getByAltText("Main view");
    expect(mainImage.src).toContain("orange-main.jpg");
  });

  it("changes color when a different color is selected", () => {
    render(<ColorVar />);
    const blueButton = screen.getAllByTestId("color-button-blue")[0];

    fireEvent.click(blueButton);

    const mainImage = screen.getByAltText("Main view");
    const secondaryImage = screen.getByAltText("Secondary view");

    expect(mainImage.src).toContain("blue-main.jpg");
    expect(secondaryImage.src).toContain("blue-secondary.jpg");
  });

  it("applies ring styles to selected color button", () => {
    render(<ColorVar />);
    const orangeButtons = screen.getAllByTestId("color-button-orange");
    const blueButtons = screen.getAllByTestId("color-button-blue");

    // Initially orange should be selected
    expect(orangeButtons[0].className).toContain("ring-2");
    expect(blueButtons[0].className).not.toContain("ring-2");

    // Click blue button
    fireEvent.click(blueButtons[0]);

    expect(orangeButtons[0].className).not.toContain("ring-2");
    expect(blueButtons[0].className).toContain("ring-2");
  });

  it("has correct responsive classes for desktop and mobile views", () => {
    render(<ColorVar />);

    const mobileSelector = screen
      .getAllByTestId("color-button-orange")[0]
      .closest("div");
    const desktopSelector = screen
      .getAllByTestId("color-button-orange")[1]
      .closest("div");

    expect(mobileSelector.className).toContain("flex md:hidden");
    expect(desktopSelector.className).toContain("hidden md:flex");
  });
});
