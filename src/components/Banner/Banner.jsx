import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { useVideoScroll } from "../../hooks/useVideoScroll";

// Mock the custom hooks
jest.mock("../../hooks/useScrollAnimation", () => ({
  useScrollAnimation: jest.fn(),
}));

jest.mock("../../hooks/useVideoScroll", () => ({
  useVideoScroll: jest.fn(),
}));

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  },
}));

// Mock BannerContent component
jest.mock("./BannerContent", () => ({
  BannerContent: ({ contentProps, loadingProps }) => (
    <div data-testid="banner-content">
      <div data-testid="loading-props">{JSON.stringify(loadingProps)}</div>
      <div data-testid="content-props">{JSON.stringify(contentProps)}</div>
    </div>
  ),
}));

describe("Banner", () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();

    // Default mock implementations
    useScrollAnimation.mockReturnValue({
      currentFrame: 0,
      showIntroducing: false,
      animationControls: {},
    });

    useVideoScroll.mockReturnValue({
      showIntroducing: false,
    });
  });

  test("renders without crashing", () => {
    render(<Banner />);
    expect(screen.getByTestId("banner-content")).toBeInTheDocument();
  });

  test("initializes with correct state", () => {
    render(<Banner />);
    const loadingProps = JSON.parse(
      screen.getByTestId("loading-props").textContent
    );

    expect(loadingProps).toEqual({
      progress: 100,
      loadedCount: 0,
      totalCount: 0,
      hasError: true,
    });
  });

  test("passes correct content props to BannerContent", () => {
    render(<Banner />);
    const contentProps = JSON.parse(
      screen.getByTestId("content-props").textContent
    );

    expect(contentProps).toMatchObject({
      useFallbackVideo: true,
      showIntroducing: false,
      videoProps: {
        showIntroducing: false,
        fallbackVideoUrl: expect.any(String),
      },
      imageProps: {
        currentFrame: 0,
        imageUrls: [],
        showIntroducing: false,
      },
    });
  });

  test("useScrollAnimation is called with correct parameters", () => {
    const { container } = render(<Banner />);

    expect(useScrollAnimation).toHaveBeenCalledWith(
      expect.any(Object),
      expect.any(Number),
      true
    );
  });

  test("useVideoScroll is called with correct parameters", () => {
    const { container } = render(<Banner />);

    expect(useVideoScroll).toHaveBeenCalledWith(
      expect.any(Object),
      expect.any(Object),
      true
    );
  });

  test("renders with correct class names", () => {
    const { container } = render(<Banner />);

    expect(container.querySelector("section")).toHaveClass("relative w-full");
    expect(container.querySelector(".scroll-animation")).toBeInTheDocument();
  });

  test("handles different showIntroducing states", () => {
    // Mock hooks to return different values
    useScrollAnimation.mockReturnValue({
      currentFrame: 0,
      showIntroducing: true,
      animationControls: {},
    });

    useVideoScroll.mockReturnValue({
      showIntroducing: false,
    });

    render(<Banner />);
    const contentProps = JSON.parse(
      screen.getByTestId("content-props").textContent
    );

    // Since showingVideo is true in initial state, it should use videoShowIntroducing
    expect(contentProps.showIntroducing).toBe(false);
  });

  test("handles error state correctly", () => {
    render(<Banner />);
    const loadingProps = JSON.parse(
      screen.getByTestId("loading-props").textContent
    );

    expect(loadingProps.hasError).toBe(true);
    expect(loadingProps.progress).toBe(100);
  });
});
