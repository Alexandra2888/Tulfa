import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Callout from "./Callout";

describe("Callout", () => {
  it("renders all components correctly", () => {
    render(<Callout />);

    expect(screen.getByTestId("callout-section")).toBeInTheDocument();
    expect(screen.getByTestId("video-container")).toBeInTheDocument();
    expect(screen.getByTestId("callout-video")).toBeInTheDocument();
    expect(screen.getByTestId("video-source")).toBeInTheDocument();
  });
});
