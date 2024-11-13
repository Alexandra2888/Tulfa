import { render, screen } from "@testing-library/react";
import Dimensions from "./Dimensions";
import CarouselLayout from "../../layouts/CarousselLayout/CarousselLayout";

// Mock the dependencies
jest.mock("../../layouts/CarousselLayout/CarousselLayout", () => {
  return jest.fn(({ title, description, slides }) => (
    <div data-testid="carousel-layout">
      <h2 data-testid="carousel-title">{title}</h2>
      <p data-testid="carousel-description">{description}</p>
      <div data-testid="carousel-slides">
        {slides.map((slide, index) => (
          <div key={index} data-testid={`slide-${index}`}>
            {slide.title}
          </div>
        ))}
      </div>
    </div>
  ));
});

jest.mock("../../data/data", () => ({
  dimensionsData: {
    slides: [
      { title: "Dimension 1", image: "/dimension1.jpg" },
      { title: "Dimension 2", image: "/dimension2.jpg" },
      { title: "Dimension 3", image: "/dimension3.jpg" },
    ],
  },
}));

describe("Dimensions Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<Dimensions />);
    expect(screen.getByTestId("carousel-layout")).toBeInTheDocument();
  });

  it("passes correct props to CarouselLayout", () => {
    render(<Dimensions />);

    // Check if title is correct
    expect(screen.getByTestId("carousel-title")).toHaveTextContent(
      "Lorem Ipsum"
    );

    // Check if description is correct
    expect(screen.getByTestId("carousel-description")).toHaveTextContent(
      "Give your customers a clear view of how your furniture fits into their space with precise dimensions and scale indicators."
    );

    // Check if slides are passed correctly
    expect(screen.getByTestId("slide-0")).toHaveTextContent("Dimension 1");
    expect(screen.getByTestId("slide-1")).toHaveTextContent("Dimension 2");
    expect(screen.getByTestId("slide-2")).toHaveTextContent("Dimension 3");
  });

  it("calls CarouselLayout with correct number of slides", () => {
    render(<Dimensions />);
    const slides = screen.getAllByTestId(/^slide-/);
    expect(slides).toHaveLength(3);
  });

  it("verifies CarouselLayout component props", () => {
    render(<Dimensions />);
    expect(CarouselLayout).toHaveBeenCalledWith(
      {
        title: "Lorem Ipsum",
        description:
          "Give your customers a clear view of how your furniture fits into their space with precise dimensions and scale indicators.",
        slides: expect.arrayContaining([
          expect.objectContaining({ title: "Dimension 1" }),
          expect.objectContaining({ title: "Dimension 2" }),
          expect.objectContaining({ title: "Dimension 3" }),
        ]),
      },
      {}
    );
  });

  it("matches snapshot", () => {
    const { container } = render(<Dimensions />);
    expect(container).toMatchSnapshot();
  });
});
