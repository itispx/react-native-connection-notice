import React from "react";

import ConnectionIndicator from "./components/ConnectionIndicator";

import useNetworkInfo from "./hooks/useNetworkInfo";
import useBluetoothInfo from "./hooks/useBluetoothInfo";

import { IBaseProps } from "./types/types";

const withComponent: React.FC<IBaseProps> = (props) => {
  const isInternetConnected = useNetworkInfo();

  const isBluetoothConnected = useBluetoothInfo();

  return (
    <ConnectionIndicator
      isConnected={props.type === "internet" ? isInternetConnected : isBluetoothConnected}
      {...props}
    />
  );
};

export default withComponent;
