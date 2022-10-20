import { StyleProp, ViewStyle, TextStyle } from "react-native";

export interface IBaseProps {
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  height?: number;
  offlineColor?: string;
  offlineText?: string;
  onlineColor?: string;
  onlineText?: string;
  slideDuration?: number;
}

export interface IConnectionNoticeProps extends IBaseProps {
  isConnected: boolean;
}
