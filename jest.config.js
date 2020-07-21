module.exports = {
  preset: "react",
  setupFiles: ['./setupTests.js'],
  collectCoverageFrom: [
    "src/sagas/*.js",
    "src/reducers/*.js",
    "!src/reducers/index.js",
    "!src/reducers/initialState.js",
    "!src/sagas/index.js",
    "!src/sagas/watchers.js",
    "!src/screens/*.js",
    "!src/store/*.js",
    "!src/utils/*.js",
    "!src/apis/*.js",
    "!src/actions/*.js",
    "!src/assets/*.js",
    "!src/components/*.js",
    "!src/containers/*.js",
    "!src/middlewares/*.js",
    "!src/store/**",
    "!src/apis/**",
    "!src/screens/**",
    "!<rootDir>/node_modules/"
  ],
  coverageReporters: [
    "text",
    "html"
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$"
};