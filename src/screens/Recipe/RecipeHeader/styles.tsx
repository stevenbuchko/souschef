import { StyleSheet, Dimensions } from 'react-native';

const styles: any = StyleSheet.create({
    mealImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * .6,
        alignSelf: 'center'
    },
    recipeNameWrapper: {
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        marginBottom: 10,
    },
    recipeName: {
        fontSize: 32,
        color: 'white',
        fontFamily: 'transat-text-bold',
        width: '70%'
    },
});

export default styles;