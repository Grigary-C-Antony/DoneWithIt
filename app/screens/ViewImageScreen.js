import React from "react";
import { Image, View, StyleSheet } from "react-native";

export default function ViewImageScreen() {
  return (
    <View style={styles.imagecontainer}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        style={styles.Imager}
        resizeMode="contain"
        source={{ uri: "https://picsum.photos/1085" }}
      ></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#fc5c65",
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#4ecdc4",
    position: "absolute",
    top: 40,
    right: 30,
  },
  Imager: {
    width: "100%",
    height: "100%",
  },
  imagecontainer: {
    backgroundColor: "#000",
    flex: 1,
  },
});
