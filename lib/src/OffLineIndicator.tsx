import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Dimensions,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

import { useNetInfo } from "@react-native-community/netinfo";

const width = Dimensions.get("screen").width;

interface Props {
  isConnected: boolean;

  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  offlineColor?: string;
  offlineText?: string;
  onlineColor?: string;
  onlineText?: string;
  height?: number;
}

const OfflineIndicator: React.FC<Props> = ({
  isConnected,
  style,
  styleText,
  offlineColor = "red",
  offlineText = "No internet connection",
  onlineColor = "green",
  onlineText = "Connected",
  height = 30,
}) => {
  // const isConnected = useNetInfo().isConnected;

  const translateY = useRef(new Animated.Value(-31)).current;

  useEffect(() => {
    if (isConnected) {
      Animated.sequence([
        Animated.delay(500),
        Animated.timing(translateY, {
          toValue: -31,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [isConnected]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          height,
          transform: [{ translateY }],
          backgroundColor: isConnected ? onlineColor : offlineColor,
        },
        style,
      ]}
    >
      <Text style={[styles.indicatorText, styleText]}>
        {isConnected ? onlineText : offlineText}
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    width,
  },
  indicatorText: {
    color: "#FFF",
  },
});

export default OfflineIndicator;
