import { StyleSheet } from 'react-native';

const styles: any = StyleSheet.create({
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