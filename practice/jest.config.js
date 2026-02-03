/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest/presets/js-with-ts-esm",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { 
      tsconfig: "tsconfig.json",
      useESM: true 
    }],
  },
  transformIgnorePatterns: [
    "node_modules/(?!(convex-test|convex)/)"
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  testMatch: ["**/convex/**/*.test.ts"],
};
