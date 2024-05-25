import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Container = () => {
  return (
    <View style={styles.vectorParent}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text
        style={[styles.saldoTotal, styles.disponvelTypo]}
      >{`Saldo Total `}</Text>
      <Text style={[styles.r223233200, styles.r223233200Position]}>
        R$22.323.32,00
      </Text>
      <View style={[styles.disponvelParent, styles.disponvelPosition]}>
        <Text style={[styles.disponvel, styles.disponvelPosition]}>
          disponível
        </Text>
        <Image
          style={[styles.groupChild, styles.r223233200Position]}
          contentFit="cover"
          source={require("../assets/ellipse-8.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  disponvelTypo: {
    textAlign: "center",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  r223233200Position: {
    left: 0,
    position: "absolute",
  },
  disponvelPosition: {
    top: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "8.84%",
    width: "8%",
    top: "49.66%",
    right: "18%",
    bottom: "41.5%",
    left: "74%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  saldoTotal: {
    top: 69,
    left: 68,
    fontSize: FontSize.size_xl,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    position: "absolute",
  },
  r223233200: {
    top: 104,
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    color: Color.white,
  },
  disponvel: {
    left: 11,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_100,
    textAlign: "center",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    top: 0,
  },
  groupChild: {
    top: 5,
    width: 8,
    height: 8,
  },
  disponvelParent: {
    left: 141,
    width: 71,
    height: 16,
  },
  vectorParent: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
});

export default Container;
