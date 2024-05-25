import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const TransioParaSaqueOk = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.transioParaSaqueOk}>
      <View style={styles.transioParaSaqueOkChild} />
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildBg]} />
        <Text style={styles.swipeToSend}>Swipe to Send</Text>
        <View style={styles.frameItem} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
      <Text style={styles.coloqueOValor}>{`Coloque o valor `}</Text>
      <Text style={[styles.text, styles.textTypo3]}>1</Text>
      <Text style={[styles.text1, styles.textTypo3]}>2</Text>
      <Text style={[styles.text2, styles.textTypo3]}>3</Text>
      <Text style={[styles.text3, styles.textTypo3]}>{`4 `}</Text>
      <Text style={[styles.text4, styles.textTypo2]}>7</Text>
      <Text style={[styles.text5, styles.textTypo2]}>8</Text>
      <Text style={[styles.text6, styles.textTypo2]}>9</Text>
      <Text style={[styles.text7, styles.textTypo1]}>0</Text>
      <Text style={[styles.text8, styles.textTypo1]}>.</Text>
      <Text style={[styles.text9, styles.textTypo]}>5</Text>
      <Text style={[styles.text10, styles.textTypo]}>6</Text>
      <Text style={styles.yourTransferOf}>
        Your Transfer of $300 is on the way!
      </Text>
      <View style={[styles.btn1, styles.btnLayout]}>
        <Text style={[styles.trackTransfer, styles.transferPosition]}>
          Track Transfer
        </Text>
      </View>
      <View style={[styles.btn2, styles.btnLayout]}>
        <Text style={[styles.cancelTransfer, styles.transferPosition]}>
          Cancel Transfer
        </Text>
      </View>
      <View style={[styles.transioParaSaqueOkItem, styles.frameChildBg]} />
      <Text style={[styles.text11, styles.textTypo3]}>400,00</Text>
      <Image
        style={styles.transioParaSaqueOkInner}
        contentFit="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 105,
    width: 390,
  },
  frameChildBg: {
    backgroundColor: Color.white,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo3: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  textTypo2: {
    top: 584,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  textTypo1: {
    top: 679,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  textTypo: {
    top: 488,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.white,
    position: "absolute",
  },
  btnLayout: {
    height: 67,
    width: 369,
    borderRadius: Border.br_221xl,
    left: 31,
    position: "absolute",
  },
  transferPosition: {
    top: 21,
    textAlign: "center",
    fontFamily: FontFamily.neuethingSans,
    fontSize: FontSize.size_lg,
    left: "50%",
    position: "absolute",
  },
  transioParaSaqueOkChild: {
    marginLeft: 137,
    top: 809,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 17,
    height: 17,
    opacity: 0,
    borderRadius: Border.br_171xl,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    marginLeft: -195,
    top: 0,
    opacity: 0.1,
    height: 105,
    width: 390,
    borderRadius: Border.br_171xl,
    left: "50%",
    backgroundColor: Color.white,
  },
  swipeToSend: {
    top: 39,
    left: 255,
    textAlign: "left",
    fontFamily: FontFamily.neuethingSans,
    fontSize: FontSize.size_lg,
    color: Color.white,
    opacity: 0,
    position: "absolute",
  },
  frameItem: {
    top: 9,
    left: 294,
    borderRadius: 230,
    backgroundColor: Color.colorGainsboro,
    width: 87,
    height: 87,
    position: "absolute",
  },
  vectorIcon: {
    height: "17.33%",
    width: "2.33%",
    top: "41.81%",
    right: "10.13%",
    bottom: "40.86%",
    left: "87.54%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "3.81%",
    width: "6.46%",
    top: "50.48%",
    right: "10.21%",
    bottom: "45.71%",
    left: "83.33%",
    position: "absolute",
  },
  rectangleParent: {
    top: 765,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  coloqueOValor: {
    top: 229,
    left: 160,
    fontSize: FontSize.size_sm,
    color: "#6e6d6f",
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  text: {
    left: 89,
    top: 389,
    fontSize: FontSize.size_13xl,
    color: Color.white,
  },
  text1: {
    left: 206,
    top: 389,
    fontSize: FontSize.size_13xl,
    color: Color.white,
  },
  text2: {
    left: 325,
    top: 389,
    fontSize: FontSize.size_13xl,
    color: Color.white,
  },
  text3: {
    top: 484,
    left: 84,
    color: Color.white,
  },
  text4: {
    left: 87,
  },
  text5: {
    left: 206,
  },
  text6: {
    left: 323,
  },
  text7: {
    left: 205,
  },
  text8: {
    left: 91,
  },
  text9: {
    left: 206,
  },
  text10: {
    left: 320,
  },
  yourTransferOf: {
    marginLeft: -108.9,
    top: 608,
    fontSize: 19,
    width: 218,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.neuethingSans,
    opacity: 0,
    left: "50%",
    position: "absolute",
  },
  trackTransfer: {
    marginLeft: -61.5,
    color: Color.white,
  },
  btn1: {
    top: 1014,
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 1,
  },
  cancelTransfer: {
    marginLeft: -67.5,
    color: Color.colorTomato,
  },
  btn2: {
    top: 1099,
    backgroundColor: Color.colorCrimson,
  },
  transioParaSaqueOkItem: {
    top: 264,
    left: 126,
    borderRadius: 34,
    width: 183,
    height: 68,
  },
  text11: {
    top: 279,
    left: 157,
    color: Color.colorGray_300,
  },
  transioParaSaqueOkInner: {
    top: 27,
    left: 352,
    width: 50,
    height: 50,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "85.35%",
    top: "4.51%",
    right: "10%",
    bottom: "93.35%",
    width: "4.65%",
    height: "2.15%",
    position: "absolute",
  },
  transioParaSaqueOk: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default TransioParaSaqueOk;
