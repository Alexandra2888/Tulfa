module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testMatch: ["**/__tests__/**/*.{js,jsx}", "**/?(*.)+(spec|test).{js,jsx}"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^swiper/css$": "identity-obj-proxy",
    "^swiper/css/navigation$": "identity-obj-proxy",
    "^swiper/css/pagination$": "identity-obj-proxy",
  },
};
