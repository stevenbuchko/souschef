import { StyleSheet } from 'react-native';

const styles: any = StyleSheet.create({

    view: {
        width: '100%',
        marginLeft: 0,
        marginRight: 0,
    },
    mealImageContainer: {
        marginTop: 0,
        alignSelf: 'center',
        width: '100%',
        height: 220,
    },
    mealImage: {
        height: 220,
        width: '100%',
        flex: 1,
    },
    recipeNameCard: {
        position: 'absolute', 
        top: 0, 
        left: '6%', 
        right: 0, 
        bottom: 7, 
        justifyContent: 'flex-end', 
        alignItems: 'flex-start',
        width: '70%',
    },
    recipeName: {
        fontSize: 45,
        lineHeight: 48,
        color: 'white',
        fontFamily: 'transat-text-bold',
        // fontWeight: '100',
    },
    cardWrapper: {
        alignSelf: 'center',
        width: '90%',
        borderRadius: 16,
        marginLeft: 0,
        marginRight: 0,
    },
    steps: {
        flexDirection: 'column',
        borderRadius: 16
    },
    stepHeader: {
        fontSize: 32,
        fontFamily: 'transat-text-bold',
        alignSelf: 'flex-start',
        paddingBottom: 16
    },
    stepDescription: {
        fontSize: 24,
        fontFamily: 'transat-text-standard',
        alignSelf: 'flex-start',
        paddingBottom: 16


    }
});

export default styles;