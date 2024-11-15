import { useRef, useEffect } from 'react';

export const useScrollScale = ({ maxScale = 1.2, initialScale = 1 } = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              element.style.transform = `scale(${initialScale})`;
              return;
            }

            const ratio = entry.intersectionRatio;
            const scale = initialScale + (maxScale - initialScale) * ratio;
            element.style.transform = `scale(${scale})`;
          });
        },
        {
          threshold: Array.from({ length: 100 }, (_, i) => i / 100),
          root: null,
          rootMargin: "0px"
        }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [maxScale, initialScale]);

  return ref;
};