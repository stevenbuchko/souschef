import { Text, Card, CardItem, View } from 'native-base';
import { Image } from 'react-native';
import * as React from 'react';
import styles from './styles';

export interface Props { }
export interface State { }

const INGREDIENTS = [
    'green Pepper', 'small onion', 'small eggplant'
]


class MealSteps extends React.Component<Props, State> {
    render() {
        return (
            <View>
                <Card style={styles.mealImageContainer}>
                <CardItem cardBody>
                    <Image
                        source={{
                            uri:
                                'https://firebasestorage.googleapis.com/v0/b/sous-chef-bed75.appspot.com/o/eggplant-shashuka.png?alt=media&token=96e511d2-0545-4980-9e52-284035156b88',
                        }}
                        resizeMode="cover"
                        style={styles.mealImage}
                    />
                </CardItem>
                <View style={styles.recipeNameCard}>
                <Text style={styles.recipeName}>Eggplant Shakshuka</Text>
                </View>
                </Card>

                
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
                <Card style={styles.cardWrapper}>
                    <CardItem style={styles.steps}>
                        <Text style={styles.stepHeader}>
                            Dice
                    </Text>
                        <Text style={styles.stepDescription}>
                            1 green pepper
                    </Text>
                    </CardItem>
                </Card>
                <Card style={styles.cardWrapper}>
                    <CardItem style={styles.steps}>
                        <Text style={styles.stepHeader}>
                            Next Steps
                    </Text>
                        <Text style={styles.stepDescription}>
                            ....
                    </Text>
                    </CardItem>
                </Card>



                
            </View>
        )
    }
}

export default MealSteps;