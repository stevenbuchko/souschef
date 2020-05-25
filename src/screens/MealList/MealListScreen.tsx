import * as React from 'react';
import styles from './styles';
import MealCard from './mealCard/MealCard';

export interface Props { }

export interface State { }

class MealListScreen extends React.Component<Props, State> {
    render() {
        return (
            <MealCard />
        );
    }
}

export default MealListScreen;