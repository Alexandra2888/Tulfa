import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GalleryModal from "./GalleryModal";

// Mock the Button component 
jest.mock("../../atoms/Button/Button", () => {
  return function MockButton(props) {
    return <button {...props} />;
  };
});

// Mock lucide-react
jest.mock("lucide-react", () => ({
  X: () => <div data-testid="x-icon">X</div>,
}));

describe("GalleryModal", () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it("should not render when isOpen is false", () => {
    render(<GalleryModal isOpen={false} onClose={mockOnClose} />);

    expect(screen.queryByTestId("gallery-modal")).not.toBeInTheDocument();
  });

  it("should render when isOpen is true", () => {
    render(<GalleryModal isOpen={true} onClose={mockOnClose} />);

    expect(screen.getByTestId("gallery-modal")).toBeInTheDocument();
    expect(screen.getByTestId("modal-content")).toBeInTheDocument();
    expect(screen.getByTestId("main-image")).toBeInTheDocument();
    expect(screen.getByTestId("main-image-caption")).toBeInTheDocument();
    expect(screen.getByTestId("image-grid")).toBeInTheDocument();
  });

  it("should call onClose when close button is clicked", () => {
    render(<GalleryModal isOpen={true} onClose={mockOnClose} />);

    const closeButton = screen.getByTestId("close-button");
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("should render main image with correct attributes", () => {
    render(<GalleryModal isOpen={true} onClose={mockOnClose} />);

    const mainImage = screen.getByTestId("main-image");
    expect(mainImage).toHaveAttribute("alt", "Main view");
    expect(mainImage).toHaveAttribute(
      "src",
      expect.stringContaining("view-of-a-modern-lounge-room")
    );
  });

  it("should render the caption text correctly", () => {
    render(<GalleryModal isOpen={true} onClose={mockOnClose} />);

    const caption = screen.getByTestId("main-image-caption");
    expect(caption).toHaveTextContent("Lorem ipsum dolor sit amet consectetur");
  });
});
