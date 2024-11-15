import { useState, useEffect } from "react";

export const useZoom = ({
                     startScale = 1,
                     endScale = 1.5,
                     scrollStart = 0,
                     scrollEnd = 0.75,
                     targetSelector = '.scroll-section'
                 }) => {
    const [scale, setScale] = useState(startScale);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector(targetSelector);
            if (!section) return;

            // Get scroll position relative to the section
            const sectionRect = section.getBoundingClientRect();
            const sectionTop = sectionRect.top + window.scrollY;
            const scrollDistance = window.scrollY - sectionTop;
            const totalDistance = section.offsetHeight - window.innerHeight;

            // Calculate progress (0 to 1)
            const progress = Math.max(0, Math.min(1, scrollDistance / totalDistance));

            // Apply scroll start/end thresholds
            const adjustedProgress = Math.max(0, Math.min(1,
                (progress - scrollStart) / (scrollEnd - scrollStart)
            ));

            // Calculate scale based on scroll progress
            const newScale = startScale + (adjustedProgress * (endScale - startScale));
            setScale(newScale);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initialize scale on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, [startScale, endScale, scrollStart, scrollEnd, targetSelector]);

    return scale;
};

export default useZoom;