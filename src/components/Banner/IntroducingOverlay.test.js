import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IntroducingOverlay } from "./IntroducingOverlay";

describe("IntroducingOverlay", () => {
  it("renders without crashing", () => {
    render(<IntroducingOverlay showIntroducing={true} />);
    const overlay = screen.getByTestId("introducing-overlay");
    expect(overlay).toBeInTheDocument();
  });

  it("renders image with correct alt text", () => {
    render(<IntroducingOverlay showIntroducing={true} />);
    const image = screen.getByAltText("Introducing");
    expect(image).toBeInTheDocument();
  });

  it("has correct opacity class when showing", () => {
    render(<IntroducingOverlay showIntroducing={true} />);
    const overlay = screen.getByTestId("introducing-overlay");
    expect(overlay.className).toContain("opacity-100");
  });

  it("has correct opacity class when hidden", () => {
    render(<IntroducingOverlay showIntroducing={false} />);
    const overlay = screen.getByTestId("introducing-overlay");
    expect(overlay.className).toContain("opacity-0");
  });
});
