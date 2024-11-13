import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CarousselLayout from "./CarousselLayout";

// Mock Swiper modules
jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div className="swiper-container">{children}</div>,
  SwiperSlide: ({ children }) => <div className="swiper-slide">{children}</div>,
}));

jest.mock('swiper/modules', () => ({
  Navigation: jest.fn(),
  Pagination: jest.fn(),
  A11y: jest.fn(),
}));

// MockCSS imports
jest.mock('swiper/css', () => ({}));
jest.mock('swiper/css/navigation', () => ({}));
jest.mock('swiper/css/pagination', () => ({}));


// Mock data for testing
const mockSlides = [
  { id: 1, image: "image1.jpg", alt: "Slide 1" },
  { id: 2, image: "image2.jpg", alt: "Slide 2" },
  { id: 3, image: "image3.jpg", alt: "Slide 3" },
];

describe("CarousselLayout", () => {
  beforeEach(() => {
    // Clear any previous render
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(
      <CarousselLayout
        title="Test Title"
        description="Test Description"
        slides={mockSlides}
      />
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("renders all slides", () => {
    render(
      <CarousselLayout
        title="Test Title"
        description="Test Description"
        slides={mockSlides}
      />
    );
    mockSlides.forEach((slide) => {
      expect(screen.getByAltText(slide.alt)).toBeInTheDocument();
    });
  });

 
  it("contains navigation buttons", () => {
    render(
      <CarousselLayout
        title="Test Title"
        description="Test Description"
        slides={mockSlides}
      />
    );

    expect(screen.getByLabelText("Previous slide")).toBeInTheDocument();
    expect(screen.getByLabelText("Next slide")).toBeInTheDocument();
  });
});