import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./helpers/rootReducer";
import Splash from "./screens/Splash";
import Acceuil from "./screens/Acceuil";
import Inscription from "./screens/Inscription";
import Login from "./screens/Login";
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(
  rootReducer,
  composeWithDevTools()

);
const BottomNavigator = createBottomTabNavigator(
  {
    Acceuil: {
      screen: Acceuil,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name={"home"} color={tintColor} size={24} />
        ),
      }),
    },
    
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#7766C6",
      inactiveTintColor: "black",
    },
  }
);

const AppNavigator = createStackNavigator(
  {
    Splash: { screen: Splash, navigationOptions: { headerShown: false } },
    Login: { screen: Login, navigationOptions: { headerShown: false } },
    Inscription: { screen: Inscription, navigationOptions: { headerShown: false } },
    Home: {
      screen: BottomNavigator,
      navigationOptions: { headerShown: false },
    },
    Acceuil: { screen: Acceuil, navigationOptions: { headerShown: false } },
   
  },
  {
    initialRouteName: "Splash",
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
