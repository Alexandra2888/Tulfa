import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FabricVar from './FabricVar';

// Simple mock for the fabrics data
jest.mock('../../data/data', () => ({
  fabrics: [
    {
      id: 1,
      name: "Test Fabric",
      couchImage: "/test-couch.jpg",
      fabricPiece: "/test-fabric.jpg"
    }
  ]
}));

// Mock Button component since it's an external dependency
jest.mock('../../atoms/Button/Button', () => {
  return function MockButton(props) {
    return <button {...props}>{props.children}</button>;
  };
});

describe('FabricVar Component', () => {
  test('renders without crashing', () => {
    const { container } = render(<FabricVar />);
    expect(container).toBeTruthy();
  });

  test('renders the section with correct test id', () => {
    const { getByTestId } = render(<FabricVar />);
    expect(getByTestId('fabric-var-section')).toBeInTheDocument();
  });

  test('renders mobile couch image', () => {
    const { getByTestId } = render(<FabricVar />);
    const image = getByTestId('couch-image-mobile');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test-couch.jpg');
  });
});