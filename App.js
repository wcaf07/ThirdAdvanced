import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'

import AuthScreen from './src/screens/AuthScreen'
import WelcomeScreen from './src/screens/WelcomeScreen'

import MapScreen from './src/screens/MapScreen'
import ReviewScreen from './src/screens/ReviewScreen'

export default class App extends Component {

  mainNavigator = createBottomTabNavigator({
    welcome : { screen : WelcomeScreen},
    auth : { screen : AuthScreen}
  })

  render() {
      return (
        <View style={styles.container}>
          {this.mainNavigator}
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
