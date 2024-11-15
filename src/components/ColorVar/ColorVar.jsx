import { useState } from "react";
import Button from "../../atoms/Button/Button";

const ColorVar = () => {
  const [selectedColor, setSelectedColor] = useState("orange");

  const variants = {
    orange: {
      color: "#BD6C15",
      images: ["https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231394/tulfa/Color%20Var/orange-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-12-utc-Photoroom_x0h4ji.png",
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231394/tulfa/Color%20Var/orange-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-12-utc-Photoroom_x0h4ji.png"]
    },
    purple: {
      color: "#433E99",
      images: ["https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231403/tulfa/Color%20Var/violet-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-01-16-utc-Photoroom_ykfdri.png",
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231403/tulfa/Color%20Var/violet-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-01-16-utc-Photoroom_ykfdri.png"]
    },
    green: {
      color: "#B4AC37",
      images: ["https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231410/tulfa/Color%20Var/yellow-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-07-utc-Photoroom_vr0nio.png",
        "https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231410/tulfa/Color%20Var/yellow-sofa-with-pillows-isolated-on-white-backgro-2023-11-27-05-21-07-utc-Photoroom_vr0nio.png"]
    }
  };

  const ColorSelector = ({ isDesktop = false }) => (
      <div
          data-testid={`color-selector-${isDesktop ? "desktop" : "mobile"}`}
          className={`${
              isDesktop ? "hidden md:flex" : "flex md:hidden"
          } p-[0.73rem] justify-center items-center gap-[0.367rem]`}
          style={{
            borderRadius: "36.73px"
          }}
      >
        {Object.entries(variants).map(([colorKey, variant]) => (
            <Button
                key={colorKey}
                onClick={() => setSelectedColor(colorKey)}
                className={`w-[1.84rem] h-[1.84rem] rounded-full hover:scale-110 transition-transform relative overflow-hidden
            ${selectedColor === colorKey ? "ring-2 ring-offset-2" : ""}
          `}
                style={{
                  background: variant.color,
                }}
                aria-label={`Select ${colorKey} color`}
                data-testid={`color-button-${colorKey}`}
            >
              <div
                  className="absolute top-0 left-0 w-full h-1/2"
                  style={{
                    backgroundColor: variant.color,
                    opacity: "50%"
                  }}
              />
            </Button>
        ))}
      </div>
  );

  return (
      <section className="w-full h-full bg-white" data-testid="color-var-section">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Mobile Layout */}
          <div className="flex flex-col md:hidden w-full">
            {/* First sofa image */}
            <div className="w-full mb-4">
              <div className="aspect-[4/3] w-full">
                <img
                    src={variants[selectedColor].images[0]}
                    alt="Full sofa view"
                    className="w-full h-full object-contain"
                    data-testid="main-image-mobile"
                />
              </div>
            </div>

            {/* Second sofa image with new structure */}
            <div className="w-full h-[300px] relative overflow-hidden">
              <img
                  src={variants[selectedColor].images[1]}
                  alt="Detailed sofa view"
                  className="absolute w-[200%] max-w-none h-auto top-1/2 left-1/2 scale-[1.5]"
                  style={{
                    transform: 'translate(-50%, -50%)'
                  }}
                  data-testid="secondary-image-mobile"
              />
            </div>

            <ColorSelector isDesktop={false}/>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col items-center justify-center p-8 h-full">
            <div className="w-full max-w-2xl relative">
              <div className="aspect-[4/3] w-full">
                <img
                    src={variants[selectedColor].images[0]}
                    alt="Full sofa view"
                    className="w-full h-full object-contain"
                    data-testid="main-image-desktop"
                />
              </div>
            </div>
            <ColorSelector isDesktop={true}/>
          </div>

          <div
              className="hidden md:flex relative flex-col items-center justify-center bg-[#F0F3FB] h-full overflow-hidden">
            <div className="w-full h-full relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full scale-[1.5] h-full relative left-[30%]">
                  <img
                      src={variants[selectedColor].images[1]}
                      alt="Detailed sofa view"
                      className="w-full h-full object-cover object-left"
                      data-testid="secondary-image-desktop"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ColorVar;