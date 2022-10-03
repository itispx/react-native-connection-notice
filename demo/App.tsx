import React from "react";
import { Text, View } from "react-native";

import OfflineIndicator from "../src/OffLineIndicator";

const App: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <OfflineIndicator />
      <Text>React Native Offline Indicator</Text>
    </View>
  );
};

export default App;
