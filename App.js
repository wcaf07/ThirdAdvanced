import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation'
import {Provider} from 'react-redux'
import store from './src/store'

import AuthScreen from './src/screens/AuthScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'

import MapScreen from './src/screens/MapScreen'
import ReviewScreen from './src/screens/ReviewScreen'
import DeckScreen from './src/screens/DeckScreen'
import SettingsScreen from './src/screens/SettingsScreen';

const SettingsNavigator = createStackNavigator({
  review : {screen : ReviewScreen},
  settings : {screen : SettingsScreen}
})

const UserNavigator = createBottomTabNavigator({
  map : { screen : MapScreen},
  deck : {screen : DeckScreen},
  review : {screen : SettingsNavigator}
}, {
  lazy: true
})

const MainNavigator = createBottomTabNavigator({
  welcome : { screen : WelcomeScreen},
  auth : { screen : AuthScreen},
  main : { screen : UserNavigator}
}, {
  defaultNavigationOptions : {
    tabBarVisible : false
  }
})

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {

  render() {
      return (
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      );
    }
}