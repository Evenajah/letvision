import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default class Logo extends React.Component {



    render() {
        return (
            <View style={styles.container}>

                <Image
                    source={require('../images/logo.png')}
                    style={{ width: 450, height: 150 }}
                />


                <View>
                    <Text style={styles.logoText}>Be sight for the blind.</Text>
                </View>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    logoText: {
        fontFamily:'Kanit-Light',
        fontSize: 15,
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    }

});