import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font } from 'expo';

export default class Logo extends React.Component {


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

                <Image
                    source={require('../images/logo.png')}
                    style={{ width: 350, height: 150 }}
                />
                
                {
                    //โหลดฟ้อน
                    this.state.fontLoaded ? (
                        <View>
                            <Text style={styles.logoText}>Be sight for the blind.</Text>
                        </View>
                    ) : null
                }

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
        fontSize: 18,
        color: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    }

});