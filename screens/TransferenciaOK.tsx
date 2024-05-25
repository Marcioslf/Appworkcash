import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const TransferenciaOK = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.transferenciaOk}>
      <Image
        style={styles.transferenciaOkChild}
        contentFit="cover"
        source={require("../assets/rectangle-3.png")}
      />
      <Image
        style={styles.transferenciaOkItem}
        contentFit="cover"
        source={require("../assets/frame-1.png")}
      />
      <Text style={styles.transfernciaRealizadaR}>
        Transferência realizada R$ 400,00
      </Text>
      <View style={[styles.btn1, styles.btnLayout]}>
        <Text
          style={[styles.fazerTransferncia, styles.transfernciaPosition]}
        >{`Fazer transferência `}</Text>
      </View>
      <View style={[styles.btn2, styles.btnLayout]}>
        <Text
          style={[styles.cancelarTransferncia, styles.transfernciaPosition]}
        >{`Cancelar transferência `}</Text>
      </View>
      <Image
        style={styles.newLogoWcBrancaPrancheta1}
        contentFit="cover"
        source={require("../assets/new-logo-wc-branca-prancheta-1-2.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
      </Pressable>
      <Image
        style={styles.iconCancel}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnLayout: {
    height: 67,
    width: 369,
    borderRadius: Border.br_221xl,
    left: 31,
    position: "absolute",
  },
  transfernciaPosition: {
    fontSize: FontSize.size_lg,
    top: 21,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  transferenciaOkChild: {
    marginLeft: -1202,
    top: 244,
    borderRadius: Border.br_171xl,
    width: 969,
    height: 969,
    left: "50%",
    position: "absolute",
  },
  transferenciaOkItem: {
    top: 237,
    left: 122,
    width: 187,
    height: 187,
    position: "absolute",
    overflow: "hidden",
  },
  transfernciaRealizadaR: {
    marginLeft: -185,
    top: 466,
    fontSize: FontSize.size_13xl,
    width: 370,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  fazerTransferncia: {
    marginLeft: -90.5,
    color: Color.white,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    top: 21,
  },
  btn1: {
    top: 736,
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 1,
  },
  cancelarTransferncia: {
    marginLeft: -101.5,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorTomato,
  },
  btn2: {
    top: 821,
    backgroundColor: Color.colorCrimson,
  },
  newLogoWcBrancaPrancheta1: {
    top: 83,
    left: 99,
    width: 260,
    height: 62,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 350,
    top: 25,
    width: 50,
    height: 50,
    position: "absolute",
  },
  iconCancel: {
    height: "2.15%",
    width: "4.65%",
    top: "4.29%",
    right: "10.47%",
    bottom: "93.56%",
    left: "84.88%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  transferenciaOk: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default TransferenciaOK;
