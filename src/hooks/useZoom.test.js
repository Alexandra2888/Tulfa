import { renderHook } from '@testing-library/react';
import { useZoom } from './useZoom';

describe('useZoom', () => {
    // Mock DOM setup
    beforeEach(() => {
        // Mock window scrollY
        Object.defineProperty(window, 'scrollY', {
            value: 0,
            writable: true
        });

        // Mock window innerHeight
        Object.defineProperty(window, 'innerHeight', {
            value: 800,
            writable: true
        });

        // Mock target element
        document.querySelector = jest.fn().mockReturnValue({
            getBoundingClientRect: () => ({ top: 0 }),
            offsetHeight: 1000
        });
    });

    it('returns startScale initially', () => {
        const { result } = renderHook(() => useZoom({
            startScale: 1,
            endScale: 2
        }));

        expect(result.current).toBe(1);
    });

    it('uses default values when no props provided', () => {
        const { result } = renderHook(() => useZoom({}));

        expect(result.current).toBe(1);
    });

    it('handles missing target element', () => {
        document.querySelector = jest.fn().mockReturnValue(null);

        const { result } = renderHook(() => useZoom({
            startScale: 1,
            endScale: 2
        }));

        expect(result.current).toBe(1);
    });
});