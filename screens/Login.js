import React, { Component } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";
import { ImageBackground } from "react-native";
import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";




export default class Login extends Component {
  state = {
    email: "",
    password: "",
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
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Connexion
          </Text>
          <Block middle>
            <Input
              placeholder = "Votre mail..."
            />
            <Input
              secure
              placeholder = "mot de passe..."
            />
            <Button gradient onPress={() => navigation.navigate("Acceuil")}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Login
                </Text>
              )}
            </Button>

              <Text  onPress={() => navigation.navigate("Inscription")}
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Vous n'avez pas de compte ? inscrivez vous !
              </Text>
            
          </Block>
        </Block>
      </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  login: {
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
