import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

import OffLineIndicator from "react-native-connection-indicator";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hi</Text>
      <OffLineIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
