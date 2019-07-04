import React from 'react';

// component
import Loading from './Loading';

// fire
import * as firebase from 'firebase';

// userAuth
import userData from '../component/UserData';
import CheckStatUser from '../component/CheckStatUser';






export default class HomeScreen extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            userId: { uid: userData.currentUser.uid },
            userData: {},
            currentUser: '',
            isLoading: false,
        }

        
    }

    componentDidMount() {
        firebase.database().ref(`/users/${this.state.userId.uid}`).once('value', (data) => {
            this.setState({
                userData:{ ...this.state.userId, ...data.toJSON() }
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
                <CheckStatUser user={this.state.userData} navigation={this.props.navigation} />
            );
        } else {
            return (
                <Loading />
            );
        }
    }
}

