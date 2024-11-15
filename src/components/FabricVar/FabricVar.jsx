import { useState } from "react";
import Button from "../../atoms/Button/Button";
import { fabrics } from "../../data/data";

const FabricVar = () => {
  const [selectedFabric, setSelectedFabric] = useState(fabrics[0].id);
  const [showOptions, setShowOptions] = useState(false);

  const selectedFabricData = fabrics.find((f) => f.id === selectedFabric) || fabrics[0];

  return (
      <section className="w-full h-full bg-white" data-testid="fabric-var-section">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          {/* Mobile Layout */}
          <div className="flex flex-col md:hidden w-full relative">
            {/* Couch Preview */}
            <div className="w-full mb-4">
              <div className="aspect-[4/3] w-full">
                <img
                    src={selectedFabricData.couchImage}
                    alt={`${selectedFabricData.name} couch`}
                    className="w-full h-full object-contain"
                    data-testid="couch-image-mobile"
                />
              </div>
            </div>

            {/* Fabric Preview with fixed width */}
            <div
                className="w-full h-[300px] relative overflow-hidden"
                onClick={() => setShowOptions(!showOptions)}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                    src={selectedFabricData.fabricPiece}
                    alt={`${selectedFabricData.name} fabric detail`}
                    className="w-full h-full object-cover"
                    data-testid="fabric-image-mobile"
                />
              </div>
            </div>

            {/* Mobile Fabric Selector  */}
            {showOptions && (
                <div className="absolute bottom-0 left-[40%] bg-white shadow-lg rounded-bl-lg">
                  <div className="flex flex-col">
                    {fabrics.map((fabric) => (
                        <Button
                            key={fabric.id}
                            onClick={() => {
                              setSelectedFabric(fabric.id);
                              setShowOptions(false);
                            }}
                            className="flex items-center justify-between w-full p-4 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-sm font-medium">{fabric.name}</span>
                          <div className="h-12 w-12 rounded-md overflow-hidden">
                            <img
                                src={fabric.fabricPiece}
                                alt={fabric.name}
                                className="h-full w-full object-cover"
                            />
                          </div>
                        </Button>
                    ))}
                  </div>
                </div>
            )}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex flex-col items-center justify-center p-8 h-full">
            <div className="w-full max-w-2xl relative">
              <div className="aspect-[4/3] w-full">
                <img
                    src={selectedFabricData.couchImage}
                    alt={`${selectedFabricData.name} couch`}
                    className="w-full h-full object-contain"
                    data-testid="couch-image-desktop"
                />
              </div>
            </div>
          </div>

          {/* Desktop Fabric Preview */}
          <div className="hidden md:flex relative flex-col items-center justify-center bg-[#F0F3FB] h-full">
            <div
                className="w-full h-full relative cursor-pointer"
                onMouseEnter={() => setShowOptions(true)}
                onMouseLeave={() => setShowOptions(false)}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full">
                  <img
                      src={selectedFabricData.fabricPiece}
                      alt={`${selectedFabricData.name} fabric detail`}
                      className="w-full h-full object-cover"
                      data-testid="fabric-image-desktop"
                  />
                </div>
              </div>

              {/* Desktop Fabric Selector */}
              {showOptions && (
                  <div className="absolute w-48 top-0 right-0 bg-white shadow-xl rounded-bl-lg">
                    <div className="flex flex-col">
                      {fabrics.map((fabric) => (
                          <Button
                              key={fabric.id}
                              onClick={() => {
                                setSelectedFabric(fabric.id);
                                setShowOptions(false);
                              }}
                              className="flex items-center justify-between w-full p-4 hover:bg-gray-50 transition-colors"
                          >
                            <span className="text-sm font-medium">{fabric.name}</span>
                            <div className="h-12 w-12 rounded-md overflow-hidden">
                              <img
                                  src={fabric.fabricPiece}
                                  alt={fabric.name}
                                  className="h-full w-full object-cover"
                              />
                            </div>
                          </Button>
                      ))}
                    </div>
                  </div>
              )}
            </div>
          </div>
        </div>
      </section>
  );
};

export default FabricVar;