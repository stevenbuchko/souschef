import { Text, Card, CardItem } from 'native-base';
import { View } from 'react-native';
import * as React from 'react';
import styles from './styles';

export interface Props { }
export interface State { }

const INGREDIENTS = [
    'green Pepper', 'small onion', 'small eggplant'
]


class RecipeStep extends React.Component<Props, State> {
    render() {
        return (
            <Card style={styles.cardWrapper}>
                <CardItem style={styles.steps}>
                    <Text style={styles.stepHeader}>
                        Preheat
                        </Text>
                    <Text style={styles.stepDescription}>
                        Pan to medium-high
                        </Text>
                </CardItem>
            </Card>
        )
    }
}

export default RecipeStep;