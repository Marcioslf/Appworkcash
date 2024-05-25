import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Container from "../components/Container";
import GeneralInformationContainer from "../components/GeneralInformationContainer";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Dashboard = () => {
  return (
    <View style={[styles.dashboard, styles.parentLayout]}>
      <View style={[styles.frameParent, styles.frameLayout]}>
        <View style={[styles.rectangleWrapper, styles.framePosition]}>
          <View style={[styles.frameChild, styles.parentPosition]} />
        </View>
        <View style={[styles.rectangleContainer, styles.framePosition]}>
          <View style={[styles.frameChild, styles.parentPosition]} />
        </View>
        <View style={[styles.rectangleFrame, styles.framePosition]}>
          <View style={[styles.frameChild, styles.parentPosition]} />
        </View>
        <View style={[styles.frameView, styles.framePosition]}>
          <View style={[styles.frameChild, styles.parentPosition]} />
        </View>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Text style={[styles.marcioLira, styles.sacarTypo]}>Marcio Lira</Text>
        <Text style={[styles.rankEspartano, styles.sacarTypo]}>
          <Text style={styles.rank}>{`Rank: `}</Text>
          <Text style={styles.espartano}>Espartano</Text>
        </Text>
        <View style={styles.groupWrapper}>
          <Container />
        </View>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/rectangle-173.png")}
        />
        <Text style={[styles.sacar, styles.sacarTypo]}>Sacar</Text>
      </View>
      <View style={[styles.parent, styles.parentPosition]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/3.png")}
        />
        <GeneralInformationContainer />
        <Image
          style={styles.newLogoWcBrancaPrancheta1}
          contentFit="cover"
          source={require("../assets/new-logo-wc-branca-prancheta-1-2.png")}
        />
      </View>
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    height: 932,
    overflow: "hidden",
  },
  frameLayout: {
    height: 825,
    position: "absolute",
  },
  framePosition: {
    top: 0,
    width: 430,
  },
  parentPosition: {
    opacity: 0.4,
    position: "absolute",
  },
  sacarTypo: {
    textAlign: "center",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    position: "absolute",
  },
  frameChild: {
    marginLeft: -186,
    top: 104,
    left: "50%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorLightslategray_100,
    width: 373,
    height: 617,
  },
  rectangleWrapper: {
    width: 430,
    height: 825,
    position: "absolute",
    left: 0,
  },
  rectangleContainer: {
    left: 430,
    width: 430,
    height: 825,
    position: "absolute",
  },
  rectangleFrame: {
    left: 860,
    width: 430,
    height: 825,
    position: "absolute",
  },
  frameView: {
    left: 1290,
    width: 430,
    height: 825,
    position: "absolute",
  },
  ellipseIcon: {
    top: 125,
    left: 56,
    width: 142,
    height: 142,
    position: "absolute",
  },
  marcioLira: {
    top: 172,
    left: 213,
    fontSize: 25,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  rank: {
    color: "#5d5d5d",
  },
  espartano: {
    color: "#fbbb00",
  },
  rankEspartano: {
    top: 202,
    left: 232,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  groupWrapper: {
    height: "17.82%",
    width: "14.53%",
    top: "26.55%",
    right: "79.88%",
    bottom: "55.64%",
    left: "5.58%",
    position: "absolute",
  },
  frameParent: {
    top: 4,
    width: 1720,
    left: 0,
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_5xs,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  sacar: {
    top: 6,
    left: 122,
    fontSize: FontSize.size_base,
    width: 65,
    height: 19,
    color: Color.white,
    textAlign: "center",
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
  },
  vectorParent: {
    height: "3.22%",
    width: "71.86%",
    top: "41.42%",
    right: "13.02%",
    bottom: "55.36%",
    left: "15.12%",
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
  newLogoWcBrancaPrancheta1: {
    top: 27,
    left: 91,
    width: 260,
    height: 62,
    position: "absolute",
  },
  parent: {
    borderRadius: 7,
    width: 430,
    top: 0,
    left: 0,
    overflow: "hidden",
    height: 932,
  },
  image2Icon: {
    top: 134,
    left: 61,
    borderRadius: 112,
    width: 132,
    height: 133,
    position: "absolute",
  },
  dashboard: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGray_300,
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default Dashboard;
