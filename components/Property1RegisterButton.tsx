import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Property1RegisterButton = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.property1registerButton}
      onPress={() => navigation.navigate("VerificaoEMail")}
    >
      <Image
        style={styles.property1registerButtonChild}
        contentFit="cover"
        source={require("../assets/rectangle-1731.png")}
      />
      <Text style={styles.registrar}>Registrar</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  property1registerButtonChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  registrar: {
    height: "30.91%",
    width: "25.23%",
    top: "33.27%",
    left: "36.62%",
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    color: Color.white,
    textAlign: "center",
    position: "absolute",
  },
  property1registerButton: {
    top: 268,
    left: 20,
    width: 325,
    height: 55,
    position: "absolute",
  },
});

export default Property1RegisterButton;
