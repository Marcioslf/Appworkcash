import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Property1PasswordInput2 = () => {
  return (
    <View style={styles.property1passwordInput}>
      <View style={styles.property1passwordInputChild} />
      <Text style={styles.text}>+55</Text>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1passwordInputChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    borderColor: Color.colorAliceblue,
    borderWidth: 1,
    position: "absolute",
  },
  text: {
    height: "26.47%",
    width: "51.38%",
    top: "50%",
    left: "13.85%",
    fontSize: FontSize.size_3xs,
    lineHeight: 13,
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
    color: Color.gray,
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    position: "absolute",
  },
  image1Icon: {
    height: "38.24%",
    width: "5.23%",
    top: "38.24%",
    right: "89.23%",
    bottom: "23.53%",
    left: "5.54%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  property1passwordInput: {
    top: 180,
    left: 20,
    width: 325,
    height: 34,
    position: "absolute",
  },
});

export default Property1PasswordInput2;
