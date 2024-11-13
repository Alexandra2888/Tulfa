import { useState } from "react";
import Button from "../../atoms/Button/Button";
import { variants } from "../../data/data";

const ColorVar = () => {
  const [selectedColor, setSelectedColor] = useState("orange");

  const ColorSelector = ({ isDesktop = false }) => (
    <div
      data-testid={`color-selector-${isDesktop ? "desktop" : "mobile"}`}
      className={`${
        isDesktop ? "hidden md:flex" : "flex md:hidden"
      } gap-3 mt-8`}
    >
      {Object.entries(variants).map(([colorKey, colorData]) => (
        <Button
          key={colorKey}
          onClick={() => setSelectedColor(colorKey)}
          className={`w-6 h-6 rounded-full hover:scale-110 transition-transform ${
            selectedColor === colorKey
              ? "ring-2 ring-offset-2 ring-gray-400"
              : ""
          }`}
          style={{
            background: `linear-gradient(135deg, ${colorData.gradient[0]} 0%, ${colorData.gradient[1]} 100%)`,
          }}
          aria-label={`Select ${colorKey} color`}
          data-testid={`color-button-${colorKey}`}
        />
      ))}
    </div>
  );

  return (
    <section className="w-full h-full bg-white" data-testid="color-var-section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-8xl mx-auto">
        {/* Left Section */}
        <div className="relative flex flex-col items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-xl aspect-square relative">
            <img
              src={variants[selectedColor].images[0]}
              alt="Main view"
              className="w-full h-full object-contain"
              data-testid="main-image"
            />
          </div>
          <ColorSelector isDesktop={true} />
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col items-center justify-center p-4 md:p-8 bg-[#F0F3FB] overflow-hidden">
          <div className="w-full aspect-square relative">
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full">
                <img
                  src={variants[selectedColor].images[1]}
                  alt="Secondary view"
                  className="w-full h-full object-contain
                    transform scale-[2]
                    md:w-[200%] md:h-full md:object-cover md:object-left-top
                    md:scale-125 md:translate-x-1/4
                    lg:scale-[1.5] lg:translate-x-1/3
                    xl:scale-[1.5] xl:translate-x-1/2"
                  data-testid="secondary-image"
                />
              </div>
            </div>
          </div>
          <ColorSelector isDesktop={false} />
        </div>
      </div>
    </section>
  );
};

export default ColorVar;
