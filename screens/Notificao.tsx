import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import GroupComponent from "../components/GroupComponent";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Notificao = () => {
  return (
    <View style={styles.notificao}>
      <Image
        style={styles.icon}
        contentFit="cover"
        source={require("../assets/32.png")}
      />
      <View style={[styles.frameParent, styles.frameParentLayout]}>
        <View style={[styles.rectangleWrapper, styles.frameParentLayout]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
        </View>
        <View style={[styles.rectangleContainer, styles.frameParentLayout]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
        </View>
        <View style={[styles.rectangleParent, styles.frameParentLayout]}>
          <View style={[styles.frameInner, styles.frameLayout]} />
          <View style={[styles.groupWrapper, styles.comissoWrapperLayout]}>
            <View style={[styles.comissoWrapper, styles.comissoWrapperLayout]}>
              <Text style={[styles.comisso, styles.comissoTypo]}>Comissão</Text>
            </View>
          </View>
          <View style={[styles.rectangleView, styles.frameChild1Layout]} />
          <View style={[styles.frameChild1, styles.frameChild1Layout]} />
          <GroupComponent />
          <Image
            style={styles.ellipseIcon}
            contentFit="cover"
            source={require("../assets/ellipse-9.png")}
          />
          <Text style={[styles.vendaRealizadaId, styles.comissoTypo]}>
            Venda realizada (ID 123123)
          </Text>
          <Text style={[styles.r123222300, styles.r123222300Typo]}>
            R$ 12.322.23.00
          </Text>
          <Text
            style={[styles.notificaes, styles.r123222300Typo]}
          >{`Notificações `}</Text>
        </View>
        <View style={[styles.rectangleFrame, styles.frameParentLayout]}>
          <View style={[styles.frameChild, styles.frameLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentLayout: {
    height: 825,
    position: "absolute",
  },
  frameLayout: {
    opacity: 0.4,
    height: 617,
    width: 373,
    backgroundColor: Color.colorLightslategray_100,
    borderRadius: Border.br_11xl,
    left: "50%",
    top: 104,
    position: "absolute",
  },
  comissoWrapperLayout: {
    height: 18,
    width: 203,
  },
  comissoTypo: {
    textAlign: "center",
    fontFamily: FontFamily.urbanistLight,
    fontWeight: "300",
    color: Color.white,
    position: "absolute",
  },
  frameChild1Layout: {
    height: 1,
    width: 335,
    backgroundColor: Color.colorGainsboro,
    position: "absolute",
  },
  r123222300Typo: {
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    textAlign: "center",
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
  },
  rectangleWrapper: {
    top: 0,
    width: 430,
    left: 0,
  },
  rectangleContainer: {
    left: 430,
    top: 0,
    width: 430,
  },
  frameInner: {
    marginLeft: -187,
  },
  comisso: {
    fontSize: FontSize.size_xs,
    height: 18,
    width: 203,
    top: 0,
    left: 0,
  },
  comissoWrapper: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupWrapper: {
    top: 203,
    left: 230,
    position: "absolute",
  },
  rectangleView: {
    top: 403,
    left: 53,
  },
  frameChild1: {
    top: 342,
    left: 51,
  },
  ellipseIcon: {
    height: "2.55%",
    width: "4.88%",
    top: "70.67%",
    right: "84.42%",
    bottom: "26.79%",
    left: "10.7%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vendaRealizadaId: {
    height: "2.18%",
    width: "47.21%",
    top: "71.03%",
    left: "17.67%",
    fontSize: FontSize.size_smi,
  },
  r123222300: {
    height: "1.58%",
    width: "17.67%",
    top: "71.52%",
    left: "68.37%",
    fontSize: FontSize.size_3xs,
    color: Color.colorIndigo,
  },
  notificaes: {
    top: 144,
    fontSize: FontSize.size_17xl,
    left: 53,
    color: Color.white,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  rectangleParent: {
    left: 860,
    top: 0,
    width: 430,
  },
  rectangleFrame: {
    left: 1290,
    top: 0,
    width: 430,
  },
  frameParent: {
    top: 4,
    left: -860,
    width: 1720,
  },
  notificao: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Notificao;
