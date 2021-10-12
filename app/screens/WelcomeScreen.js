//! imports
import React from "react";
// import { createStackNavigator, createAppContainer } from "react-navigation";
import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableOpacityBase,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styles from "./WelcomeScreenStyle";
import { LinearGradient } from "expo-linear-gradient";
//! imports

export default function WelcomeScreen(props) {
  return (
    <LinearGradient style={styles.background} colors={["#000000", "#201E27"]}>
      <View style={styles.logocontainer}>
        <Image
          style={styles.logo}
          source={require("../assets/illustration2.png")}
        ></Image>
        <Text style={styles.header}>Enterprise Team {"\n"} Collaboration</Text>
        <Text style={styles.para}>
          Bring together your files your tools projectsa and people Including a
          newe mobile and desktop application.
        </Text>
      </View>
      <View></View>
    </LinearGradient>
  );
}

// function WelcomeScreen(props) {
//   return (
//     <ImageBackground
//       style={styles.background}
//       source={require("../assets/background.jpeg")}
//     >
//       <View style={styles.logocontainer}>
//         <Image
//           style={styles.logo}
//           source={{
//             uri: "https://www.freepnglogos.com/uploads/red-logo-png-16.png",
//           }}
//         ></Image>
//         <Text style={styles.textstyle}>sell me if u can</Text>
//       </View>
//       <View style={styles.loginbutton}></View>
//       <TouchableNativeFeedback
//         onPress={() => {
//                   console.log("tesdted");

//         }}
//       >
//         <View style={styles.registerbutton}></View>
//       </TouchableNativeFeedback>
//       <StatusBar />
//     </ImageBackground>
//   );
// }

// export default WelcomeScreen;
