import { StyleSheet, Dimensions } from 'react-native';

const styles: any = StyleSheet.create({
    headerWrapper: {
        width: '90%'
    },
    mealImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * .6,
        alignSelf: 'center'
    },
    topWrapper: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 40
    },
    backBtn: {
        width: 20,
        height: 20,
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
    mealDescription: {
        fontSize: 24,
        fontFamily: 'transat-text-standard',
        paddingTop: 20,
        paddingBottom: 16,
    }
});

export default styles;