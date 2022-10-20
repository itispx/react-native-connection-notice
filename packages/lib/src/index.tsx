import React from "react";

import ConnectionIndicator from "./components/ConnectionIndicator";

import useNetworkInfo from "./hooks/useNetworkInfo";

import { IBaseProps } from "./types/types";

const withComponent: React.FC<IBaseProps> = (props) => {
  const isInternetConnected = useNetworkInfo();

  return <ConnectionIndicator isConnected={isInternetConnected} {...props} />;
};

export default withComponent;
