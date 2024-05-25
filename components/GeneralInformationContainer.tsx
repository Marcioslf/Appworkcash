import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const GeneralInformationContainer = () => {
  return (
    <View style={styles.vectorParent}>
      <Image
        style={[styles.groupChild, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Image
        style={[styles.groupItem, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <View style={styles.totalDeVendasParent}>
        <Text style={styles.totalDeVendas}>Total de vendas</Text>
        <Text style={[styles.r123222300, styles.r123222300Typo]}>
          R$ 12.322.23.00
        </Text>
        <Text style={[styles.vendasDoMs, styles.vendasTypo]}>
          Vendas do mês
        </Text>
        <Text style={[styles.vendasDoHoje, styles.vendasTypo]}>
          Vendas do hoje
        </Text>
        <Text style={[styles.r1232223001, styles.r123222300Typo]}>
          R$ 12.322.23.00
        </Text>
        <Text style={[styles.r1232223002, styles.r123222300Typo]}>
          R$ 12.322.23.00
        </Text>
        <Text style={styles.informaesGerais}>informações gerais</Text>
        <View style={[styles.rectangleView, styles.groupChildLayout]} />
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 19,
    width: 19,
    left: 1,
    position: "absolute",
  },
  r123222300Typo: {
    color: Color.colorIndigo,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  vendasTypo: {
    left: 30,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.urbanistLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  groupChildLayout: {
    height: 1,
    width: 309,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  groupChild: {
    top: 46,
    width: 19,
    left: 1,
  },
  groupItem: {
    top: 119,
  },
  groupInner: {
    top: 193,
  },
  totalDeVendas: {
    left: 29,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.urbanistLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    top: 46,
    position: "absolute",
  },
  r123222300: {
    top: 51,
    left: 223,
    color: Color.colorIndigo,
    fontSize: FontSize.size_3xs,
  },
  vendasDoMs: {
    top: 121,
  },
  vendasDoHoje: {
    top: 194,
  },
  r1232223001: {
    top: 124,
    left: 225,
  },
  r1232223002: {
    top: 198,
    left: 223,
    color: Color.colorIndigo,
    fontSize: FontSize.size_3xs,
  },
  informaesGerais: {
    left: 5,
    color: Color.colorGray_100,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_smi,
    top: 0,
    position: "absolute",
  },
  rectangleView: {
    top: 91,
    left: 3,
  },
  groupChild1: {
    top: 163,
    left: 0,
  },
  groupChild2: {
    top: 235,
    left: 0,
  },
  totalDeVendasParent: {
    left: 0,
    top: 0,
    height: 236,
    width: 312,
    position: "absolute",
  },
  vectorParent: {
    top: 444,
    left: 62,
    height: 236,
    width: 312,
    position: "absolute",
  },
});

export default GeneralInformationContainer;
