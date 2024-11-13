export const IntroducingOverlay = ({ showIntroducing }) => (
  <div
    className={`absolute inset-0 flex items-center justify-center bg-white
              transition-opacity duration-1000 ease-in-out
              ${
                showIntroducing
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
  >
    <div className="w-full max-w-6xl mx-auto px-8 py-16">
      <img
        src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731232248/tulfa/Banner%20Videos/introducing_jotvfv.png"
        alt="Introducing"
        className="w-full max-w-2xl mx-auto"
        style={{
          transform: showIntroducing ? "scale(1)" : "scale(0.95)",
          transition: "transform 1s ease-in-out",
        }}
      />
    </div>
  </div>
);
