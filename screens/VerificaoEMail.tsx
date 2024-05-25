import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import OTPContainer from "../components/OTPContainer";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const VerificaoEMail = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.verificaoEMail}>
      <View style={styles.frameParent}>
        <Pressable
          style={[styles.rectangleParent, styles.rectangleLayout]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <View style={[styles.frameChild, styles.frameLayout]} />
          <View style={styles.verifyButton}>
            <View style={[styles.verifyButtonChild, styles.iconLayout]} />
            <Text style={styles.verificar}>Verificar</Text>
          </View>
          <OTPContainer />
          <View style={styles.text}>
            <Text
              style={[styles.welcomeBackGlad, styles.coloqueOCodigoPosition]}
            >
              Verificação
            </Text>
            <Text
              style={[styles.coloqueOCodigo, styles.coloqueOCodigoPosition]}
            >{`Coloque o codigo de verificação que enviamos 
para seu e-mail`}</Text>
          </View>
          <Image
            style={styles.newLogoWcBrancaPrancheta1}
            contentFit="cover"
            source={require("../assets/new-logo-wc-branca-prancheta-1-1.png")}
          />
          <View style={[styles.back, styles.backLayout]}>
            <View style={[styles.backChild, styles.backLayout]} />
            <Pressable
              style={styles.backArrow}
              onPress={() => navigation.navigate("Cadastro")}
            >
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/back-arrow1.png")}
              />
            </Pressable>
          </View>
          <Image
            style={styles.newLogoWcBrancaPrancheta11}
            contentFit="cover"
            source={require("../assets/new-logo-wc-branca-prancheta-1-2.png")}
          />
        </Pressable>
        <View style={[styles.rectangleWrapper, styles.rectangleLayout]}>
          <View style={[styles.frameItem, styles.frameLayout]} />
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.frameItem, styles.frameLayout]} />
        </View>
        <View style={[styles.rectangleFrame, styles.rectangleLayout]}>
          <View style={[styles.frameItem, styles.frameLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 825,
    width: 430,
    position: "absolute",
  },
  frameLayout: {
    opacity: 0.4,
    height: 617,
    width: 373,
    backgroundColor: Color.colorLightslategray_100,
    borderRadius: Border.br_11xl,
    left: "50%",
    marginLeft: -186,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  coloqueOCodigoPosition: {
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  backLayout: {
    height: 41,
    width: 41,
    position: "absolute",
  },
  frameChild: {
    top: 208,
  },
  verifyButtonChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorIndigo,
    position: "absolute",
  },
  verificar: {
    top: 19,
    left: 137,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  verifyButton: {
    height: "6.79%",
    width: "76.98%",
    top: "78.3%",
    right: "12.79%",
    bottom: "14.91%",
    left: "10.23%",
    position: "absolute",
  },
  welcomeBackGlad: {
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    top: 0,
    color: Color.white,
  },
  coloqueOCodigo: {
    top: 49,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
    color: Color.gray1,
    width: 331,
  },
  text: {
    top: 419,
    right: 55,
    height: 97,
    left: 44,
    position: "absolute",
  },
  newLogoWcBrancaPrancheta1: {
    top: 320,
    left: 67,
    width: 327,
    height: 78,
    position: "absolute",
  },
  backChild: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.colorAliceblue,
    borderWidth: 1,
    top: 0,
    left: 0,
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  backArrow: {
    left: "24.39%",
    top: "26.83%",
    right: "29.27%",
    bottom: "26.83%",
    width: "46.34%",
    height: "46.34%",
    position: "absolute",
  },
  back: {
    top: 228,
    left: 44,
  },
  newLogoWcBrancaPrancheta11: {
    top: 108,
    left: 100,
    width: 260,
    height: 62,
    position: "absolute",
  },
  rectangleParent: {
    top: -22,
    left: 0,
  },
  frameItem: {
    top: 104,
  },
  rectangleWrapper: {
    left: 430,
    top: 0,
  },
  rectangleContainer: {
    left: 860,
    top: 0,
  },
  rectangleFrame: {
    left: 1290,
    top: 0,
  },
  frameParent: {
    top: -29,
    width: 1720,
    height: 854,
    left: 0,
    position: "absolute",
  },
  verificaoEMail: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default VerificaoEMail;
