import React from 'react';
import { Text, View, Button } from 'react-native';
import * as firebase from 'firebase';

import userData from '../component/UserData';

import Head from '../component/Head';


export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: ''
        }
    }


    componentDidMount() {
        const userDetail = userData.currentUser.providerData[0];

        console.log(userDetail.displayName);

        //formatuser
        /*
            displayname:
            emil:
            phoneNumber:
            protoURL:
            providerId:
            uid:
        */

    }


    onSignoutPress = () => {
        firebase.auth().signOut();
    }


    render() {

        return (
            <View >

                {/*Header*/}

                <Head />

                <Button
                    title="Outline buttonff"

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

