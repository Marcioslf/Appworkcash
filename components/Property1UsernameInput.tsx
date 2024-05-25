import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Property1UsernameInput = () => {
  return (
    <View style={styles.property1usernameInput}>
      <Image
        style={styles.property1usernameInputChild}
        contentFit="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <Text style={styles.usurio}>Usuário</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  property1usernameInputChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  usurio: {
    height: "33.99%",
    width: "20.83%",
    top: "39.33%",
    left: "5.54%",
    fontSize: FontSize.size_mini,
    lineHeight: 19,
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
    color: Color.gray,
    textAlign: "left",
    display: "flex",
    alignItems: "flex-end",
    position: "absolute",
  },
  property1usernameInput: {
    top: 61,
    left: 20,
    width: 325,
    height: 36,
    position: "absolute",
  },
});

export default Property1UsernameInput;
