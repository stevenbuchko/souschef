import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealListScreen from './src/screens/MealList/MealListScreen';
import RecipeScreen from './src/screens/Recipe/RecipeScreen';

const HomeStack = createStackNavigator();

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
      <NavigationContainer>
        <HomeStack.Navigator headerMode='none'>
          <HomeStack.Screen name="MealList" component={MealListScreen} />
          <HomeStack.Screen name="Recipe" component={RecipeScreen} />
        </HomeStack.Navigator>
      </NavigationContainer>
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
