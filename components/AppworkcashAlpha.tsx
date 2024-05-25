import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const AppworkcashAlpha = () => {
  return (
    <Text style={styles.appworkcashAlpha100Container}>
      <Text style={styles.app}>app.</Text>
      <Text style={styles.workcashAlpha}>workcash alpha 1.0.0</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  app: {
    fontWeight: "300",
    fontFamily: FontFamily.urbanistLight,
  },
  workcashAlpha: {
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
  },
  appworkcashAlpha100Container: {
    fontSize: 128,
    color: Color.white,
    textAlign: "center",
  },
});

export default AppworkcashAlpha;
