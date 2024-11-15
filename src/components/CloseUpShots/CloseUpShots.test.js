import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CloseUpShots from './CloseUpShots';

// Mock the imported components
jest.mock('../../atoms/Title/Title', () => {
  return function MockTitle({ text }) {
    return <div data-testid="mock-title">{text}</div>;
  };
});

jest.mock('../../atoms/Description/Description', () => {
  return function MockDescription({ text }) {
    return <div data-testid="mock-description">{text}</div>;
  };
});

jest.mock('../../atoms/Button/Button', () => {
  return function MockButton({ children, onClick }) {
    return (
        <button data-testid="mock-button" onClick={onClick}>
          {children}
        </button>
    );
  };
});

jest.mock('./GalleryModal', () => {
  return function MockGalleryModal({ isOpen, onClose }) {
    return isOpen ? (
        <div data-testid="mock-gallery-modal">
          <button onClick={onClose}>Close</button>
        </div>
    ) : null;
  };
});

// Mock the useZoom hook
jest.mock('../../hooks/useZoom', () => {
  return jest.fn(() => 1.5);
});

describe('CloseUpShots', () => {
  it('renders without crashing', () => {
    render(<CloseUpShots />);
    expect(screen.getByTestId('mock-title')).toBeInTheDocument();
  });

  it('displays the correct title text', () => {
    render(<CloseUpShots />);
    expect(screen.getByTestId('mock-title')).toHaveTextContent('Close Up Shots');
  });

  it('displays the correct description text', () => {
    render(<CloseUpShots />);
    expect(screen.getByTestId('mock-description')).toHaveTextContent(
        'Give your customers a clear view of how your furniture fits into their space with precise dimensions and scale indicators.'
    );
  });

  it('shows the close-up image', () => {
    render(<CloseUpShots />);
    const images = screen.getAllByAltText('Couch close-up');
    expect(images.length).toBe(2); // There are two identical images in the component
    expect(images[0]).toBeInTheDocument();
  });

  it('displays the "Take a closer look" button', () => {
    render(<CloseUpShots />);
    const button = screen.getByTestId('mock-button');
    expect(button).toHaveTextContent('Take a closer look');
  });

  it('opens the modal when clicking the button', () => {
    render(<CloseUpShots />);
    const button = screen.getByTestId('mock-button');

    // Modal should not be visible initially
    expect(screen.queryByTestId('mock-gallery-modal')).not.toBeInTheDocument();

    // Click the button
    fireEvent.click(button);

    // Modal should now be visible
    expect(screen.getByTestId('mock-gallery-modal')).toBeInTheDocument();
  });

  it('closes the modal when clicking the close button', () => {
    render(<CloseUpShots />);

    // Open the modal
    const button = screen.getByTestId('mock-button');
    fireEvent.click(button);

    // Click the close button in the modal
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);

    // Modal should no longer be visible
    expect(screen.queryByTestId('mock-gallery-modal')).not.toBeInTheDocument();
  });
});