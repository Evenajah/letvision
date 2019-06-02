import React from 'react';
import { Text, View,  Button  } from 'react-native';
import * as firebase from 'firebase';

//stylesheet
import styles from '../styles';

import Head from '../component/Head';

export default class HomeScreen extends React.Component {

    onSignoutPress = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View >

                {/*Header*/}

                <Head/>
                
                <Button
                    title="Outline button"
                    
                    onPress={() => this.props.navigation.openDrawer()}
                />
                <Button
                    title="Logout"
                    
                    onPress={this.onSignoutPress}
                />
            </View>
        );
    }
}

