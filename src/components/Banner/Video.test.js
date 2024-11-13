import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Video from "./Video";

// Suppress console.error
beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  window.HTMLMediaElement.prototype.play = jest.fn(() => Promise.resolve());
  window.HTMLMediaElement.prototype.pause = jest.fn();
});

// Cleanup console mock
afterAll(() => {
  console.error.mockRestore();
});

describe("Video Component", () => {
  const mockVideoRef = {
    current: null,
  };

  // Basic render test
  test("renders video container", async () => {
    await act(async () => {
      render(
        <Video
          videoRef={mockVideoRef}
          showIntroducing={false}
          fallbackVideoUrl="test.mp4"
        />
      );
    });

    const container = screen.getByTestId("video-container");
    expect(container).toBeInTheDocument();
  });

  // Test video element presence
  test("renders video element", async () => {
    await act(async () => {
      render(
        <Video
          videoRef={mockVideoRef}
          showIntroducing={false}
          fallbackVideoUrl="test.mp4"
        />
      );
    });

    const videoElement = screen.getByTestId("video-element");
    expect(videoElement).toBeInTheDocument();
  });

  // Test video attributes
  test("video has correct attributes", async () => {
    await act(async () => {
      render(
        <Video
          videoRef={mockVideoRef}
          showIntroducing={false}
          fallbackVideoUrl="test.mp4"
        />
      );
    });

    const videoElement = screen.getByTestId("video-element");
    expect(videoElement).toHaveAttribute("autoplay");
    expect(videoElement).toHaveAttribute("loop");
    expect(videoElement).toHaveAttribute("playsinline");
    expect(videoElement.muted).toBe(true);
  });

  // Test opacity when showIntroducing is true
  test("video has opacity 0 when showIntroducing is true", async () => {
    await act(async () => {
      render(
        <Video
          videoRef={mockVideoRef}
          showIntroducing={true}
          fallbackVideoUrl="test.mp4"
        />
      );
    });

    const videoElement = screen.getByTestId("video-element");
    expect(videoElement.style.opacity).toBe("0");
  });

  // Test opacity when showIntroducing is false
  test("video has opacity 1 when showIntroducing is false", async () => {
    await act(async () => {
      render(
        <Video
          videoRef={mockVideoRef}
          showIntroducing={false}
          fallbackVideoUrl="test.mp4"
        />
      );
    });

    const videoElement = screen.getByTestId("video-element");
    expect(videoElement.style.opacity).toBe("1");
  });

  // Additional test specifically for muted state
  test("video is muted", async () => {
    await act(async () => {
      render(
        <Video
          videoRef={mockVideoRef}
          showIntroducing={false}
          fallbackVideoUrl="test.mp4"
        />
      );
    });

    const videoElement = screen.getByTestId("video-element");
    expect(videoElement.muted).toBe(true);
  });
});
