import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import ConnectionIndicator from "react-native-connection-indicator/src/ConnectionIndicator";

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <StatusBar style="auto" />
      <ConnectionIndicator type="bluetooth" isConnected={true} keepBluetooth={5000} />
    </View>
  );
};

export default App;
