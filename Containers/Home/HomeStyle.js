import {StyleSheet } from 'react-native'

const HomeStyle = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        alignItems: 'center'
    },
    content: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 18,
        padding: 20,
        color: 'white'
    },

    buttonWrapper: {
        marginTop: 20,
        alignItems: 'center'
    },

    buttonContainer: {
        width: 250,
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 15
    },
    buttonText: {
        padding: 20,
        color: 'white'
    },
    inputStyle: {
        marginTop: 30,
        borderRadius: 25,
        width: '80%',
        height: 45,
        borderColor: 'black',
        borderWidth: 1,
    }

})

export default HomeStyle