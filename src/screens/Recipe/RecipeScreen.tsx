import * as React from 'react';
import styles from './styles';
import RecipeStep from './RecipeStep/RecipeStep'
import RecipeHeader from './RecipeHeader/RecipeHeader';
import { View } from 'native-base';

export interface Props { }

export interface State { }

class RecipeScreen extends React.Component<Props, State> {

    render() {
        return (
            <View style={styles.container}>
                <RecipeHeader />
                <RecipeStep />
            </View>
        );
    }
}

export default RecipeScreen;