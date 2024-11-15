import React from "react";
import { render, screen } from "@testing-library/react";
import Description from "./Description";

describe("Description Component", () => {
  const sampleText = "This is a sample description text";

  test("renders the text passed as prop", () => {
    render(<Description text={sampleText} />);
    expect(screen.getByText(sampleText)).toBeInTheDocument();
  });

  test("uses default styles when no className is provided", () => {
    render(<Description text={sampleText} />);
    const paragraph = screen.getByText(sampleText);

    const defaultStyles = [
      "text-center",
      "text-[#2A266A]",
      "mx-auto",
      "font-normal",
      "leading-relaxed",
      "px-12",
      "xl:px-36",
      "py-24",
      "md:py-16",
      "xl:py-24",
      "xl:max-w-5xl",
      "text-[1.05881rem]"
    ];

    defaultStyles.forEach((style) => {
      expect(paragraph.className).toContain(style);
    });
  });

  test("uses custom className when provided", () => {
    const customClass = "custom-test-class";
    render(<Description text={sampleText} className={customClass} />);
    const paragraph = screen.getByText(sampleText);

    expect(paragraph.className).toBe(customClass);
    // Verify default styles are not applied
    expect(paragraph.className).not.toContain("text-center");
  });

  test("renders empty paragraph when no text is provided", () => {
    render(<Description />);
    const paragraph = screen.getByRole("paragraph");
    expect(paragraph.textContent).toBe("");
  });
});
