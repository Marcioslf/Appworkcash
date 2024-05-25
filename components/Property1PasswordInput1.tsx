import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Property1PasswordInput1 = () => {
  return (
    <View style={styles.property1passwordInput}>
      <View style={styles.property1passwordInputChild} />
      <Text style={styles.senha}>Senha</Text>
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
  senha: {
    height: "26.47%",
    width: "51.38%",
    top: "50%",
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
  property1passwordInput: {
    top: 141,
    left: 20,
    width: 325,
    height: 34,
    position: "absolute",
  },
});

export default Property1PasswordInput1;
