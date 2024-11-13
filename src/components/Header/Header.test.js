import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "./Header";
import Banner from "../Banner/Banner";

// Mock the Banner component
jest.mock("../Banner/Banner", () => {
  return jest.fn(() => <div data-testid="mock-banner">Mocked Banner</div>);
});

describe("Header", () => {
  it("renders without crashing", () => {
    render(<Header />);
    expect(screen.getByTestId("mock-banner")).toBeInTheDocument();
  });

  it("renders the Banner component", () => {
    render(<Header />);
    expect(Banner).toHaveBeenCalled();
  });
});
