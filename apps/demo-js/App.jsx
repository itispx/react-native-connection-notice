import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import ConnectionNotice, { useNetworkInfo } from "react-native-connection-notice";

const App = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <StatusBar style="auto" />
      <ConnectionNotice />
    </View>
  );
};

export default App;
