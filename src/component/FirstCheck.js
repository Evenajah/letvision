import React from 'react';
import userData from './UserData';

// fire
import * as firebase from 'firebase';
import Loading from '../pages/Loading';
import SelectStatUserScreen from '../pages/SelectStatUserScreen';

// Nav
import TabNavigation from '../navigation/TabNavigation';

export default class FirstCheck extends React.Component {

    constructor () {
        super();

        this.state = {
            userId: userData.currentUser.uid,
            isLoading: false,
            userData:{}
        }
    }

    componentDidMount() {
        firebase.database().ref(`/users/${this.state.userId}`).once('value', (data) => {
            this.setState({
                userData: data.toJSON(),
            })
            console.log('userData',this.state.userData)
        }).then(() => {
            this.setState({ isLoading: true })
        });
    }

    render() {
        // checkStat
        if (this.state.isLoading) {
            // check Stat
            if (!this.state.userData.stat) {
                return (
                    <SelectStatUserScreen {...this.props} />
                );
            } else {
                return (
                    <TabNavigation />
                );
            }
        } else {
            return (
                <Loading />
            );
        }

    }
}
