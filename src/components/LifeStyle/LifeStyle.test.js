import React from 'react';
import { render, screen } from '@testing-library/react';
import Lifestyle from './Lifestyle';
import { useScrollScale } from '../../hooks/useScrollScale.js';

// Mock the custom hook
jest.mock('../../hooks/useScrollScale.js');

describe('Lifestyle', () => {
  const mockRef = { current: document.createElement('div') };

  beforeEach(() => {
    useScrollScale.mockReturnValue(mockRef);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders with correct layout classes', () => {
    const { container } = render(<Lifestyle />);
    const section = container.querySelector('section');
    const heading = screen.getByRole('heading', { level: 1 });

    expect(section).toHaveClass('relative', 'w-full', 'h-screen', 'isolate', 'overflow-hidden');
    expect(heading).toHaveClass('text-white', 'text-6xl', 'font-semibold');
  });

  it('calls useScrollScale with correct props', () => {
    render(<Lifestyle />);
    expect(useScrollScale).toHaveBeenCalledWith({
      maxScale: 1.3,
      initialScale: 1
    });
  });

  it('renders background div with correct styles', () => {
    render(<Lifestyle />);
    const bgDiv = screen.getByTestId('background-div');

    expect(bgDiv).toHaveStyle({
      backgroundImage: expect.stringContaining('modern-living-room'),
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    });
  });

  it('applies zoom ref to correct element', () => {
    const { container } = render(<Lifestyle />);
    const zoomElement = container.querySelector('.absolute.inset-0');

    expect(zoomElement).toBeInTheDocument();
    expect(zoomElement).toHaveStyle({
      willChange: 'transform',
      transformOrigin: 'center'
    });
  });
});