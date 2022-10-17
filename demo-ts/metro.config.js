// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

const libPath = "D:/temp/react-native-connection-indicator/lib";

module.exports = {
  ...getDefaultConfig(__dirname),
  resolver: {
    nodeModulesPaths: [libPath],
  },
};
