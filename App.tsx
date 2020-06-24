import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { StyleSheet, View } from 'react-native';
import MealListScreen from './src/screens/MealList/MealListScreen';
import RecipeScreen from './src/screens/Recipe/RecipeScreen';

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
      <RecipeScreen />
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
