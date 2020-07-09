import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Animated,
    Dimensions,
    Image,
    FlatList,
    Modal,
    ScrollView
} from 'react-native';
//import logo from '../assets/logo.png';
import { Button, Block, Text } from "../components";
import { theme } from "../constants";
import { ImageBackground } from "react-native";
class Splash extends Component{

    constructor(props) {
        super(props);
        this.state = {
            fadeIn: new Animated.Value(0)
        }
    }

    


    render() {
        const { navigation } = this.props;
        let {fadeIn} = this.state;

        return (
        <ImageBackground
        source={require("../assets/Capture.PNG")}
        style={{ flex: 1, width: null, height: null }}
      >
            <Block>
                <Block center bottom flex={0.4}>
                <Text h1 center bold>
                    
                    <Text h1 primary>
                    {"Purificateur d'air"}
                    
                    </Text>
                </Text>
                
                </Block>
                <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2]}>
                <Button gradient onPress={() => navigation.navigate("Login")}>
                    <Text center semibold white>
                    Commencer
                    </Text>
                </Button>
                
                </Block>
            </Block>
            </ImageBackground>
        )
    }


}

export default Splash;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF"
    },

});
