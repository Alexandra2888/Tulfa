import { useRef, useState } from "react";
import { BannerContent } from "./BannerContent";

import IntroducingOverlay from "./IntroducingOverlay.jsx";

const Banner = () => {
    const containerRef = useRef(null);

    return (
        <section className="relative w-full" data-testid="banner-section">
            <div ref={containerRef} className="relative" data-testid="banner-container">
                <BannerContent />
            </div>
            <IntroducingOverlay
                data-id="banner-introducing-overlay"
            />
        </section>
    );
};

export default Banner;