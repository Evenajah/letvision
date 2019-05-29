import { StyleSheet, Text, View, TextInput, TouchableOpacity, YellowBox, Alert } from 'react-native';


const styles =  StyleSheet.create({

    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputBox: {
        fontFamily: 'Kanit-Light',
        width: 280,
        height: 40,
        color: '#ffffff',
        paddingHorizontal: 5,
        marginVertical: 10,
        fontSize: 15
    },

    buttonText: {
        fontFamily: 'Kanit-Light',
        fontSize: 15,
        color: '#ffffff',
        marginVertical: 10,

    },

    buttonFb: {
        flexDirection: 'row',
        width: 310,
        backgroundColor: '#FA8072',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonGg: {
        flexDirection: 'row',
        width: 310,
        backgroundColor: '#F08080',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        flexDirection: 'row',
        width: 310,
        backgroundColor: '#FFA07A',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonSign: {
        flexDirection: 'row',
        width: 310,
        backgroundColor: '#F08080',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    viewInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

});

export default styles;