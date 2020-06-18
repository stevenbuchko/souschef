import { Text, Card, CardItem, View } from 'native-base';
import * as React from 'react';
import MealCard from './mealCard/MealCard';
<<<<<<< HEAD
import MealSteps from './mealSteps/MealSteps';
=======
import { View } from 'native-base';
import styles from './mealCard/styles';
>>>>>>> 0ec956592c455168f312e09e091e4c9fd43841ba

export interface Props { }

export interface State { }

class MealListScreen extends React.Component<Props, State> {

    render() {
        return (
<<<<<<< HEAD
            <View>
            <MealCard/>
            {/* <MealSteps/> */}
=======
            <View style={styles.container}>
                <MealCard />
>>>>>>> 0ec956592c455168f312e09e091e4c9fd43841ba
            </View>
        );
    }
}

export default MealListScreen;