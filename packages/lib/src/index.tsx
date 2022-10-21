import React from "react";

import Notice from "./components/ConnectionNotice";

import useNetwork from "./hooks/useNetworkInfo";

import { IBaseProps } from "./types/types";

const ConnectionNotice: React.FC<IBaseProps> = (props) => {
  const isInternetConnected = useNetworkInfo();

  return <Notice isConnected={isInternetConnected} {...props} />;
};

export default ConnectionNotice;

export const useNetworkInfo = useNetwork;
