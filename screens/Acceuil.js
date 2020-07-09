import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";
class Acceuil extends Component {

  render() {
    return (
      <ImageBackground
        source={require("../assets/Capture.PNG")}
        style={{ flex: 1, width: null, height: null }}
      >
        <View
          style={{
            position: "relative",
            top: 45,
          }}
        >
          <Text 
            style={{
              textAlign: "center",
              marginTop: 0,
              fontWeight: "bold",
              color: "black",
              //fontFamily: "Comfortaa",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: 34,
              letterSpacing: "0.07em",
            }}
          >
            Accueil
          </Text>
          
        </View>
        <TouchableOpacity>
          <View
            style={{
              position: "absolute",
              top: 100,
              left: 25,
              height: 150,
              width: 150,
              backgroundColor: "#e1e1d6",
            }}
          >
            <Image
              source={require("../assets/1.png")}
              style={{ width: 80, height: 80, margin: "auto" }}
            />
            <Text
              style={{
                height: 25,
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Lancer le rebot
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              position: "absolute",
              top: 100,
              left: 200,
              height: 150,
              width: 150,
              backgroundColor: "#e1e1d6",
            }}
          >
            <Image
              source={require("../assets/6.png")}
              style={{ width: 80, height: 80, margin: "auto" }}
            />
            <Text
              style={{
                height: 25,
                textAlign: "center",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Paramètrage
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View
          style={{
            position: "absolute",
            top: 270,
            left: 200,
            height: 150,
            width: 150,
            backgroundColor: "#e1e1d6",
          }}
        >
          <Image
            source={require("../assets/4.png")}
            style={{ width: 80, height: 80, margin: "auto" }}
          />
          <Text
            style={{
              height: 25,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Utilisation
          </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View
        
          style={{
            position: "absolute",
            top: 270,
            left: 25,
            height: 150,
            width: 150,
            backgroundColor: "#e1e1d6",
          }}
        >
          <Image
            source={require("../assets/3.png")}
            style={{ width: 80, height: 80, margin: "auto" }}
          />
          <Text
            style={{
              height: 25,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Conseils
          </Text>
        </View>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            top: 500,
            left: 200,
            height: 150,
            width: 150,
            backgroundColor: "#e1e1d6",
          }}
        >
          <Image
            source={require("../assets/0.jfif")}
            style={{ width: 80, height: 80, margin: "auto" }}
          />
          <Text
            style={{
              height: 25,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Qui somme nous?
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            top: 500,
            left: 25,
            height: 150,
            width: 150,
            backgroundColor: "#e1e1d6",
          }}
        >
          <Image
            source={require("../assets/general.png")}
            style={{ width: 80, height: 80, margin: "auto" }}
          />
          <Text
            style={{
              height: 25,
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}
          >
            Géneral
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: "stretch",
    width: null,
  },
});

export default Acceuil;
