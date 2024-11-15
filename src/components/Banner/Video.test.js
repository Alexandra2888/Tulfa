import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Video from './Video';
import { S3_CONFIG } from "../../config/bannerConfig.js";

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;

describe('Video Component', () => {
  let mockPlay;
  let mockPause;

  beforeEach(() => {
    // Mock video element methods
    mockPlay = jest.fn();
    mockPause = jest.fn();
    window.HTMLMediaElement.prototype.play = mockPlay;
    window.HTMLMediaElement.prototype.pause = mockPause;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders video element with correct attributes', () => {
    render(<Video />);
    const videoElement = screen.getByTestId('video-element');

    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('autoPlay');
    expect(videoElement).toHaveAttribute('playsInline');
    expect(videoElement).toHaveAttribute('loop');
  });

  it('renders video source with correct URL', () => {
    render(<Video />);
    const sourceElement = screen.getByTestId('video-element').querySelector('source');

    expect(sourceElement).toHaveAttribute('src', S3_CONFIG.fallbackVideoUrl);
    expect(sourceElement).toHaveAttribute('type', 'video/mp4');
  });

  it('creates IntersectionObserver with correct configuration', () => {
    render(<Video />);

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
        expect.any(Function),
        { threshold: 1 }
    );
  });

  it('plays video when it becomes visible', () => {
    render(<Video />);

    // Get the callback passed to IntersectionObserver
    const [[callback]] = mockIntersectionObserver.mock.calls;

    // Simulate intersection
    callback([{ isIntersecting: true }]);

    expect(mockPlay).toHaveBeenCalled();
  });

  it('pauses video when it becomes invisible', () => {
    render(<Video />);

    // Get the callback passed to IntersectionObserver
    const [[callback]] = mockIntersectionObserver.mock.calls;

    // Simulate intersection
    callback([{ isIntersecting: false }]);

    expect(mockPause).toHaveBeenCalled();
  });

  it('cleans up observer on unmount', () => {
    const { unmount } = render(<Video />);
    const unobserveSpy = mockIntersectionObserver.mock.results[0].value.unobserve;

    unmount();

    expect(unobserveSpy).toHaveBeenCalled();
  });
});