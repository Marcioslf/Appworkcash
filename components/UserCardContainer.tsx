import * as React from "react";
import { StyleSheet, View } from "react-native";
import Property1RegisterButton from "./Property1RegisterButton";
import Property1PasswordInput2 from "./Property1PasswordInput2";
import Property1PasswordInput1 from "./Property1PasswordInput1";
import Property1PasswordInput from "./Property1PasswordInput";
import Property1EmailInput from "./Property1EmailInput";
import Property1UsernameInput1 from "./Property1UsernameInput1";
import Property1UsernameInput from "./Property1UsernameInput";
import { Border, Color } from "../GlobalStyles";

const UserCardContainer = () => {
  return (
    <View style={styles.component1}>
      <Property1RegisterButton />
      <Property1PasswordInput2 />
      <Property1PasswordInput1 />
      <Property1PasswordInput />
      <Property1EmailInput />
      <Property1UsernameInput1 />
      <Property1UsernameInput />
    </View>
  );
};

const styles = StyleSheet.create({
  component1: {
    position: "absolute",
    top: 327,
    left: 31,
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 366,
    height: 343,
    overflow: "hidden",
  },
});

export default UserCardContainer;
