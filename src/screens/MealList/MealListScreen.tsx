import * as React from 'react';
import MealCard from './mealCard/MealCard';
import { View } from 'native-base';
import styles from './mealCard/styles';

export interface Props { }

export interface State { }

class MealListScreen extends React.Component<Props, State> {

    render() {
        return (
            <View style={styles.container}>
                <MealCard />
            </View>
        );
    }
}

export default MealListScreen;