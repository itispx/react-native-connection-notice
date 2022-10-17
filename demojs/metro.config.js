const path = require("path");

const extraNodeModules = {
  "react-native-connection-indicator": path.resolve(__dirname + "/../lib/"),
};

module.exports = {
  resolver: {
    extraNodeModules,
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
