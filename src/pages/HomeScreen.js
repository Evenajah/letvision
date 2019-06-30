import React from 'react';

// component
import { Text, View, Button } from 'react-native';
import Head from '../component/Head';
import Loading from './Loading';
import SelectStatUserScreen from './SelectStatUserScreen';

// fire
import * as firebase from 'firebase';

// userAuth
import userData from '../component/UserData';
import CheckStatUser from '../component/CheckStatUser';





export default class HomeScreen extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            userId: userData.currentUser.uid,
            userData: {},
            currentUser: '',
            isLoading: false,
        }
    }

    componentDidMount() {
        firebase.database().ref(`/users/${this.state.userId}`).once('value', (data) => {
            this.setState({
                userData: data.toJSON(),
            })
            // console.log('userData',this.state.userData)
        }).then(() => {
            this.setState({ isLoading: true })
        });

    }



    onSignoutPress = () => {
        firebase.auth().signOut();
    }


    render() {
        // checkLoad
        if (this.state.isLoading) {
            return (
                <CheckStatUser user={this.state.userData} />
            );
        } else {
            return (
                <Loading />
            );
        }
    }
}

