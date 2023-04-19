const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  setupFiles: [
    '<rootDir>/text-encoder.mock.ts',
  ],
};
module.exports = createJestConfig(customJestConfig);
