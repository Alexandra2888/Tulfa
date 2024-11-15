import React from 'react';
import { useScrollScale } from '../../hooks/useScrollScale.js';

const Lifestyle = () => {
    const zoomRef = useScrollScale({
        maxScale: 1.3,
        initialScale: 1
    });

    return (
        <section className="relative w-full h-screen isolate overflow-hidden">
            <div
                ref={zoomRef}
                className="absolute inset-0 z-0"
                style={{
                    willChange: 'transform',
                    transformOrigin: 'center',
                }}
            >
                <div
                    className="w-full h-full bg-cover"
                    style={{
                        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('https://res.cloudinary.com/dnpjmrdik/image/upload/v1731232064/tulfa/Lifestyle%20CTA/modern-living-room-with-soft-furniture-2023-11-27-05-04-10-utc_xzb7tp.jpg')`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    data-testid="background-div"
                />
            </div>

            <div className="relative z-10 h-full flex items-start md:items-center">
                <div className="w-full px-8 pt-20 md:pt-0 xl:pt-16">
                    <h1 className="text-white text-6xl font-semibold md:pl-64 xl:pl-96">
                        Lifestyle Scenes
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Lifestyle;