import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoadingProgress } from "./LoadingProgress";

describe("LoadingProgress", () => {
  const defaultProps = {
    progress: 50,
    loadedCount: 5,
    totalCount: 10,
    hasError: false,
  };

  it("renders null when hasError is true", () => {
    const { container } = render(
      <LoadingProgress {...defaultProps} hasError={true} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders loading content text", () => {
    render(<LoadingProgress {...defaultProps} />);
    expect(screen.getByText("Loading Content...")).toBeInTheDocument();
  });

  it("displays correct progress percentage and counts", () => {
    render(<LoadingProgress {...defaultProps} />);
    expect(screen.getByText("50% (5/10)")).toBeInTheDocument();
  });

  it("applies correct width style based on progress", () => {
    render(<LoadingProgress {...defaultProps} progress={75} />);
    const progressBar = document.querySelector(".bg-blue-500");
    expect(progressBar).toHaveStyle({ width: "75%" });
  });

  it("handles 0% progress correctly", () => {
    render(
      <LoadingProgress
        progress={0}
        loadedCount={0}
        totalCount={10}
        hasError={false}
      />
    );
    const progressBar = document.querySelector(".bg-blue-500");
    expect(progressBar).toHaveStyle({ width: "0%" });
    expect(screen.getByText("0% (0/10)")).toBeInTheDocument();
  });

  it("handles 100% progress correctly", () => {
    render(
      <LoadingProgress
        progress={100}
        loadedCount={10}
        totalCount={10}
        hasError={false}
      />
    );
    const progressBar = document.querySelector(".bg-blue-500");
    expect(progressBar).toHaveStyle({ width: "100%" });
    expect(screen.getByText("100% (10/10)")).toBeInTheDocument();
  });

  it("maintains proper structure with all required elements", () => {
    render(<LoadingProgress {...defaultProps} />);

    // Check for main container
    expect(screen.getByText("Loading Content...").parentElement).toHaveClass(
      "text-center text-white"
    );

    // Check for progress bar container
    const progressBarContainer = document.querySelector(".bg-gray-700");
    expect(progressBarContainer).toHaveClass(
      "w-64 h-2 rounded-full overflow-hidden"
    );

    // Check for progress bar
    const progressBar = document.querySelector(".bg-blue-500");
    expect(progressBar).toHaveClass(
      "h-full rounded-full transition-all duration-300"
    );
  });
});
