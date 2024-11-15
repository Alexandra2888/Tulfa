import React from 'react';
import { render, screen } from '@testing-library/react';
import IntroducingOverlay from './IntroducingOverlay';

describe('IntroducingOverlay', () => {
  it('renders the overlay container', () => {
    render(<IntroducingOverlay />);
    const overlay = screen.getByTestId('introducing-overlay');
    expect(overlay).toBeInTheDocument();
  });

  it('renders with correct height and flex styling', () => {
    render(<IntroducingOverlay />);
    const overlay = screen.getByTestId('introducing-overlay');
    expect(overlay).toHaveClass('h-screen', 'flex', 'items-center', 'justify-center');
  });

  it('renders the overlay container with correct width and padding', () => {
    render(<IntroducingOverlay />);
    const container = screen.getByTestId('overlay-container');
    expect(container).toHaveClass('w-full', 'max-w-6xl', 'mx-auto', 'px-8', 'py-16');
  });

  it('renders the image with correct attributes', () => {
    render(<IntroducingOverlay />);
    const image = screen.getByTestId('overlay-image');

    expect(image).toHaveAttribute('src', 'https://res.cloudinary.com/dnpjmrdik/image/upload/v1731232248/tulfa/Banner%20Videos/introducing_jotvfv.png');
    expect(image).toHaveAttribute('alt', 'Introducing');
    expect(image).toHaveClass('w-full', 'max-w-2xl', 'mx-auto');
  });

  it('applies transition style to the image', () => {
    render(<IntroducingOverlay />);
    const image = screen.getByTestId('overlay-image');

    expect(image).toHaveStyle({
      transition: 'transform 1s ease-in-out'
    });
  });
});