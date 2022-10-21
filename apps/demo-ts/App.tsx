import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import ConnectionNotice, { useNetworkInfo } from "react-native-connection-notice";

const App: React.FC = () => {
  const isConnected = useNetworkInfo();

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <StatusBar style="auto" />
      {/* your components */}
      <ConnectionNotice />
      <Text style={{ marginTop: 90 }}>{isConnected ? "Connected" : "Not connected"}</Text>
    </View>
  );
};

export default App;
