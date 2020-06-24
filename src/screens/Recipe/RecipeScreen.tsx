import * as React from 'react';
import styles from './styles';
import RecipeStep from './RecipeStep/RecipeStep'
import RecipeHeader from './RecipeHeader/RecipeHeader';
import { View, Container } from 'native-base';

export interface Props { }

export interface State { }

class RecipeScreen extends React.Component<Props, State> {

    render() {
        return (
            <Container style={styles.container}>
                <RecipeHeader />
                <RecipeStep />
            </Container>
        );
    }
}

export default RecipeScreen;