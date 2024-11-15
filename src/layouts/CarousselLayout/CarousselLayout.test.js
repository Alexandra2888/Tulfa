import { render } from '@testing-library/react';
import CarousselLayout from './CarousselLayout';

// Basic mocks
jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div data-testid="swiper">{children}</div>,
  SwiperSlide: ({ children }) => <div data-testid="slide">{children}</div>
}));

jest.mock('lucide-react', () => ({
  ChevronUp: () => <div>Up</div>,
  ChevronDown: () => <div>Down</div>
}));

jest.mock('swiper/css', () => ({}));

// Mock the atomic components
jest.mock('../../atoms/Title/Title', () => function MockTitle() {
  return <div>Title</div>;
});

jest.mock('../../atoms/Description/Description', () => function MockDescription() {
  return <div>Description</div>;
});

jest.mock('../../atoms/Button/Button', () => function MockButton({ children }) {
  return <button>{children}</button>;
});

describe('CarouselLayout', () => {
  const mockProps = {
    title: 'Test Title',
    slides: [
      { id: 1, image: 'test1.jpg', alt: 'Test 1' }
    ]
  };

  it('renders without crashing', () => {
    render(<CarousselLayout {...mockProps} />);
  });
});