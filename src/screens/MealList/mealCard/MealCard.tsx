import { Text, Card, CardItem } from 'native-base';
import { Image, View } from 'react-native';
import * as React from 'react';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface Props {
    navigation: any;
}

export interface State { }

class MealCard extends React.Component<Props, State> {
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Recipe')}>
                <Card style={styles.cardWrapper}>
                    <CardItem cardBody style={styles.imageWrapper}>
                        <Image
                            source={{
                                uri:
                                    'https://firebasestorage.googleapis.com/v0/b/sous-chef-bed75.appspot.com/o/eggplant-shashuka.png?alt=media&token=96e511d2-0545-4980-9e52-284035156b88',
                            }}
                            resizeMode="cover"
                            style={styles.mealImage}
                        />
                    </CardItem>
                    <CardItem style={styles.cardFooter}>
                        <Text style={styles.mealName}>
                            Eggplant Shashuka
                    </Text>
                        <Text style={styles.mealDescription}>
                            Middle Eastern eggs poached in tomato sauce
                    </Text>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        );
    }
}

export default MealCard;