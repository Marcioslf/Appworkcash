import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Property1EmailInput = () => {
  return (
    <View style={styles.property1emailInput}>
      <View style={styles.property1emailInputChild} />
      <Text style={styles.email}>Email</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  property1emailInputChild: {
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
  email: {
    height: "51.91%",
    width: "11.17%",
    top: "24.93%",
    left: "5.45%",
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
  property1emailInput: {
    top: 102,
    left: 20,
    width: 325,
    height: 34,
    position: "absolute",
  },
});

export default Property1EmailInput;
