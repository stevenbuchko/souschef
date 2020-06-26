import { View } from 'native-base';
import { Image, Text, ImageBackground } from 'react-native';
import * as React from 'react';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface Props {
    navigation: any;
}
export interface State { }

const INGREDIENTS = [
    'green Pepper', 'small onion', 'small eggplant'
]


class RecipeHeader extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.headerWrapper}>
                <ImageBackground
                    source={{
                        uri:
                            'https://firebasestorage.googleapis.com/v0/b/sous-chef-bed75.appspot.com/o/eggplant-shashuka.png?alt=media&token=96e511d2-0545-4980-9e52-284035156b88',
                    }}
                    resizeMode="stretch"
                    style={styles.mealImage}
                >
                    <View style={styles.topWrapper}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image
                                source={{
                                    uri:
                                        'https://firebasestorage.googleapis.com/v0/b/sous-chef-bed75.appspot.com/o/back-arrow.png?alt=media&token=b2902508-6285-4a4a-af3e-09d1901a547d',
                                }}
                                resizeMode="contain"
                                style={styles.backBtn}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.recipeNameWrapper}>
                        <Text style={styles.recipeName}>Eggplant Shakshuka</Text>
                    </View>
                </ImageBackground>
                <Text style={styles.mealDescription}>
                    Middle Eastern eggs poached in tomato sauce
                </Text>
            </View>
        )
    }
}

export default RecipeHeader;