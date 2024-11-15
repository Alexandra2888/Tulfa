import { useState } from "react";
import Button from "../../atoms/Button/Button";
import { fabrics } from "../../data/data";

const FabricVar = () => {
  const [selectedFabric, setSelectedFabric] = useState(fabrics[0].id);
  const [showOptions, setShowOptions] = useState(false);

  const selectedFabricData = fabrics.find((f) => f.id === selectedFabric) || fabrics[0];

  return (
      <section className="container mx-auto px-4 pt-8">
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-24">
          {/* Couch Preview */}
          <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
            <div className="relative w-full max-w-xl">
              <img
                  src={selectedFabricData.couchImage}
                  alt={`${selectedFabricData.name} couch`}
                  className="w-full object-contain"
              />
            </div>
          </div>

          {/* Fabric Selection */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            {/* Fabric Detail View */}
            <div className="relative w-full">
              <div
                  className="h-[33.88rem] w-full overflow-hidden cursor-pointer md:-mt-10 xl:-mt-9"
                  onMouseEnter={() => setShowOptions(true)}
                  onMouseLeave={() => setShowOptions(false)}
              >
                <img
                    src={selectedFabricData.fabricPiece}
                    alt={`${selectedFabricData.name} fabric detail`}
                    className="h-full w-full object-cover"
                />

                {/* Fabric Options Overlay */}
                {showOptions && (
                    <div
                        className={`absolute bg-white shadow-xl
                    ${window.innerWidth < 768
                            ? 'bottom-0 left-0 right-0 rounded-t-lg'
                            : 'w-48 -top-5 xl:-top-9 right-0 rounded-bl-lg'
                        }`}
                    >
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
        </div>
      </section>
  );
};

export default FabricVar;