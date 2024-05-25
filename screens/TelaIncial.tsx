import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const TelaIncial = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.telaIncial}>
      <View style={styles.frameParent}>
        <View style={[styles.vectorParent, styles.rectangleLayout]}>
          <Image
            style={[styles.frameChild, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-5.png")}
          />
          <View style={[styles.registerButton, styles.buttonPosition]}>
            <Pressable
              style={[styles.registerButtonChild, styles.buttonChildPosition]}
              onPress={() => navigation.navigate("Login")}
            />
          </View>
          <Pressable
            style={[styles.loginButton, styles.buttonPosition]}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <View
              style={[styles.loginButtonChild, styles.buttonChildPosition]}
            />
          </Pressable>
          <Text style={[styles.criarUmaConta, styles.umaTypo]}>
            Criar uma conta
          </Text>
          <Text
            style={[styles.jTenhoUma, styles.umaTypo]}
          >{`Já tenho uma conta `}</Text>
          <Image
            style={styles.newLogoWcBrancaPrancheta1}
            contentFit="cover"
            source={require("../assets/new-logo-wc-branca-prancheta-1-11.png")}
          />
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
      <Text style={[styles.politicaDePrivacidade, styles.umaTypo]}>
        Politica de privacidade da workcash
      </Text>
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
    borderRadius: Border.br_11xl,
    left: "50%",
    position: "absolute",
  },
  buttonPosition: {
    left: "11.63%",
    right: "11.4%",
    width: "76.98%",
    height: "7.03%",
    position: "absolute",
  },
  buttonChildPosition: {
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  umaTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  frameChild: {
    marginLeft: -194.5,
    top: 195,
  },
  registerButtonChild: {
    backgroundColor: Color.white,
    borderStyle: "solid",
    borderColor: Color.dark,
    borderWidth: 1,
  },
  registerButton: {
    top: "67.95%",
    bottom: "25.02%",
  },
  loginButtonChild: {
    backgroundColor: Color.colorIndigo,
  },
  loginButton: {
    top: "59.03%",
    bottom: "33.94%",
  },
  criarUmaConta: {
    top: 509,
    left: 110,
    color: Color.white,
    width: 211,
    height: 28,
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  jTenhoUma: {
    top: 581,
    left: 149,
    color: "#000",
    fontFamily: FontFamily.urbanistSemiBold,
    fontWeight: "600",
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  newLogoWcBrancaPrancheta1: {
    top: 338,
    left: 74,
    width: 313,
    height: 74,
    position: "absolute",
  },
  vectorParent: {
    left: 0,
  },
  frameItem: {
    marginLeft: -186,
    top: 104,
    backgroundColor: Color.colorLightslategray_100,
  },
  rectangleWrapper: {
    left: 552,
  },
  rectangleContainer: {
    left: 1104,
  },
  rectangleFrame: {
    left: 1656,
  },
  frameParent: {
    top: -60,
    width: 1720,
    height: 854,
    left: 0,
    position: "absolute",
  },
  politicaDePrivacidade: {
    top: 880,
    left: 93,
    textDecoration: "underline",
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    color: Color.primary,
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  telaIncial: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default TelaIncial;
