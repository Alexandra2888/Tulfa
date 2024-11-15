import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from './Banner';
import { BannerContent } from './BannerContent';
import IntroducingOverlay from './IntroducingOverlay';

// Mock child components
jest.mock('./BannerContent', () => ({
  BannerContent: () => <div data-testid="banner-content">Mocked BannerContent</div>
}));

jest.mock('./IntroducingOverlay', () => ({
  __esModule: true,
  default: () => <div data-testid="introducing-overlay">Mocked IntroducingOverlay</div>
}));

describe('Banner Component', () => {
  it('renders without crashing', () => {
    render(<Banner />);
  });

  it('renders with correct wrapper elements', () => {
    const { container } = render(<Banner />);
    const sectionElement = container.querySelector('section');
    expect(sectionElement).toBeInTheDocument();
    expect(sectionElement).toHaveClass('relative w-full');
  });

  it('contains BannerContent component', () => {
    render(<Banner />);
    const bannerContent = screen.getByTestId('banner-content');
    expect(bannerContent).toBeInTheDocument();
  });

  it('contains IntroducingOverlay component', () => {
    render(<Banner />);
    const overlay = screen.getByTestId('introducing-overlay');
    expect(overlay).toBeInTheDocument();
  });

  it('has the correct HTML structure', () => {
    const { container } = render(<Banner />);
    const innerDiv = container.querySelector('section > div');
    expect(innerDiv).toHaveClass('relative');
  });

  it('sets up containerRef correctly', () => {
    const { container } = render(<Banner />);
    const divWithRef = container.querySelector('section > div');
    expect(divWithRef).toBeInTheDocument();
  });
});