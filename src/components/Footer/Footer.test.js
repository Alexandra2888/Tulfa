import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

// Mock the Description component in a simpler way
jest.mock("../../atoms/Description/Description", () => {
  return function MockDescription({ text }) {
    return <div data-testid="description">{text}</div>;
  };
});

describe("Footer", () => {
  it("renders without crashing", () => {
    render(<Footer />);
    expect(screen.getByTestId("description")).toBeInTheDocument();
  });

  it("renders with correct text content", () => {
    render(<Footer />);
    expect(screen.getByTestId("description")).toHaveTextContent(
      "Lorem ipsum dolor sit amet consectetur. Augue elementum morbi in ac. Leo eu elit nibh nunc vitae eget massa sed sed. Sit sed aliquam sit nulla eget."
    );
  });

  it("renders with correct section classes", () => {
    const { container } = render(<Footer />);
    const section = container.querySelector("section");
    expect(section).toHaveClass("py-24", "md:py-18", "xl:py-18");
  });
});
