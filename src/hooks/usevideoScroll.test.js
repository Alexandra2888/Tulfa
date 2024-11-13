import { renderHook, act } from "@testing-library/react";
import { useVideoScroll } from "./useVideoScroll";

// Mock window properties
const mockWindow = {
  innerHeight: 800,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
};

global.window = Object.create(window);
Object.defineProperty(window, "innerHeight", { value: mockWindow.innerHeight });
window.addEventListener = mockWindow.addEventListener;
window.removeEventListener = mockWindow.removeEventListener;

describe("useVideoScroll", () => {
  const mockVideoRef = {
    current: {
      duration: 10,
      currentTime: 0,
    },
  };

  const mockContainerRef = {
    current: {
      getBoundingClientRect: jest.fn(() => ({
        top: 0,
        height: 1000,
      })),
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockVideoRef.current.currentTime = 0;
  });

  test("should initialize with showing introducing as false", () => {
    const { result } = renderHook(() =>
      useVideoScroll(mockContainerRef, mockVideoRef, true)
    );

    expect(result.current.showIntroducing).toBe(false);
  });

  test("should not attach scroll listener when useFallbackVideo is false", () => {
    renderHook(() => useVideoScroll(mockContainerRef, mockVideoRef, false));
    expect(window.addEventListener).not.toHaveBeenCalled();
  });

  test("should attach and detach scroll listener when useFallbackVideo is true", () => {
    const { unmount } = renderHook(() =>
      useVideoScroll(mockContainerRef, mockVideoRef, true)
    );

    expect(window.addEventListener).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function)
    );

    unmount();

    expect(window.removeEventListener).toHaveBeenCalledWith(
      "scroll",
      expect.any(Function)
    );
  });


  test("should show introducing near end of video", () => {
    const { result } = renderHook(() =>
      useVideoScroll(mockContainerRef, mockVideoRef, true)
    );

    // Get the scroll handler
    const scrollHandler = window.addEventListener.mock.calls[0][1];

    // Simulate scroll to near end
    mockContainerRef.current.getBoundingClientRect.mockReturnValue({
      top: -980,
      height: 1000,
    });

    act(() => {
      scrollHandler();
    });

    expect(result.current.showIntroducing).toBe(true);
  });
});
