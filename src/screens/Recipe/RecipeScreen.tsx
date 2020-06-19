import * as React from 'react';
import styles from './styles';
import RecipeStep from './RecipeStep/RecipeStep'
import RecipeHeader from './RecipeHeader/RecipeHeader';
import { Text, View } from 'native-base';

export interface Props { }

export interface State { }

class RecipeScreen extends React.Component<Props, State> {

    render() {
        return (
            <View style={styles.container}>
                <RecipeHeader />
                <Text style={styles.mealDescription}>
                    Middle Eastern eggs poached in tomato sauce
                </Text>
                <RecipeStep />
            </View>
        );
    }
}

export default RecipeScreen;