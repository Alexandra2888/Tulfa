// FabricVar.test.jsx
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FabricVar from "./FabricVar";

// Mock the data import 
jest.mock("../../data/data", () => ({
  fabrics: [
    {
      id: "fabric1",
      name: "Cotton Blend",
      couchImage: "/images/couch-cotton.jpg",
      fabricPiece: "/images/fabric-cotton.jpg",
    },
    {
      id: "fabric2",
      name: "Velvet",
      couchImage: "/images/couch-velvet.jpg",
      fabricPiece: "/images/fabric-velvet.jpg",
    },
  ],
}));

describe("FabricVar Component", () => {
  test("renders without crashing", () => {
    render(<FabricVar />);
    // Basic check that component renders
    expect(document.querySelector("section")).toBeInTheDocument();
  });

  test("displays couch image", () => {
    render(<FabricVar />);
    const couchImage = screen.getByAltText(/couch$/i);
    expect(couchImage).toBeInTheDocument();
  });

  test("displays fabric detail image", () => {
    render(<FabricVar />);
    const fabricImage = screen.getByAltText(/fabric detail$/i);
    expect(fabricImage).toBeInTheDocument();
  });

  test("shows and hides options on hover", () => {
    render(<FabricVar />);
    const fabricDetailSection =
      screen.getByAltText(/fabric detail$/i).parentElement;

    // Initially, Velvet option should not be visible
    expect(screen.queryByText("Velvet")).not.toBeInTheDocument();

    // Show options
    fireEvent.mouseEnter(fabricDetailSection);
    expect(screen.getByText("Velvet")).toBeInTheDocument();

    // Hide options
    fireEvent.mouseLeave(fabricDetailSection);
    expect(screen.queryByText("Velvet")).not.toBeInTheDocument();
  });
});
