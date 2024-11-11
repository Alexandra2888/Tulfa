import { useState } from "react";
import Button from "../../atoms/Button/Button";

const ColorVariantViewer = () => {
  const [selectedColor, setSelectedColor] = useState("orange");

  const variants = {
    orange: {
      images: [
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231394/tulfa/Color%20Var/orange-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-12-utc-Photoroom_x0h4ji.png",
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231394/tulfa/Color%20Var/orange-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-12-utc-Photoroom_x0h4ji.png",
      ],
      gradient: ["#BD6C15", "#C47C4D"],
    },
    purple: {
      images: [
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231403/tulfa/Color%20Var/violet-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-01-16-utc-Photoroom_ykfdri.png",
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231403/tulfa/Color%20Var/violet-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-01-16-utc-Photoroom_ykfdri.png",
      ],
      gradient: ["#433E99", "#766BA0"],
    },
    yellow: {
      images: [
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231410/tulfa/Color%20Var/yellow-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-07-utc-Photoroom_vr0nio.png",
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231410/tulfa/Color%20Var/yellow-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-07-utc-Photoroom_vr0nio.png",
      ],
      gradient: ["#B4AC37", "#B5AA65"],
    },
  };

  return (
    <div className="w-full h-screen bg-white">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 max-w-8xl mx-auto">
        {/* Left Section */}
        <div className="relative flex flex-col items-center justify-center p-8">
          <div className="w-full max-w-xl aspect-square relative">
            <img
              src={variants[selectedColor].images[0]}
              alt="Main view"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Color selector for larger screens */}
          <div className="hidden xl:flex gap-3 mt-8">
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
              />
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col items-center justify-center p-8 bg-[#F0F3FB]">
          <div className="w-full max-w-none xl:max-w-4xl aspect-square relative -ml-32">
            <img
              src={variants[selectedColor].images[1]}
              alt="Secondary view"
              className="w-full h-full object-contain scale-[2.25] ml-5 xl:ml-96 xl:scale-125"
            />
          </div>
          {/* Color selector for mobile screens */}
          <div className="flex xl:hidden gap-3 mt-8">
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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorVariantViewer;
