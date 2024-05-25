import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import UserCardContainer from "../components/UserCardContainer";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Cadastro = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.cadastro}>
      <View style={styles.frameParent}>
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <Image
            style={styles.newLogoWcBrancaPrancheta1}
            contentFit="cover"
            source={require("../assets/new-logo-wc-branca-prancheta-1-2.png")}
          />
          <Pressable
            style={[styles.back, styles.backLayout]}
            onPress={() => navigation.navigate("TelaIncial")}
          >
            <View style={[styles.backChild, styles.childBorder]} />
            <Image
              style={styles.backArrowIcon}
              contentFit="cover"
              source={require("../assets/back-arrow.png")}
            />
          </Pressable>
        </View>
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
      <Pressable
        style={styles.vocTemUamContainer}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text}>
          <Text style={styles.vocTemUam}>Você tem uam conta ?</Text>
          <Text style={styles.entreAgora}> Entre agora</Text>
        </Text>
      </Pressable>
      <View style={[styles.registerWith, styles.registerLayout1]}>
        <Image
          style={[styles.googleButtonIcon, styles.buttonLayout]}
          contentFit="cover"
          source={require("../assets/google-button1.png")}
        />
        <View style={[styles.facebookButton, styles.buttonLayout]}>
          <View style={[styles.facebookButtonChild, styles.buttonLayout]} />
          <Image
            style={styles.facebookIcIcon}
            contentFit="cover"
            source={require("../assets/facebook-ic1.png")}
          />
        </View>
        <View style={[styles.appleButton, styles.buttonLayout]}>
          <View style={[styles.facebookButtonChild, styles.buttonLayout]} />
          <Image
            style={styles.facebookIcIcon}
            contentFit="cover"
            source={require("../assets/cibapple1.png")}
          />
        </View>
        <View style={[styles.registerWith1, styles.registerWith1Layout]}>
          <Text
            style={[styles.ouRegistrePor, styles.ouRegistrePorFlexBox]}
          >{`Ou registre por `}</Text>
          <View style={[styles.registerWithChild, styles.registerLayout]} />
          <View style={[styles.registerWithItem, styles.registerLayout]} />
        </View>
      </View>
      <View style={[styles.text1, styles.text1Layout]}>
        <View style={[styles.helloRegisterToGetStarted, styles.text1Layout]}>
          <Text
            style={[
              styles.helloRegisterToContainer,
              styles.ouRegistrePorFlexBox,
            ]}
          >
            <Text style={styles.vocTemUam}>{`Bem vindo `}</Text>
            <Text style={styles.jogador}>jogador,</Text>
            <Text style={styles.vocTemUam}>{` 
Registre para `}</Text>
            <Text style={styles.jogador}>começar</Text>
            <Text style={styles.vocTemUam}>!</Text>
          </Text>
        </View>
      </View>
      <UserCardContainer />
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
  backLayout: {
    height: 43,
    width: 43,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorAliceblue,
    borderStyle: "solid",
    backgroundColor: Color.white,
    top: 0,
    left: 0,
  },
  registerLayout1: {
    width: 325,
    position: "absolute",
  },
  buttonLayout: {
    height: 55,
    width: 103,
    position: "absolute",
  },
  registerWith1Layout: {
    height: 17,
    top: 0,
  },
  ouRegistrePorFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  registerLayout: {
    height: 1,
    width: 102,
    borderTopWidth: 1,
    top: 9,
    borderColor: Color.colorAliceblue,
    borderStyle: "solid",
    position: "absolute",
  },
  text1Layout: {
    height: 77,
    width: 325,
    position: "absolute",
  },
  frameChild: {
    top: 208,
  },
  newLogoWcBrancaPrancheta1: {
    top: 110,
    left: 103,
    width: 260,
    height: 62,
    position: "absolute",
  },
  backChild: {
    borderRadius: Border.br_xs,
    height: 43,
    width: 43,
    position: "absolute",
  },
  backArrowIcon: {
    height: "46.21%",
    width: "46.21%",
    top: "26.9%",
    right: "29.43%",
    bottom: "26.9%",
    left: "24.37%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  back: {
    top: 222,
    left: 49,
  },
  rectangleParent: {
    left: 0,
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
    top: -49,
    width: 1720,
    height: 854,
    left: 0,
    position: "absolute",
  },
  vocTemUam: {
    color: Color.white,
  },
  entreAgora: {
    color: Color.colorBlueviolet,
  },
  text: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0.2,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.urbanistMedium,
    textAlign: "center",
    width: 239,
    height: 20,
  },
  vocTemUamContainer: {
    left: 106,
    top: 835,
    position: "absolute",
  },
  googleButtonIcon: {
    left: 111,
    top: 38,
    width: 103,
  },
  facebookButtonChild: {
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderColor: Color.colorAliceblue,
    borderStyle: "solid",
    backgroundColor: Color.white,
    top: 0,
    left: 0,
  },
  facebookIcIcon: {
    top: 15,
    left: 36,
    width: 26,
    height: 26,
    position: "absolute",
    overflow: "hidden",
  },
  facebookButton: {
    top: 38,
    width: 103,
    left: 0,
  },
  appleButton: {
    left: 222,
    top: 38,
    width: 103,
  },
  ouRegistrePor: {
    left: 113,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.urbanistSemiBold,
    color: Color.darkGray,
    width: 120,
    height: 17,
    top: 0,
  },
  registerWithChild: {
    left: 0,
  },
  registerWithItem: {
    left: 224,
  },
  registerWith1: {
    width: 325,
    position: "absolute",
    left: 0,
  },
  registerWith: {
    top: 662,
    height: 93,
    left: 52,
  },
  jogador: {
    color: Color.colorIndigo,
  },
  helloRegisterToContainer: {
    height: "100%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_11xl,
    letterSpacing: -0.3,
    lineHeight: 39,
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    width: "100%",
  },
  helloRegisterToGetStarted: {
    top: 0,
    height: 77,
    left: 0,
  },
  text1: {
    top: 227,
    left: 52,
  },
  cadastro: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default Cadastro;
