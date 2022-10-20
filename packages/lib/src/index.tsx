import React from "react";

import { useNetInfo } from "@react-native-community/netinfo";

import ConnectionIndicator from "./ConnectionIndicator";

import { IBaseProps } from "./types";

const withComponent: React.FC<IBaseProps> = (props) => {
  const isInternetConnected = useNetInfo().isConnected ?? false;

  const isBluetoothConnected = true;

  return (
    <ConnectionIndicator
      isConnected={props.type === "internet" ? isInternetConnected : isBluetoothConnected}
      {...props}
    />
  );
};

export default withComponent;
