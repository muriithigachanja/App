import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Logo from "../components/Logo";

export default class ScreenOne extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  inputBox: {
    width: 300,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 25,
    paddingHorizontal: 18,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10
  },

  button: {
    backgroundColor: "#1c313a",
    width: 300,
    borderRadius: 25,
    paddingVertical: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
