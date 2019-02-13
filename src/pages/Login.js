import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

import Logo from "../components/Logo";
import Form from "../components/Form";

export default class Login extends Component {
  static navigationOptions = {};
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Logo />

        <Form />
        <Text onPress={() => navigate('ScreenTwo')}>ME</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6D00"
  }
});
