import React from "react";

import ConnectionNotice from "./components/ConnectionNotice";

import useNetworkInfo from "./hooks/useNetworkInfo";

import { IBaseProps } from "./types/types";

const withComponent: React.FC<IBaseProps> = (props) => {
  const isInternetConnected = useNetworkInfo();

  return <ConnectionNotice isConnected={isInternetConnected} {...props} />;
};

export default withComponent;
