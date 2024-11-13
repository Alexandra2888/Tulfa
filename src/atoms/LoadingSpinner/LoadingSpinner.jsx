import React from "react";

const LoadingSpinner = () => (
  <div
    className="flex items-center justify-center p-4"
    data-testid="spinner-container"
  >
    <div
      className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"
      data-testid="spinner"
    ></div>
  </div>
);

export default LoadingSpinner;
