import { View } from 'native-base';
import { Text, ImageBackground } from 'react-native';
import * as React from 'react';
import styles from './styles';

export interface Props { }
export interface State { }

const INGREDIENTS = [
    'green Pepper', 'small onion', 'small eggplant'
]


class RecipeHeader extends React.Component<Props, State> {
    render() {
        return (
            <ImageBackground
                source={{
                    uri:
                        'https://firebasestorage.googleapis.com/v0/b/sous-chef-bed75.appspot.com/o/eggplant-shashuka.png?alt=media&token=96e511d2-0545-4980-9e52-284035156b88',
                }}
                resizeMode="stretch"
                style={styles.mealImage}
            >
                <View style={styles.recipeNameWrapper}>
                    <Text style={styles.recipeName}>Eggplant Shakshuka</Text>
                </View>
            </ImageBackground>
        )
    }
}

export default RecipeHeader;