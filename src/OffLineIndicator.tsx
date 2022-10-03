import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

import { useNetInfo } from "@react-native-community/netinfo";

const width = Dimensions.get("screen").width;

interface Props {
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  offlineColor?: string;
  offlineText?: string;
  onlineColor?: string;
  onlineText?: string;
  height?: number;
}

const OfflineIndicator: React.FC<Props> = ({
  style,
  styleText,
  offlineColor = "red",
  offlineText = "No internet connection",
  onlineColor = "green",
  onlineText = "Connected",
  height = 30,
}) => {
  const isConnected = useNetInfo().isConnected;

  return (
    <View
      style={[
        styles.container,
        { height, backgroundColor: isConnected ? onlineColor : offlineColor },
        style,
      ]}
    >
      <Text style={[styles.indicatorText, styleText]}>
        {isConnected ? onlineText : offlineText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width,
  },
  indicatorText: {
    color: "#FFF",
  },
});

export default OfflineIndicator;
