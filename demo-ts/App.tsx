import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import ConnectionIndicator from "react-native-connection-indicator";
// import ConnectionIndicator from "../lib/src";

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <StatusBar style="auto" />
      <Text>Hi</Text>
      <ConnectionIndicator />
    </View>
  );
};

export default App;
