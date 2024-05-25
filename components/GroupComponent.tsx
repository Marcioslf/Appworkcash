import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const GroupComponent = () => {
  return (
    <View style={styles.vectorParent}>
      <Image
        style={[styles.componentChild, styles.componentChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.componentItem, styles.componentChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.componentInner, styles.componentChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.componentChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.componentChild1, styles.componentChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Text style={[styles.vendaRealizadaId, styles.vendaTypo]}>
        Venda realizada (ID 123123)
      </Text>
      <Text style={[styles.vendaRealizadaId1, styles.vendaTypo]}>
        Venda realizada (ID 123123)
      </Text>
      <Text style={[styles.vendaRealizadaId2, styles.vendaTypo]}>
        Venda realizada (ID 123123)
      </Text>
      <Text style={[styles.vendaRealizadaId3, styles.vendaTypo]}>
        Venda realizada (ID 123123)
      </Text>
      <Text style={[styles.vendaRealizadaId4, styles.vendaTypo]}>
        Venda realizada (ID 123123)
      </Text>
      <Text style={[styles.r123222300, styles.r123222300Typo]}>
        R$ 12.322.23.00
      </Text>
      <Text style={[styles.r1232223001, styles.r123222300Typo]}>
        R$ 12.322.23.00
      </Text>
      <Text style={[styles.r1232223002, styles.r123222300Typo]}>
        R$ 12.322.23.00
      </Text>
      <Text style={[styles.r1232223003, styles.r123222300Typo]}>
        R$ 12.322.23.00
      </Text>
      <Text style={[styles.r1232223004, styles.r123222300Typo]}>
        R$ 12.322.23.00
      </Text>
      <View style={styles.rectangleView} />
      <View style={[styles.componentChild2, styles.componentChildPosition]} />
      <View style={[styles.componentChild3, styles.componentChildPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  componentChildLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    right: "93.81%",
    width: "6.19%",
    height: "6.31%",
    position: "absolute",
  },
  vendaTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.urbanistLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    left: "8.85%",
    width: "59.88%",
    height: "5.41%",
    position: "absolute",
  },
  r123222300Typo: {
    color: Color.colorIndigo,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    left: "73.16%",
    width: "22.42%",
    height: "3.9%",
    textAlign: "center",
    position: "absolute",
  },
  componentChildPosition: {
    left: "1.18%",
    right: "0%",
    backgroundColor: Color.colorGainsboro,
    width: "98.82%",
    height: "0.3%",
    position: "absolute",
  },
  componentChild: {
    bottom: "52.55%",
    top: "41.14%",
  },
  componentItem: {
    bottom: "73.87%",
    top: "19.82%",
  },
  componentInner: {
    top: "0%",
    bottom: "93.69%",
  },
  ellipseIcon: {
    top: "61.86%",
    bottom: "31.83%",
  },
  componentChild1: {
    top: "85.59%",
    bottom: "8.11%",
  },
  vendaRealizadaId: {
    top: "0.3%",
  },
  vendaRealizadaId1: {
    top: "19.82%",
  },
  vendaRealizadaId2: {
    top: "41.14%",
  },
  vendaRealizadaId3: {
    top: "62.16%",
  },
  vendaRealizadaId4: {
    top: "86.49%",
  },
  r123222300: {
    top: "42.64%",
  },
  r1232223001: {
    top: "21.32%",
  },
  r1232223002: {
    top: "1.5%",
  },
  r1232223003: {
    top: "63.66%",
  },
  r1232223004: {
    top: "87.69%",
  },
  rectangleView: {
    top: "14.71%",
    right: "0.59%",
    bottom: "84.98%",
    left: "0.59%",
    backgroundColor: Color.colorGainsboro,
    width: "98.82%",
    height: "0.3%",
    position: "absolute",
  },
  componentChild2: {
    top: "76.28%",
    bottom: "23.42%",
  },
  componentChild3: {
    top: "99.7%",
    bottom: "0%",
  },
  vectorParent: {
    top: 227,
    left: 46,
    width: 339,
    height: 333,
    position: "absolute",
  },
});

export default GroupComponent;
