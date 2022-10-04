import React, { useState } from "react";
import { Text, View, StatusBar, Button } from "react-native";

import OfflineIndicator from "./src/OffLineIndicator";

const App: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <OfflineIndicator isConnected={isConnected} />

      <View style={{ flex: 1, justifyContent: "space-evenly" }}>
        <Button title="on" onPress={() => setIsConnected(true)} />
        <Button title="off" onPress={() => setIsConnected(false)} />
      </View>
    </View>
  );
};

export default App;
