import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import ConnectionIndicator from "react-native-connection-indicator";

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <StatusBar style="auto" />
      <ConnectionIndicator />
    </View>
  );
};

export default App;
