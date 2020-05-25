import React from 'react';
import * as firebase from "firebase/app";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { StyleSheet, View } from 'react-native';
import MealListScreen from './src/screens/MealList/MealListScreen';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async _cacheResourcesAsync() {
    await Font.loadAsync({
      'transat-text-light': require('./assets/fonts/transat_text_light-webfont.ttf'),
      'transat-text-standard': require('./assets/fonts/transat_text_standard-webfont.ttf'),
      'transat-text-medium': require('./assets/fonts/transat_text_medium-webfont.ttf'),
      'transat-text-bold': require('./assets/fonts/transat_text_bold-webfont.ttf'),
    });
  }

  // firebaseConfig = {
  //   apiKey: "AIzaSyBD7y986gV_Ao-EXpl50GynKoeSNLm6_1M",
  //   authDomain: "sous-chef-bed75.firebaseapp.com",
  //   databaseURL: "https://sous-chef-bed75.firebaseio.com",
  //   projectId: "sous-chef-bed75",
  //   storageBucket: "sous-chef-bed75.appspot.com",
  //   messagingSenderId: "818297411185",
  //   appId: "1:818297411185:web:37df7b05d325d0fa33edd0",
  //   measurementId: "G-QWBL8SS8K0"
  // };

  // // Initialize Firebase
  // firebaseApp = firebase.initializeApp(this.firebaseConfig);

  render() {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ fontLoaded: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <View style={styles.container}>
        <MealListScreen />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
