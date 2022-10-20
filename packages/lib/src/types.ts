import { StyleProp, ViewStyle, TextStyle } from "react-native";

export interface IBaseProps {
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  type: "internet" | "bluetooth";
  height?: number;
  offlineColor?: string;
  offlineText?: string;
  onlineColor?: string;
  onlineText?: string;
  bluetoothColor?: string;
  bluetoothText?: string;
  slideDuration?: number;
  keepBluetooth?: number | boolean;
}

export interface IConnectionIndicatorProps extends IBaseProps {
  isConnected: boolean;
}
