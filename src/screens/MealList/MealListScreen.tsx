import { Text, Card, CardItem, View } from 'native-base';
import * as React from 'react';
import styles from './styles';
import MealCard from './mealCard/MealCard';
import MealSteps from './mealSteps/MealSteps';

export interface Props { }

export interface State { }

class MealListScreen extends React.Component<Props, State> {

    render() {
        return (
            <View>
            <MealCard/>
            {/* <MealSteps/> */}
            </View>
        );
    }
}

export default MealListScreen;