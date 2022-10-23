# React Native Connection Notice

A React Native component that gives a notice every time the user internet connection goes down

# Installation

```
npm install react-native-connection-notice
```

# Dependencies

You also need to install `@react-native-community/netinfo`.

<br/>

If you have a Expo managed project, in your project directory, run:

```
npx expo install @react-native-community/netinfo
```

If you have a bare React Native project, in your project directory, run:

```
npm install --save @react-native-community/netinfo
```

If you encounter any problems with linking follow [these additional installation instructions.](https://github.com/react-native-netinfo/react-native-netinfo#getting-started)

# Preview

![Lib Preview](/example/preview.gif)

# Usage

Place the component in the App file below your others components

```js
import ConnectionNotice from "react-native-connection-notice";

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <StatusBar style="auto" />
      {/* your components... */}
      <ConnectionNotice />
    </View>
  );
};

export default App;
```

## ConnectionNotice props

| Props         | type                 | description                         | default                                 |
| ------------- | -------------------- | ----------------------------------- | --------------------------------------- |
| style         | StyleProp<ViewStyle> | style of the notice container       | [style default ](#style-default)        |
| styleText     | StyleProp<TextStyle> | style of the text inside the notice | [styleText default](#styletext-default) |
| height        | number               | height of the notice                | StatusBar.currentHeight or 40           |
| offlineColor  | string               | background color when offline       | red                                     |
| offlineText   | string               | text when offline                   | No internet connection                  |
| onlineColor   | string               | background color when online        | green                                   |
| onlineText    | string               | text when online                    | Connected                               |
| slideDuration | number               | duration of the slide in and out    | 200                                     |

### style default

```cs
flexDirection: "row",
position: "absolute",
top: 0,
left: 0,
right: 0,
justifyContent: "center",
alignItems: "center",
width: Dimensions.get("screen").width
```

### styleText default

```cs
color: "#FFF",
```

## Hooks

### useNetworkInfo

```js
import { useNetworkInfo } from "react-native-connection-notice";

const App = () => {
  const isConnected = useNetworkInfo();

  return <Text>{isConnected ? "Connected" : "Not connected"}</Text>;
};
```

Listener that tells you if the device is connected to the internet
