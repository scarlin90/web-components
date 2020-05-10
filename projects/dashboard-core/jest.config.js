module.exports = {
    roots: ["<rootDir>/projects/dashboard-core/src"],
    verbose: true,
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    globals: {
      "ts-jest": {
        diagnostics: false
      }
    },
    coverageThreshold: {
        "global": {
          "branches": 100,
          "functions": 100,
          "lines": 100,
          "statements": 100
        }
      }
  };