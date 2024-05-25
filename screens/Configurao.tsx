import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Configurao = () => {
  return (
    <View style={styles.configurao}>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/33.png")}
      />
      <View style={styles.frameParent}>
        <View style={[styles.rectangleWrapper, styles.rectanglePosition]}>
          <View style={styles.frameChild} />
        </View>
        <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
          <View style={styles.frameChild} />
        </View>
        <View style={[styles.rectangleFrame, styles.rectanglePosition]}>
          <View style={styles.frameChild} />
        </View>
        <View style={[styles.rectangleParent, styles.rectanglePosition]}>
          <View style={styles.frameChild} />
          <View style={styles.frameChild1} />
          <Text
            style={[styles.configurao1, styles.logoutFlexBox]}
          >{`Configuração `}</Text>
          <Text
            style={[styles.ativarNotificaes, styles.logoutFlexBox]}
          >{`Ativar notificações `}</Text>
          <Text style={[styles.logout, styles.logoutFlexBox]}>{`Logout `}</Text>
          <View style={styles.frameChild2} />
          <View style={[styles.frameChild3, styles.frameChildLayout]} />
          <View style={[styles.frameChild4, styles.frameChildLayout]} />
          <Image
            style={styles.newLogoWcBrancaPrancheta1}
            contentFit="cover"
            source={require("../assets/new-logo-wc-branca-prancheta-1-21.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectanglePosition: {
    top: 0,
    height: 825,
    width: 430,
    position: "absolute",
  },
  logoutFlexBox: {
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  frameChildLayout: {
    height: 22,
    width: 23,
    backgroundColor: Color.colorGray_200,
    left: 272,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  icon: {
    top: 775,
    borderRadius: Border.br_xl,
    height: 157,
    width: 430,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    marginLeft: -186,
    top: 104,
    left: "50%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorLightslategray_100,
    width: 373,
    height: 617,
    opacity: 0.4,
    position: "absolute",
  },
  rectangleWrapper: {
    left: 0,
    top: 0,
  },
  rectangleContainer: {
    left: 430,
  },
  rectangleFrame: {
    left: 860,
  },
  frameChild1: {
    top: 635,
    left: 124,
    borderRadius: 16,
    backgroundColor: Color.colorIndigo,
    width: 194,
    height: 60,
    position: "absolute",
  },
  configurao1: {
    top: 151,
    left: 49,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    color: Color.white,
  },
  ativarNotificaes: {
    height: "2.18%",
    width: "47.21%",
    top: "29.82%",
    left: "6.98%",
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    fontFamily: FontFamily.urbanistLight,
  },
  logout: {
    height: "3.27%",
    width: "31.4%",
    top: "78.91%",
    left: "35.58%",
    fontSize: 24,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    color: Color.white,
  },
  frameChild2: {
    top: 245,
    left: 270,
    backgroundColor: Color.colorGainsboro,
    width: 59,
    height: 24,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  frameChild3: {
    top: 246,
  },
  frameChild4: {
    top: 309,
  },
  newLogoWcBrancaPrancheta1: {
    top: 14,
    left: 61,
    width: 344,
    height: 82,
    position: "absolute",
  },
  rectangleParent: {
    left: 1290,
  },
  frameParent: {
    top: 4,
    left: -1290,
    width: 1720,
    height: 825,
    position: "absolute",
  },
  configurao: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Configurao;
