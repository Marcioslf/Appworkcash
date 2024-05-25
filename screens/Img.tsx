import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Img = () => {
  return (
    <ImageBackground
      style={styles.imgIcon}
      resizeMode="cover"
      source={require("../assets/img.png")}
    />
  );
};

const styles = StyleSheet.create({
  imgIcon: {
    flex: 1,
    width: "100%",
    height: 812,
    display: "none",
  },
});

export default Img;
