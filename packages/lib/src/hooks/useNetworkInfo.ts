import { useNetInfo } from "@react-native-community/netinfo";

const useNetworkInfo = () => {
  return useNetInfo().isConnected ?? false;
};

export default useNetworkInfo;
