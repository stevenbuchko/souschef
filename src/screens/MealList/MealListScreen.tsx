import * as React from 'react';
import MealCard from './mealCard/MealCard';
import { View } from 'native-base';
import styles from './mealCard/styles';

export interface Props {
    navigation: any;
}

export interface State { }

class MealListScreen extends React.Component<Props, State> {

    render() {
        return (
            <View style={styles.container}>
                <MealCard
                    navigation={this.props.navigation}
                />
            </View>
        );
    }
}

export default MealListScreen;