import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

// Mock the LoadingSpinner component
jest.mock("./atoms/LoadingSpinner/LoadingSpinner.jsx", () => ({
  __esModule: true,
  default: () => <div data-testid="loading-spinner">Loading...</div>,
}));

// Simple mock for all lazy-loaded components
const mockComponent = (name) => {
  return {
    __esModule: true,
    default: () => <div data-testid={name}>{name}</div>,
  };
};

// Mock all lazy-loaded components
jest.mock("./components/Header/Header.jsx", () => mockComponent("Header"));
jest.mock("./components/DescriptionCto2/DescriptionCto2.jsx", () =>
  mockComponent("DescriptionCto2")
);
jest.mock("./components/DescriptionCto3/DescriptionCto3.jsx", () =>
  mockComponent("DescriptionCto3")
);
jest.mock("./components/ProductSilo/ProductSilo.jsx", () =>
  mockComponent("ProductSilo")
);
jest.mock("./components/SizeVar/SizeVar.jsx", () => mockComponent("SizeVar"));
jest.mock("./components/ColorVar/ColorVar.jsx", () =>
  mockComponent("ColorVar")
);
jest.mock("./components/FabricVar/FabricVar.jsx", () =>
  mockComponent("FabricVar")
);
jest.mock("./components/LifeStyle/LifeStyle.jsx", () =>
  mockComponent("LifeStyle")
);
jest.mock("./components/CloseUpShots/CloseUpShots.jsx", () =>
  mockComponent("CloseUpShots")
);
jest.mock("./components/Installation/Installation.jsx", () =>
  mockComponent("Installation")
);
jest.mock("./components/Dimensions/Dimensions.jsx", () =>
  mockComponent("Dimensions")
);
jest.mock("./components/Callout/Callout.jsx", () => mockComponent("Callout"));
jest.mock("./components/Footer/Footer.jsx", () => mockComponent("Footer"));

describe("App", () => {
  test("renders loading spinner", () => {
    render(<App />);
    const loadingSpinner = screen.getAllByTestId("loading-spinner")[0];
    expect(loadingSpinner).toBeInTheDocument();
  });

  test("renders main app structure", () => {
    render(<App />);
    // Check if the app renders without crashing
    expect(document.querySelector("div")).toBeInTheDocument();
  });
});
