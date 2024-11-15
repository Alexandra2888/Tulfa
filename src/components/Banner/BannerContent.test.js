import React from 'react';
import { render, screen } from '@testing-library/react';
import { BannerContent } from './BannerContent';
import Video from './Video';

// Mock the Video component
jest.mock('./Video', () => {
  return jest.fn(() => <div data-testid="mock-video">Mock Video</div>);
});

// Mock the LoadingProgress component since it's used but not imported
const LoadingProgress = jest.fn(() => <div data-testid="mock-loading">Loading...</div>);
global.LoadingProgress = LoadingProgress;

describe('BannerContent', () => {
  const defaultVideoProps = {
    src: 'test-video.mp4',
    autoPlay: true
  };

  const defaultLoadingProps = {
    progress: 50,
    text: 'Loading...'
  };

  beforeEach(() => {
    // Clear mock calls between tests
    Video.mockClear();
    LoadingProgress.mockClear();
  });

  it('renders loading state when isLoading is true', () => {
    render(
        <BannerContent
            isLoading={true}
            loadingProps={defaultLoadingProps}
            videoProps={defaultVideoProps}
        />
    );

    const loadingElement = screen.getByTestId('mock-loading');
    expect(loadingElement).toBeInTheDocument();
    expect(LoadingProgress).toHaveBeenCalledWith(
        expect.objectContaining(defaultLoadingProps),
        expect.any(Object)
    );
  });

  it('renders video when isLoading is false', () => {
    render(
        <BannerContent
            isLoading={false}
            loadingProps={defaultLoadingProps}
            videoProps={defaultVideoProps}
            showIntroducing={true}
        />
    );

    const videoElement = screen.getByTestId('mock-video');
    expect(videoElement).toBeInTheDocument();
    expect(Video).toHaveBeenCalledWith(
        expect.objectContaining({
          ...defaultVideoProps,
          showIntroducing: true
        }),
        expect.any(Object)
    );
  });

  it('renders the container with correct classes', () => {
    const { container } = render(
        <BannerContent
            isLoading={false}
            loadingProps={defaultLoadingProps}
            videoProps={defaultVideoProps}
        />
    );

    const bannerContainer = container.querySelector('[data-id="banner-content-container"]');
    expect(bannerContainer).toHaveClass('sticky', 'top-0', 'w-full', 'h-screen', 'overflow-hidden', 'bg-black');
  });

  it('passes showIntroducing prop correctly to Video component', () => {
    render(
        <BannerContent
            isLoading={false}
            loadingProps={defaultLoadingProps}
            videoProps={defaultVideoProps}
            showIntroducing={true}
        />
    );

    expect(Video).toHaveBeenCalledWith(
        expect.objectContaining({
          showIntroducing: true
        }),
        expect.any(Object)
    );
  });

  it('does not render Video component when loading', () => {
    render(
        <BannerContent
            isLoading={true}
            loadingProps={defaultLoadingProps}
            videoProps={defaultVideoProps}
        />
    );

    expect(Video).not.toHaveBeenCalled();
  });
});