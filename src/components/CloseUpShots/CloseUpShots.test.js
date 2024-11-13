import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CloseUpShots from "./CloseUpShots";

// Mock the external components and hooks
jest.mock("../../atoms/Title/Title", () => ({ text }) => <h1>{text}</h1>);
jest.mock("../../atoms/Description/Description", () => ({ text }) => (
  <p>{text}</p>
));
jest.mock(
  "../../atoms/Button/Button",
  () =>
    ({ onClick, children, className }) =>
      (
        <button onClick={onClick} className={className}>
          {children}
        </button>
      )
);
jest.mock(
  "./GalleryModal",
  () =>
    ({ isOpen, onClose }) =>
      isOpen ? (
        <div data-testid="gallery-modal">
          <button onClick={onClose}>Close</button>
        </div>
      ) : null
);
jest.mock("../../hooks/useScrollScale", () => ({
  useScrollScale: () => 1,
}));

// Mock window.innerHeight
beforeAll(() => {
  Object.defineProperty(window, "innerHeight", {
    writable: true,
    configurable: true,
    value: 800,
  });
});

describe("CloseUpShots Component", () => {
  it("renders without crashing", () => {
    render(<CloseUpShots />);
    expect(screen.getByText("Close Up Shots")).toBeInTheDocument();
  });

  it("renders the main image", () => {
    render(<CloseUpShots />);
    const image = screen.getByAltText("Couch close-up");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      expect.stringContaining("Close%20Up%20Shots")
    );
  });

  it("renders the description text", () => {
    render(<CloseUpShots />);
    const description = screen.getByText(/Give your customers a clear view/);
    expect(description).toBeInTheDocument();
  });

  it('opens modal when "Take a closer look" button is clicked', () => {
    render(<CloseUpShots />);

    // Find and click the button
    const button = screen.getByText("Take a closer look");
    fireEvent.click(button);

    // Check if modal is shown
    const modal = screen.getByTestId("gallery-modal");
    expect(modal).toBeInTheDocument();
  });

  it("closes modal when close button is clicked", () => {
    render(<CloseUpShots />);

    // Open the modal
    const openButton = screen.getByText("Take a closer look");
    fireEvent.click(openButton);

    // Find and click the close button
    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);

    // Check if modal is removed
    expect(screen.queryByTestId("gallery-modal")).not.toBeInTheDocument();
  });

  it("applies scale transform to the image", () => {
    render(<CloseUpShots />);
    const image = screen.getByAltText("Couch close-up");
    expect(image).toHaveStyle({ transform: "scale(1)" });
  });
});
