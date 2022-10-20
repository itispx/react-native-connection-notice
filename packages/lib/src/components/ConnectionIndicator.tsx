import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, Animated, Dimensions, StatusBar } from "react-native";

import { IConnectionIndicatorProps } from "../types/types";

const width = Dimensions.get("screen").width;

const ConnectionIndicator: React.FC<IConnectionIndicatorProps> = ({
  style,
  styleText,
  type,
  height: heightProp = StatusBar.currentHeight ?? 40,
  offlineColor = "red",
  offlineText = "No internet connection",
  onlineColor = "green",
  onlineText = "Connected",
  bluetoothColor = "blue",
  bluetoothText = "Connected to bluetooth",
  slideDuration = 200,
  keepBluetooth = false,
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

  function foundBluetoothConnection(): void {
    setBackgroundColor(bluetoothColor);
    setTextDisplay(bluetoothText);

    if (typeof keepBluetooth === "boolean") {
      if (keepBluetooth) {
        Animated.timing(translateY, {
          toValue: 0,
          duration: slideDuration,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.sequence([
          Animated.timing(translateY, {
            toValue: 0,
            duration: slideDuration,
            useNativeDriver: true,
          }),
          Animated.delay(500),
          Animated.timing(translateY, {
            toValue: -heightProp,
            duration: slideDuration,
            useNativeDriver: true,
          }),
        ]).start();
      }
    } else if (typeof keepBluetooth === "number") {
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: 0,
          duration: slideDuration,
          useNativeDriver: true,
        }),
        Animated.delay(keepBluetooth),
        Animated.timing(translateY, {
          toValue: -heightProp,
          duration: slideDuration,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }

  function lostBluetoothConnection(): void {
    Animated.timing(translateY, {
      toValue: -heightProp,
      duration: slideDuration,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    switch (type) {
      case "internet":
        if (isConnected) {
          foundInternetConnection();
        } else {
          lostInternetConnection();
        }
        break;
      case "bluetooth":
        if (isConnected) {
          foundBluetoothConnection();
        } else {
          lostBluetoothConnection();
        }
        break;
    }
  }, [isConnected, type, keepBluetooth]);

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

export default ConnectionIndicator;
