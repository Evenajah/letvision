import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Footer extends React.Component {


    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.copyrightText}>
                    {/*Copyright Symbol*/}
                    {'\u00A9'} LetView, 2019 | Powered by react-native
                </Text>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    copyrightText: {
        fontFamily: 'Kanit-Light',
        color: '#DCDCDC',
        fontSize: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },

});