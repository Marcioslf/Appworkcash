import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.login}>
      <View style={styles.frameParent}>
        <View style={styles.rectangleParent}>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <View style={styles.loginWith}>
            <Image
              style={[styles.googleButtonIcon, styles.buttonLayout]}
              contentFit="cover"
              source={require("../assets/google-button.png")}
            />
            <View style={[styles.facebookButton, styles.buttonLayout]}>
              <View style={[styles.facebookButtonChild, styles.childBorder]} />
              <Image
                style={styles.facebookIcIcon}
                contentFit="cover"
                source={require("../assets/facebook-ic.png")}
              />
            </View>
            <View style={[styles.appleButton, styles.buttonLayout]}>
              <View style={[styles.facebookButtonChild, styles.childBorder]} />
              <Image
                style={styles.facebookIcIcon}
                contentFit="cover"
                source={require("../assets/cibapple.png")}
              />
            </View>
            <View style={styles.loginWith1}>
              <Text style={[styles.ouEntrePor, styles.ouEntrePorFlexBox]}>
                Ou entre por
              </Text>
              <View style={[styles.loginWithChild, styles.loginPosition]} />
              <View style={[styles.loginWithItem, styles.loginPosition]} />
            </View>
          </View>
          <Pressable
            style={styles.loginButton}
            onPress={() => navigation.navigate("Dashboard")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/login-button.png")}
            />
          </Pressable>
          <View style={[styles.enterYourPasswordInput, styles.buttonLayout]}>
            <View
              style={[styles.enterYourPasswordInputChild, styles.childBorder]}
            />
            <Image
              style={styles.fluenteye20FilledIcon}
              contentFit="cover"
              source={require("../assets/fluenteye20filled.png")}
            />
            <Text
              style={[styles.digiteSuaSenha, styles.digiteTypo]}
            >{`Digite sua senha `}</Text>
          </View>
          <View style={[styles.enterYourEmailInput, styles.buttonLayout]}>
            <View
              style={[styles.enterYourPasswordInputChild, styles.childBorder]}
            />
            <Text style={[styles.digiteSeuEmail, styles.digiteTypo]}>
              Digite seu email
            </Text>
          </View>
          <View style={styles.text}>
            <Text
              style={[styles.welcomeBackGlad, styles.entrarTypo]}
            >{`Bem vindo a o novo
jeito de jogar !`}</Text>
          </View>
          <Text style={[styles.entrar, styles.entrarTypo]}>{`Entrar `}</Text>
          <Pressable
            style={styles.esqueceuSuaSenhaContainer}
            onPress={() => navigation.navigate("EsqueceuASenhaemail")}
          >
            <Text style={styles.esqueceuSuaSenha}>Esqueceu sua senha ?</Text>
          </Pressable>
          <Pressable
            style={[styles.back, styles.backLayout]}
            onPress={() => navigation.navigate("TelaIncial")}
          >
            <View style={[styles.backChild, styles.backLayout]} />
            <Image
              style={[styles.backArrowIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/back-arrow.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.rectangleWrapper, styles.rectanglePosition]}>
          <View style={[styles.frameItem, styles.frameLayout]} />
        </View>
        <View style={[styles.rectangleContainer, styles.rectanglePosition]}>
          <View style={[styles.frameItem, styles.frameLayout]} />
        </View>
        <View style={[styles.rectangleFrame, styles.rectanglePosition]}>
          <View style={[styles.frameItem, styles.frameLayout]} />
        </View>
      </View>
      <Image
        style={styles.newLogoWcBrancaPrancheta1}
        contentFit="cover"
        source={require("../assets/new-logo-wc-branca-prancheta-1-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  buttonLayout: {
    height: 59,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorAliceblue,
    borderStyle: "solid",
    top: 0,
    left: 0,
  },
  ouEntrePorFlexBox: {
    textAlign: "left",
    top: 0,
  },
  loginPosition: {
    height: 1,
    borderTopWidth: 1,
    top: 10,
    borderColor: Color.colorAliceblue,
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  digiteTypo: {
    height: 20,
    color: Color.gray,
    fontFamily: FontFamily.urbanistMedium,
    fontWeight: "500",
    lineHeight: 19,
    left: 19,
    top: 19,
    alignItems: "flex-end",
    display: "flex",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  entrarTypo: {
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    color: Color.white,
    position: "absolute",
  },
  backLayout: {
    height: 43,
    width: 43,
    position: "absolute",
  },
  rectanglePosition: {
    top: 0,
    height: 825,
    width: 430,
    position: "absolute",
  },
  frameChild: {
    top: 206,
  },
  googleButtonIcon: {
    left: 120,
    width: 111,
    top: 41,
    height: 59,
  },
  facebookButtonChild: {
    backgroundColor: Color.white,
    borderColor: Color.colorAliceblue,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    height: 59,
    position: "absolute",
    width: 111,
  },
  facebookIcIcon: {
    top: 16,
    left: 39,
    width: 28,
    height: 28,
    position: "absolute",
    overflow: "hidden",
  },
  facebookButton: {
    width: 111,
    top: 41,
    height: 59,
    left: 0,
  },
  appleButton: {
    left: 240,
    width: 111,
    top: 41,
    height: 59,
  },
  ouEntrePor: {
    left: 132,
    color: Color.darkGray,
    width: 89,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    height: 18,
    position: "absolute",
  },
  loginWithChild: {
    width: 120,
    left: 0,
  },
  loginWithItem: {
    left: 233,
    width: 119,
  },
  loginWith1: {
    height: 18,
    top: 0,
    width: 351,
    left: 0,
    position: "absolute",
  },
  loginWith: {
    top: 700,
    height: 101,
    width: 351,
    left: 40,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  loginButton: {
    left: "9.3%",
    top: "73.21%",
    right: "9.07%",
    bottom: "19.59%",
    width: "81.63%",
    height: "7.2%",
    position: "absolute",
  },
  enterYourPasswordInputChild: {
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_5xs,
    height: 59,
    position: "absolute",
    width: 351,
  },
  fluenteye20FilledIcon: {
    top: 18,
    left: 311,
    width: 23,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  digiteSuaSenha: {
    width: 144,
  },
  enterYourPasswordInput: {
    top: 479,
    width: 351,
    left: 40,
  },
  digiteSeuEmail: {
    width: 115,
  },
  enterYourEmailInput: {
    top: 403,
    width: 351,
    left: 40,
  },
  welcomeBackGlad: {
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    width: 297,
    color: Color.white,
    height: 83,
    textAlign: "left",
    top: 0,
    left: 0,
  },
  text: {
    top: 287,
    right: 93,
    height: 83,
    left: 40,
    position: "absolute",
  },
  entrar: {
    top: 625,
    left: 197,
    textAlign: "center",
    color: Color.white,
    fontSize: FontSize.size_mini,
    fontWeight: "700",
  },
  esqueceuSuaSenha: {
    textAlign: "right",
    color: Color.white,
    width: 144,
    alignItems: "flex-end",
    display: "flex",
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    height: 18,
  },
  esqueceuSuaSenhaContainer: {
    left: 247,
    top: 547,
    position: "absolute",
  },
  backChild: {
    borderRadius: Border.br_xs,
    borderWidth: 1,
    borderColor: Color.colorAliceblue,
    borderStyle: "solid",
    top: 0,
    left: 0,
    backgroundColor: Color.white,
  },
  backArrowIcon: {
    height: "46.21%",
    width: "46.21%",
    top: "26.9%",
    right: "29.43%",
    bottom: "26.9%",
    left: "24.37%",
    position: "absolute",
  },
  back: {
    top: 228,
    left: 44,
  },
  rectangleParent: {
    top: 52,
    height: 825,
    width: 430,
    left: 0,
    position: "absolute",
  },
  frameItem: {
    top: 104,
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
    top: -100,
    width: 1720,
    height: 854,
    left: 0,
    position: "absolute",
  },
  newLogoWcBrancaPrancheta1: {
    top: 810,
    left: 99,
    width: 260,
    height: 62,
    position: "absolute",
  },
  login: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
