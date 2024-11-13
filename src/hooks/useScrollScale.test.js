import { renderHook, act } from "@testing-library/react";
import { useScrollScale } from "./useScrollScale";

// Mock window properties and functions
const mockWindow = {
  innerHeight: 800,
  scrollY: 0,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
};

global.window = Object.create(window);
Object.defineProperty(window, "innerHeight", { value: mockWindow.innerHeight });
Object.defineProperty(window, "scrollY", {
  get: () => mockWindow.scrollY,
  set: (value) => {
    mockWindow.scrollY = value;
  },
});
window.addEventListener = mockWindow.addEventListener;
window.removeEventListener = mockWindow.removeEventListener;

describe("useScrollScale", () => {
  const defaultProps = {
    maxScale: 1.2,
    scrollRange: 800,
    initialScale: 1,
    scaleFactor: 0.5,
  };

  beforeEach(() => {
    window.scrollY = 0;
    jest.clearAllMocks();
  });

  test("should initialize with correct scale", () => {
    const { result } = renderHook(() => useScrollScale(defaultProps));
    expect(result.current).toBe(defaultProps.initialScale);
  });

  test("should attach and detach scroll listener", () => {
    const { unmount } = renderHook(() => useScrollScale(defaultProps));

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
});
