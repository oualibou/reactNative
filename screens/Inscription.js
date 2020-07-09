import React, { Component } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import { ImageBackground } from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

export default class Inscription extends Component {
  state = {
    email: null,
    username: null,
    password: null,
    errors: [],
    loading: false
  };



  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <ImageBackground
      source={require("../assets/Capture.PNG")}
      style={{ flex: 1, width: null, height: null }}
    >
      <KeyboardAvoidingView style={styles.signup} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Inscription
          </Text>
          <Block middle>
            
            <Input
              placeholder = "username"
              error={hasErrors("username")}
              style={[styles.input, hasErrors("username")]}
              defaultValue={this.state.username}
              onChangeText={text => this.setState({ username: text })}
            />
            <Input
              email
              placeholder = "Email"
              error={hasErrors("email")}
              style={[styles.input, hasErrors("email")]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              secure
              placeholder = "Mot de passe"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button gradient onPress={() => navigation.navigate("Login")}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Register
                </Text>
              )}
            </Button>

            
          </Block>
        </Block>
      </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  signup: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
