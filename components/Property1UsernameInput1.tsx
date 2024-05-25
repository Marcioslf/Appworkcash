import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Property1UsernameInput1 = () => {
  return (
    <View style={styles.property1usernameInput}>
      <View style={styles.property1usernameInputChild} />
      <Text style={styles.nome}>Nome</Text>
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
    backgroundColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    borderColor: Color.colorAliceblue,
    borderWidth: 1,
    position: "absolute",
  },
  nome: {
    height: "33.99%",
    width: "20.83%",
    top: "44.94%",
    left: "4.62%",
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
    top: 20,
    left: 20,
    width: 325,
    height: 36,
    position: "absolute",
  },
});

export default Property1UsernameInput1;
