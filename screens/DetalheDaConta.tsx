import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const DetalheDaConta = () => {
  return (
    <View style={styles.detalheDaConta}>
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/31.png")}
      />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.rectangleWrapper, styles.frameParentPosition]}>
          <View style={[styles.frameChild, styles.framePosition]} />
        </View>
        <View style={[styles.rectangleParent, styles.frameParentPosition]}>
          <View style={[styles.frameItem, styles.framePosition]} />
          <Image
            style={styles.newLogoWcBrancaPrancheta1}
            contentFit="cover"
            source={require("../assets/new-logo-wc-branca-prancheta-1-2.png")}
          />
          <View style={[styles.frameInner, styles.framePosition]} />
          <Text
            style={[styles.detalheDaConta1, styles.detalheDaConta1FlexBox]}
          >{`Detalhe da conta `}</Text>
          <Text style={[styles.saldoDisponivel, styles.saldoTypo]}>
            Saldo disponivel
          </Text>
          <Text
            style={[styles.saldoPendente, styles.saldoTypo]}
          >{`Saldo Pendente `}</Text>
          <Text style={[styles.saldoEmAnalise, styles.saldoTypo]}>
            Saldo em analise
          </Text>
          <Text style={[styles.r0000, styles.r0000Typo]}>R$ 00,00</Text>
          <Text style={[styles.r00001, styles.r0000Typo]}>R$ 00,00</Text>
          <Text style={[styles.r00002, styles.r0000Typo]}>R$ 00,00</Text>
          <Text
            style={[styles.resgateSeuSaldo, styles.detalheDaConta1FlexBox]}
          >{`Resgate seu saldo disponível `}</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.frameParentPosition]}>
          <View style={[styles.frameChild, styles.framePosition]} />
        </View>
        <View style={[styles.rectangleFrame, styles.frameParentPosition]}>
          <View style={[styles.frameChild, styles.framePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 0,
    width: 430,
  },
  frameParentPosition: {
    height: 825,
    top: 0,
    position: "absolute",
  },
  framePosition: {
    opacity: 0.4,
    borderRadius: Border.br_11xl,
    left: "50%",
    marginLeft: -186,
    position: "absolute",
  },
  detalheDaConta1FlexBox: {
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  saldoTypo: {
    fontSize: FontSize.size_xl,
    left: 59,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    position: "absolute",
  },
  r0000Typo: {
    height: 49,
    width: 237,
    left: 15,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    fontSize: FontSize.size_17xl,
    position: "absolute",
  },
  icon: {
    top: 775,
    borderRadius: Border.br_xl,
    height: 157,
    width: 430,
    position: "absolute",
    overflow: "hidden",
  },
  frameChild: {
    top: 104,
    height: 617,
    width: 373,
    backgroundColor: Color.colorLightslategray_100,
    opacity: 0.4,
    borderRadius: Border.br_11xl,
    left: "50%",
    marginLeft: -186,
  },
  rectangleWrapper: {
    width: 430,
    left: 0,
  },
  frameItem: {
    top: 587,
    width: 81,
    height: 134,
    opacity: 0.4,
    borderRadius: Border.br_11xl,
    left: "50%",
    marginLeft: -186,
  },
  newLogoWcBrancaPrancheta1: {
    top: 51,
    left: 95,
    width: 260,
    height: 62,
    position: "absolute",
  },
  frameInner: {
    top: 113,
    height: 617,
    width: 373,
    backgroundColor: Color.colorLightslategray_100,
    opacity: 0.4,
    borderRadius: Border.br_11xl,
    left: "50%",
    marginLeft: -186,
  },
  detalheDaConta1: {
    top: 134,
    left: 62,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    fontSize: FontSize.size_17xl,
    textAlign: "center",
    color: Color.white,
  },
  saldoDisponivel: {
    top: 226,
  },
  saldoPendente: {
    top: 320,
  },
  saldoEmAnalise: {
    top: 412,
  },
  r0000: {
    top: 260,
  },
  r00001: {
    top: 352,
  },
  r00002: {
    top: 444,
  },
  resgateSeuSaldo: {
    top: 181,
    left: 63,
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
  },
  rectangleParent: {
    left: 430,
    width: 430,
  },
  rectangleContainer: {
    left: 860,
    width: 430,
  },
  rectangleFrame: {
    left: 1290,
    width: 430,
  },
  frameParent: {
    left: -430,
    width: 1720,
  },
  detalheDaConta: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default DetalheDaConta;
