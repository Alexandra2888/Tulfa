import { renderHook } from "@testing-library/react";
import { useScrollAnimation } from "./useScrollAnimation";

// Mock framer-motion's useAnimation
jest.mock("framer-motion", () => ({
  useAnimation: () => ({
    start: jest.fn(),
  }),
}));

describe("useScrollAnimation", () => {
  it("should return initial values", () => {
    const containerRef = { current: null };

    const { result } = renderHook(() =>
      useScrollAnimation(containerRef, 10, false)
    );

    expect(result.current.currentFrame).toBe(0);
    expect(result.current.showIntroducing).toBe(false);
    expect(result.current.animationControls).toBeTruthy();
  });

  it("should not update frame when useFallbackVideo is true", () => {
    const containerRef = { current: null };

    const { result } = renderHook(() =>
      useScrollAnimation(containerRef, 10, true)
    );

    expect(result.current.currentFrame).toBe(0);
    expect(result.current.showIntroducing).toBe(false);
  });

  it("should not update frame when containerRef is null", () => {
    const containerRef = { current: null };

    const { result } = renderHook(() =>
      useScrollAnimation(containerRef, 10, false)
    );

    expect(result.current.currentFrame).toBe(0);
    expect(result.current.showIntroducing).toBe(false);
  });
});
