import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const EsqueceuASenhaemail = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.esqueceuASenhaemail}>
      <View style={styles.frameParent}>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.framePosition]} />
          <View style={styles.sendCodeButton}>
            <Image
              style={[styles.sendCodeButtonChild, styles.backArrowIconLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-1732.png")}
            />
            <Text style={styles.enviarCodigo}>Enviar codigo!</Text>
          </View>
          <View style={styles.enterYourEmailInput}>
            <View
              style={[styles.enterYourEmailInputChild, styles.childBorder]}
            />
            <Text style={[styles.enterYourEmail, styles.noSePreocupeFlexBox]}>{`
Digite seu e-mail`}</Text>
          </View>
          <View style={styles.text}>
            <Text style={[styles.welcomeBackGlad, styles.noSePreocupeFlexBox]}>
              Esqueceu sua senha ?
            </Text>
            <Text style={[styles.noSePreocupe, styles.noSePreocupeFlexBox]}>
              Não se preocupe! Por favor, insira o endereço de e-mail vinculado
              à sua conta.
            </Text>
          </View>
          <Pressable
            style={[styles.back, styles.backLayout]}
            onPress={() => navigation.navigate("TelaIncial")}
          >
            <View style={[styles.backChild, styles.backLayout]} />
            <Image
              style={[styles.backArrowIcon, styles.backArrowIconLayout]}
              contentFit="cover"
              source={require("../assets/back-arrow1.png")}
            />
          </Pressable>
          <Image
            style={styles.newLogoWcBrancaPrancheta1}
            contentFit="cover"
            source={require("../assets/new-logo-wc-branca-prancheta-1-2.png")}
          />
        </View>
        <View style={[styles.rectangleWrapper, styles.rectangleLayout]}>
          <View style={[styles.frameItem, styles.framePosition]} />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.frameItem, styles.framePosition]} />
        </View>
        <View style={[styles.rectangleFrame, styles.rectangleLayout]}>
          <View style={[styles.frameItem, styles.framePosition]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 825,
    width: 430,
    top: 0,
    position: "absolute",
  },
  framePosition: {
    opacity: 0.4,
    width: 373,
    backgroundColor: Color.colorLightslategray_100,
    borderRadius: Border.br_11xl,
    left: "50%",
    marginLeft: -186,
    position: "absolute",
  },
  backArrowIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorAliceblue,
    borderStyle: "solid",
    left: 0,
  },
  noSePreocupeFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  backLayout: {
    height: 41,
    width: 41,
    position: "absolute",
  },
  frameChild: {
    top: 303,
    height: 522,
  },
  sendCodeButtonChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    width: "100%",
    maxWidth: "100%",
  },
  enviarCodigo: {
    top: 141,
    left: 118,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    textAlign: "center",
    color: Color.white,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  sendCodeButton: {
    height: "21.58%",
    width: "194.88%",
    top: "61.09%",
    right: "-106.51%",
    bottom: "17.33%",
    left: "11.63%",
    position: "absolute",
  },
  enterYourEmailInputChild: {
    top: 1,
    backgroundColor: Color.colorWhitesmoke,
    height: 56,
    width: 331,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  enterYourEmail: {
    left: 18,
    lineHeight: 19,
    color: Color.gray,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    top: 0,
  },
  enterYourEmailInput: {
    top: 531,
    height: 57,
    width: 331,
    left: 50,
    position: "absolute",
  },
  welcomeBackGlad: {
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    color: Color.white,
    top: 0,
    left: 0,
  },
  noSePreocupe: {
    top: 49,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.gray,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    textAlign: "left",
    width: 331,
    left: 0,
  },
  text: {
    top: 403,
    right: 49,
    height: 97,
    left: 50,
    position: "absolute",
  },
  backChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.colorAliceblue,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  backArrowIcon: {
    height: "46.34%",
    width: "46.34%",
    top: "26.83%",
    right: "29.27%",
    bottom: "26.83%",
    left: "24.39%",
  },
  back: {
    top: 334,
    left: 50,
  },
  newLogoWcBrancaPrancheta1: {
    top: 210,
    left: 91,
    width: 260,
    height: 62,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
  },
  frameItem: {
    top: 104,
    height: 617,
  },
  rectangleWrapper: {
    left: 430,
  },
  rectangleContainer: {
    left: 860,
  },
  rectangleFrame: {
    left: 1290,
  },
  frameParent: {
    top: -107,
    width: 1720,
    height: 854,
    left: 0,
    position: "absolute",
  },
  esqueceuASenhaemail: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default EsqueceuASenhaemail;
