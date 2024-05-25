import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const OTPContainer = () => {
  return (
    <View style={styles.enterOtpInput}>
      <View style={[styles.blank, styles.viewLayout]} />
      <View style={[styles.view, styles.viewLayout]}>
        <View style={[styles.blank1, styles.childBorder]} />
        <Text style={[styles.text, styles.textTypo]}>3</Text>
      </View>
      <View style={styles.view1}>
        <View style={[styles.child, styles.childBorder]} />
        <Text style={[styles.text, styles.textTypo]}>5</Text>
      </View>
      <View style={[styles.view2, styles.viewLayout]}>
        <View style={[styles.child, styles.childBorder]} />
        <Text style={[styles.text2, styles.textTypo]}>1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLayout: {
    width: 70,
    top: 0,
    height: 60,
    position: "absolute",
  },
  childBorder: {
    borderColor: Color.primary,
    backgroundColor: Color.white,
    left: 0,
    width: 70,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    top: 0,
    height: 60,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.dark,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    top: 17,
    position: "absolute",
  },
  blank: {
    left: 261,
    backgroundColor: Color.colorWhitesmoke,
    borderColor: Color.colorAliceblue,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    width: 70,
    top: 0,
  },
  blank1: {
    borderWidth: 1,
  },
  text: {
    left: 29,
  },
  view: {
    left: 174,
    width: 70,
    top: 0,
  },
  child: {
    borderWidth: 1.2,
  },
  view1: {
    left: 0,
    width: 70,
    top: 0,
    height: 60,
    position: "absolute",
  },
  text2: {
    left: 31,
  },
  view2: {
    left: 87,
    width: 70,
    top: 0,
  },
  enterOtpInput: {
    top: 548,
    left: 44,
    width: 331,
    height: 60,
    position: "absolute",
  },
});

export default OTPContainer;
