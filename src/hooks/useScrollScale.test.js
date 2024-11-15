import { renderHook } from '@testing-library/react';
import { useScrollScale } from './useScrollScale';

describe('useScrollScale', () => {
  it('should return a ref object', () => {
    const { result } = renderHook(() => useScrollScale());
    expect(result.current).toBeDefined();
  });

  it('should accept custom parameters', () => {
    const { result } = renderHook(() =>
        useScrollScale({ maxScale: 1.5, initialScale: 0.8 })
    );
    expect(result.current).toBeDefined();
  });
});