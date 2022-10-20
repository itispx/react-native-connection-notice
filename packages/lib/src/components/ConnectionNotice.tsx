import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, Animated, Dimensions, StatusBar } from "react-native";

import { IConnectionNoticeProps } from "../types/types";

const width = Dimensions.get("screen").width;

const ConnectionNotice: React.FC<IConnectionNoticeProps> = ({
  style,
  styleText,
  height: heightProp = StatusBar.currentHeight ?? 40,
  offlineColor = "red",
  offlineText = "No internet connection",
  onlineColor = "green",
  onlineText = "Connected",
  slideDuration = 200,
  isConnected,
}) => {
  const translateY = useRef(new Animated.Value(-heightProp)).current;

  const [backgroundColor, setBackgroundColor] = useState<string>();
  const [textDisplay, setTextDisplay] = useState<string>();

  function foundInternetConnection(): void {
    setBackgroundColor(onlineColor);
    setTextDisplay(onlineText);

    Animated.sequence([
      Animated.delay(500),
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -heightProp,
          duration: slideDuration,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }

  function lostInternetConnection(): void {
    setBackgroundColor(offlineColor);
    setTextDisplay(offlineText);

    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: slideDuration,
        useNativeDriver: true,
      }),
    ]).start();
  }

  useEffect(() => {
    if (isConnected) {
      foundInternetConnection();
    } else {
      lostInternetConnection();
    }
  }, [isConnected]);

  return (
    <Animated.View
      style={[
        styles.container,
        { height: heightProp, transform: [{ translateY }], backgroundColor },
        style,
      ]}
    >
      <Text style={[styles.indicatorText, styleText]}>{textDisplay}</Text>
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

export default ConnectionNotice;
