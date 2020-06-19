import { Text, Card, CardItem } from 'native-base';
<<<<<<< HEAD
import { Image, StyleSheet, View } from 'react-native';
=======
import { Image, View } from 'react-native';
>>>>>>> 0ec956592c455168f312e09e091e4c9fd43841ba
import * as React from 'react';
import styles from './styles';

import { db } from '../../../config';

export interface Props { }

export interface State { }

class MealCard extends React.Component<Props, State> {

    mealRef = db.collection('meals').doc('sp5Ke6XxbGiVIG80XlYI');

    render() {
        return (
            <View style={styles.container}>
            <Card style={styles.cardWrapper}>
                <CardItem cardBody style={styles.imageWrapper}>
                    <Image
                        source={{
                            //     uri:
                            //         storage.ref('eggplant-shashuka.png').getDownloadURL(),
                            // }}

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
            </View>
        );
    }
}

export default MealCard;