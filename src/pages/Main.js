import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as firebase from 'firebase';

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    onSignoutPress = () => {
        firebase.auth().signOut();
      }

    render() {
        return (

            <View>

                <Text style={{ paddingTop: 20 }}>Main Screen</Text>

                <Button
                    onPress={this.onSignoutPress}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />


            </View>

        )
    }

}

const style = StyleSheet.create({

});