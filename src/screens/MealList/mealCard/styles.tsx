import { StyleSheet } from 'react-native';

const styles: any = StyleSheet.create({

    cardWrapper: {
        alignSelf: 'center',
        width: '90%',
        borderRadius: 16,
    },
    mealImage: {
        height: 200,
        width: '100%',
        flex: 1,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    cardFooter: {
        flexDirection: 'column',
        borderRadius: 16
    },
    mealName: {
        fontSize: 32,
        fontFamily: 'transat-text-bold',
        alignSelf: 'flex-start',
        paddingBottom: 16
    },
    mealDescription: {
        fontSize: 24,
        fontFamily: 'transat-text-standard',
        alignSelf: 'flex-start',
        paddingBottom: 16
    }
});

export default styles;