import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ImageContent } from "./ImageContent";

describe("ImageContent", () => {
  const mockImageUrls = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
  ];

  it("renders an image with correct src from imageUrls array", () => {
    render(
      <ImageContent
        currentFrame={0}
        imageUrls={mockImageUrls}
        showIntroducing={false}
        data-testid="image-content"
      />
    );

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockImageUrls[0]);
  });

  it("displays correct alt text with frame number", () => {
    render(
      <ImageContent
        currentFrame={0}
        imageUrls={mockImageUrls}
        showIntroducing={false}
        data-testid="image-content"
      />
    );

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt", "Frame 1");
  });

  it("applies correct opacity style when showIntroducing is true", () => {
    render(
      <ImageContent
        currentFrame={0}
        imageUrls={mockImageUrls}
        showIntroducing={true}
        data-testid="image-content"
      />
    );

    const image = screen.getByRole("img");
    expect(image).toHaveStyle({ opacity: 0 });
  });

  it("applies correct opacity style when showIntroducing is false", () => {
    render(
      <ImageContent
        currentFrame={0}
        imageUrls={mockImageUrls}
        showIntroducing={false}
        data-testid="image-content"
      />
    );

    const image = screen.getByRole("img");
    expect(image).toHaveStyle({ opacity: 1 });
  });

  it("updates image when currentFrame changes", () => {
    const { rerender } = render(
      <ImageContent
        currentFrame={0}
        imageUrls={mockImageUrls}
        showIntroducing={false}
        data-testid="image-content"
      />
    );

    let image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockImageUrls[0]);

    // Rerender with different currentFrame
    rerender(
      <ImageContent
        currentFrame={1}
        imageUrls={mockImageUrls}
        showIntroducing={false}
        data-testid="image-content"
      />
    );

    image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockImageUrls[1]);
  });

  it("applies correct transition style", () => {
    render(
      <ImageContent
        currentFrame={0}
        imageUrls={mockImageUrls}
        showIntroducing={false}
        data-testid="image-content"
      />
    );

    const image = screen.getByRole("img");
    expect(image).toHaveStyle({
      transition: "opacity 0.5s ease-in-out",
    });
  });

  it("applies correct CSS classes", () => {
    render(
      <ImageContent
        currentFrame={0}
        imageUrls={mockImageUrls}
        showIntroducing={false}
        data-testid="image-content"
      />
    );

    const image = screen.getByRole("img");
    expect(image).toHaveClass("w-full", "h-full", "object-cover");
  });
});
