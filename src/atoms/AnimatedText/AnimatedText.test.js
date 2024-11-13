import { render, act, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AnimatedText from "./AnimatedText";

describe("AnimatedGradientText", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
  });

  test("renders with initial gradient", () => {
    render(<AnimatedText />);
    const heading = screen.getByText("Virtual Product Photography");

    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H1");
    expect(heading).toHaveStyle({
      backgroundImage: "linear-gradient(to right, #433E98, #643B9B)",
    });
  });

  test("updates gradient color after interval", () => {
    render(<AnimatedText />);
    const heading = screen.getByText("Virtual Product Photography");

    // Move forward by 400ms
    act(() => {
      jest.advanceTimersByTime(400);
    });

    expect(heading).toHaveStyle({
      backgroundImage: "linear-gradient(to right, #643B9B, #813599)",
    });
  });

  test("cycles through all gradients", () => {
    render(<AnimatedText />);
    const heading = screen.getByText("Virtual Product Photography");

    // Test first few gradient transitions
    const expectedGradients = [
      "linear-gradient(to right, #433E98, #643B9B)",
      "linear-gradient(to right, #643B9B, #813599)",
      "linear-gradient(to right, #813599, #9C2C93)",
    ];

    expectedGradients.forEach((gradient, index) => {
      if (index > 0) {
        act(() => {
          jest.advanceTimersByTime(400);
        });
      }
      expect(heading).toHaveStyle({
        backgroundImage: gradient,
      });
    });
  });

  test("applies responsive text classes", () => {
    render(<AnimatedText />);
    const heading = screen.getByText("Virtual Product Photography");

    expect(heading).toHaveClass("text-3xl", "sm:text-4xl", "md:text-5xl");
  });

  test("cleans up interval on unmount", () => {
    const clearIntervalSpy = jest.spyOn(window, "clearInterval");
    const { unmount } = render(<AnimatedText />);

    unmount();

    expect(clearIntervalSpy).toHaveBeenCalled();
    clearIntervalSpy.mockRestore();
  });
});
