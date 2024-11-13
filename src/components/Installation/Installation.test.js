// Installation.test.jsx
import { render, screen } from "@testing-library/react";
import Installation from "./Installation";
import CarousselLayout from "../../layouts/CarousselLayout/CarousselLayout";

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
  installationData: {
    slides: [
      { title: "Slide 1", image: "/image1.jpg" },
      { title: "Slide 2", image: "/image2.jpg" },
    ],
  },
}));

describe("Installation Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<Installation />);
    expect(screen.getByTestId("carousel-layout")).toBeInTheDocument();
  });

  it("passes correct props to CarouselLayout", () => {
    render(<Installation />);

    // Check if title is correct
    expect(screen.getByTestId("carousel-title")).toHaveTextContent(
      "Lorem Ipsum"
    );

    // Check if description is correct
    expect(screen.getByTestId("carousel-description")).toHaveTextContent(
      "Give your customers a clear view of how your furniture fits into their space with precise dimensions and scale indicators."
    );

    // Check if slides are passed correctly
    expect(screen.getByTestId("slide-0")).toHaveTextContent("Slide 1");
    expect(screen.getByTestId("slide-1")).toHaveTextContent("Slide 2");
  });

  it("calls CarouselLayout with correct number of slides", () => {
    render(<Installation />);
    const slides = screen.getAllByTestId(/^slide-/);
    expect(slides).toHaveLength(2);
  });

  it("matches snapshot", () => {
    const { container } = render(<Installation />);
    expect(container).toMatchSnapshot();
  });
});
