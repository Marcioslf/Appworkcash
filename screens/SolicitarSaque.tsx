import * as React from "react";
import { Switch, StyleSheet, View } from "react-native";
import { Border } from "../GlobalStyles";

const SolicitarSaque = () => {
  return <View style={styles.solicitarSaque} />;
};

const styles = StyleSheet.create({
  solicitarSaque: {
    borderRadius: Border.br_31xl,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default SolicitarSaque;
