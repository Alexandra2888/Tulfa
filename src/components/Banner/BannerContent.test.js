import React from "react";
import { render, screen } from "@testing-library/react";
import { BannerContent } from "./BannerContent";
import { LoadingProgress } from "./LoadingProgress";
import { ImageContent } from "./ImageContent";
import { IntroducingOverlay } from "./IntroducingOverlay";
import Video from "./Video";

// Mock child components
jest.mock("./LoadingProgress", () => ({
  LoadingProgress: jest.fn(() => (
    <div data-testid="loading-progress" data-id="banner-loading-progress">
      Loading Progress
    </div>
  )),
}));

jest.mock("./ImageContent", () => ({
  ImageContent: jest.fn(() => (
    <div data-testid="image-content" data-id="banner-image">
      Image Content
    </div>
  )),
}));

jest.mock("./IntroducingOverlay", () => ({
  IntroducingOverlay: jest.fn(() => (
    <div data-testid="introducing-overlay" data-id="banner-introducing-overlay">
      Introducing Overlay
    </div>
  )),
}));

jest.mock("./Video", () => ({
  __esModule: true,
  default: jest.fn(() => (
    <div data-testid="video-component" data-id="banner-video">
      Video Component
    </div>
  )),
}));

describe("BannerContent", () => {
  beforeEach(() => {
    // Clear mock calls between tests
    LoadingProgress.mockClear();
    ImageContent.mockClear();
    IntroducingOverlay.mockClear();
    Video.mockClear();
  });

  it("renders container with correct data-id", () => {
    const { container } = render(
      <BannerContent
        isLoading={false}
        contentProps={{ useFallbackVideo: false, imageProps: {} }}
      />
    );
    expect(
      container.querySelector('[data-id="banner-content-container"]')
    ).toBeInTheDocument();
  });

  it("renders loading state with correct data-id", () => {
    const loadingProps = {
      progress: 50,
      message: "Loading...",
    };

    render(<BannerContent isLoading={true} loadingProps={loadingProps} />);

    expect(screen.getByTestId("loading-progress")).toHaveAttribute(
      "data-id",
      "banner-loading-progress"
    );
    expect(LoadingProgress).toHaveBeenCalledWith(
      expect.objectContaining({
        ...loadingProps,
        "data-id": "banner-loading-progress",
      }),
      {}
    );
  });

  it("renders content wrapper with correct data-id when not loading", () => {
    const { container } = render(
      <BannerContent
        isLoading={false}
        contentProps={{ useFallbackVideo: false, imageProps: {} }}
      />
    );
    expect(
      container.querySelector('[data-id="banner-content-wrapper"]')
    ).toBeInTheDocument();
  });

  it("renders video content with correct data-id", () => {
    const contentProps = {
      useFallbackVideo: true,
      videoProps: {
        videoRef: { current: null },
        showIntroducing: true,
        fallbackVideoUrl: "test-video-url",
      },
      showIntroducing: true,
    };

    render(<BannerContent isLoading={false} contentProps={contentProps} />);

    expect(screen.getByTestId("video-component")).toHaveAttribute(
      "data-id",
      "banner-video"
    );
    expect(Video).toHaveBeenCalledWith(
      expect.objectContaining({
        videoRef: contentProps.videoProps.videoRef,
        showIntroducing: contentProps.videoProps.showIntroducing,
        fallbackVideoUrl: contentProps.videoProps.fallbackVideoUrl,
        "data-id": "banner-video",
      }),
      {}
    );
  });

  it("renders image content with correct data-id", () => {
    const contentProps = {
      useFallbackVideo: false,
      imageProps: {
        src: "test-image.jpg",
        alt: "Test Image",
      },
      showIntroducing: true,
    };

    render(<BannerContent isLoading={false} contentProps={contentProps} />);

    expect(screen.getByTestId("image-content")).toHaveAttribute(
      "data-id",
      "banner-image"
    );
    expect(ImageContent).toHaveBeenCalledWith(
      expect.objectContaining({
        ...contentProps.imageProps,
        "data-id": "banner-image",
      }),
      {}
    );
  });

  it("renders IntroducingOverlay with correct data-id", () => {
    const contentProps = {
      useFallbackVideo: false,
      imageProps: {},
      showIntroducing: true,
    };

    render(<BannerContent isLoading={false} contentProps={contentProps} />);

    expect(screen.getByTestId("introducing-overlay")).toHaveAttribute(
      "data-id",
      "banner-introducing-overlay"
    );
    expect(IntroducingOverlay).toHaveBeenCalledWith(
      expect.objectContaining({
        showIntroducing: contentProps.showIntroducing,
        "data-id": "banner-introducing-overlay",
      }),
      {}
    );
  });

  // Original style tests remain the same
  it("applies correct container styles", () => {
    const { container } = render(
      <BannerContent
        isLoading={false}
        contentProps={{ useFallbackVideo: false, imageProps: {} }}
      />
    );

    const bannerDiv = container.firstChild;
    expect(bannerDiv).toHaveClass(
      "sticky",
      "top-0",
      "w-full",
      "h-screen",
      "overflow-hidden",
      "bg-black"
    );
  });
});
