import { renderHook } from "@testing-library/react";
import { useVideoScroll } from "./useVideoScroll";

describe("useVideoScroll", () => {
  // Mock refs
  const mockVideoRef = {
    current: {
      play: jest.fn().mockResolvedValue(undefined),
      pause: jest.fn(),
      duration: 10,
      currentTime: 0,
    },
  };

  const mockContainerRef = {
    current: {
      getBoundingClientRect: jest.fn().mockReturnValue({
        top: 0,
        height: 2000,
      }),
    },
  };

  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();

    // Mock window properties
    window.innerHeight = 1000;
    window.scrollY = 0;

    // Mock console.log
    console.log = jest.fn();
  });

  test("should initialize with showIntroducing as false", () => {
    const { result } = renderHook(() =>
      useVideoScroll(mockContainerRef, mockVideoRef, true)
    );

    expect(result.current.showIntroducing).toBe(false);
  });

  test("should expose controlVideoPlayback function", () => {
    const { result } = renderHook(() =>
      useVideoScroll(mockContainerRef, mockVideoRef, true)
    );

    expect(typeof result.current.controlVideoPlayback).toBe("function");
  });

  test("should attempt to play video on initial render", () => {
    renderHook(() => useVideoScroll(mockContainerRef, mockVideoRef, true));
    expect(mockVideoRef.current.play).toHaveBeenCalled();
  });

  test("should not initialize video when useFallbackVideo is false", () => {
    renderHook(() => useVideoScroll(mockContainerRef, mockVideoRef, false));
    expect(mockVideoRef.current.play).not.toHaveBeenCalled();
  });

  test("controlVideoPlayback should call play when true", () => {
    const { result } = renderHook(() =>
      useVideoScroll(mockContainerRef, mockVideoRef, true)
    );

    // Clear initial play call
    mockVideoRef.current.play.mockClear();

    result.current.controlVideoPlayback(true);
    expect(mockVideoRef.current.play).toHaveBeenCalled();
  });

  test("controlVideoPlayback should call pause when false", () => {
    const { result } = renderHook(() =>
      useVideoScroll(mockContainerRef, mockVideoRef, true)
    );

    result.current.controlVideoPlayback(false);
    expect(mockVideoRef.current.pause).toHaveBeenCalled();
  });
});
