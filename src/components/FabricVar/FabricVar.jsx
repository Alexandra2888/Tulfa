import { useState } from "react";
import Button from "../../atoms/Button/Button";

import { fabrics } from "../../data/data";

const FabricVar = () => {
  const [selectedFabric, setSelectedFabric] = useState(fabrics[0].id);
  const [showOptions, setShowOptions] = useState(false);

  const selectedFabricData =
    fabrics.find((f) => f.id === selectedFabric) || fabrics[0];

  return (
    <div className=" mx-auto container px-4 pt-8">
      <div className="flex flex-col md:flex-row md:gap-12 lg:gap-48">
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
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start xl:mt-36">
          {/* Fabric Detail View */}
          <div className="relative xl:ml-auto">
            <div
              className="h-56 w-56 cursor-pointer xl:max-w-96"
              onMouseEnter={() => setShowOptions(true)}
              onMouseLeave={() => setShowOptions(false)}
            >
              <img
                src={selectedFabricData.fabricPiece}
                alt={`${selectedFabricData.name} fabric detail`}
                className="h-full w-full object-cover mt-8 xl:mt-0 scale-[1.85] xl:scale-[2.5]"
              />

              {/* Overlay Options */}
              {showOptions && (
                <div className="absolute -bottom-24 xl:-top-[75%] xl:left-[90%] xl:h-fit  w-48 bg-white shadow-xl rounded-lg p-2 flex flex-col space-y-2">
                  {fabrics.map((fabric) => (
                    <Button
                      key={fabric.id}
                      onClick={() => setSelectedFabric(fabric.id)}
                      className="flex items-center justify-between w-full p-2 hover:bg-gray-100 rounded-md transition-colors"
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FabricVar;
