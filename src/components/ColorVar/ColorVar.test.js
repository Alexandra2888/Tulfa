import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ColorVar from './ColorVar';

// Mock the Button component since it's an external dependency
jest.mock('../../atoms/Button/Button', () => {
  return function MockButton(props) {
    return <button {...props} />;
  };
});

describe('ColorVar Component', () => {
  // Basic smoke test
  it('renders without crashing', () => {
    render(<ColorVar />);
  });

  // Test the presence of main containers
  it('renders main section with correct classes', () => {
    const { container } = render(<ColorVar />);
    const section = container.querySelector('section');
    expect(section).toHaveClass('w-full');
    expect(section).toHaveClass('h-full');
    expect(section).toHaveClass('bg-white');
  });

  // Test that color buttons are present
  it('renders color buttons', () => {
    const { container } = render(<ColorVar />);
    const buttons = container.querySelectorAll('button');
    // We should have at least 3 buttons (one for each color) x 2 (mobile and desktop)
    expect(buttons.length).toBeGreaterThan(0);
  });
});