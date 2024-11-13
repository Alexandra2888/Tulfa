import { renderHook, act } from "@testing-library/react";
import { useImagePreloader } from "./useImagePreloader";

// Mock window properties
global.window = Object.create(window);
Object.defineProperty(window, "innerHeight", { value: 800 });

describe("useImagePreloader", () => {
  const mockImageUrls = ["image1.jpg", "image2.jpg", "image3.jpg"];
  const mockConfig = {
    maxRetries: 3,
    retryDelay: 1000,
  };

  beforeEach(() => {
    // Reset Image constructor mock before each test
    global.Image = class {
      constructor() {
        setTimeout(() => {
          this.onload && this.onload();
        }, 100);
      }
    };
    console.error = jest.fn();
    console.log = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should initialize with correct default values", () => {
    const { result } = renderHook(() =>
      useImagePreloader(mockImageUrls, mockConfig)
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.useFallbackVideo).toBe(false);
    expect(result.current.loadedImages.size).toBe(0);
    expect(result.current.loadingProgress).toBe(0);
  });

  test("should load images successfully", async () => {
    const { result } = renderHook(() =>
      useImagePreloader(mockImageUrls, mockConfig)
    );

    // Wait for images to load
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 150));
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.loadedImages.size).toBe(mockImageUrls.length);
    expect(result.current.loadingProgress).toBe(100);
  });

  test("should handle cache for previously loaded images", async () => {
    const { result, rerender } = renderHook(() =>
      useImagePreloader(mockImageUrls, mockConfig)
    );

    // Wait for initial load
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 150));
    });

    // Rerender with same URLs
    rerender();

    expect(result.current.loadedImages.size).toBe(mockImageUrls.length);
    expect(result.current.loadingProgress).toBe(100);
  });
});
