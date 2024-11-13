import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductSilo from "./ProductSilo";

// Jest mocks
jest.mock("swiper/css", () => ({}));
jest.mock("swiper/css/navigation", () => ({}));
jest.mock("swiper/css/pagination", () => ({}));

// Mock for Modal
jest.mock("react-modal", () => {
  const Modal = function MockModal() {
    return null;
  };
  Modal.setAppElement = jest.fn();
  return Modal;
});

// Simple mock for Title
jest.mock("../../atoms/Title/Title", () => {
  return function MockTitle() {
    return <h1>Product Silos</h1>;
  };
});

// Simple mock for Button
jest.mock("../../atoms/Button/Button", () => {
  return function MockButton({ children }) {
    return <button>{children}</button>;
  };
});

// Mock images data
jest.mock("../../data/data", () => ({
  images: [{ id: 1, url: "/image1.jpg", alt: "Image 1" }],
}));

// Minimal mocks for Swiper
jest.mock("swiper/react", () => ({
  Swiper: () => null,
  SwiperSlide: () => null,
}));

jest.mock("swiper/modules", () => ({
  Navigation: jest.fn(),
  Pagination: jest.fn(),
  Controller: jest.fn(),
}));

// Mock lucide-react
jest.mock("lucide-react", () => ({
  X: () => <span>X</span>,
}));

describe("ProductSilo", () => {
  test("renders the section", () => {
    render(<ProductSilo />);
    const section = screen.getByTestId("product-silo-section");
    expect(section).toBeInTheDocument();
  });

  test("renders the main image", () => {
    render(<ProductSilo />);
    const image = screen.getByTestId("main-product-image");
    expect(image).toBeInTheDocument();
  });

  test("renders the title", () => {
    render(<ProductSilo />);
    expect(screen.getByText("Product Silos")).toBeInTheDocument();
  });

  test("renders the 'Take a closer look' button", () => {
    render(<ProductSilo />);
    expect(screen.getByText("Take a closer look")).toBeInTheDocument();
  });
});
