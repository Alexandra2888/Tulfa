const IntroducingOverlay = () => (
    <div
        data-testid="introducing-overlay"
        className="h-screen flex items-center justify-center z-50"
    >
        <div
            data-testid="overlay-container"
            className="w-full max-w-6xl mx-auto px-8 py-16"
        >
            <img
                data-testid="overlay-image"
                src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731232248/tulfa/Banner%20Videos/introducing_jotvfv.png"
                alt="Introducing"
                className="w-full max-w-2xl mx-auto"
                style={{
                    transition: "transform 1s ease-in-out",
                }}
            />
        </div>
    </div>
);

export default IntroducingOverlay;