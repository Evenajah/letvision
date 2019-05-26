import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';


export default class Footer extends React.Component {

    // setFont 
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Kanit-Light': require('../../assets/fonts/Kanit-Light.ttf')
        });

        this.setState({ fontLoaded: true });
    }


    render() {
        return (
            <View style={styles.container}>
                {
                    //โหลดฟ้อน
                    this.state.fontLoaded ? (
                        <View>
                            <Text style={styles.copyrightText}>
                                {/*Copyright Symbol*/}
                                {'\u00A9'} LetView, 2019 | Powered by react-native
                            </Text>
                        </View>
                    ) : null
                }
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