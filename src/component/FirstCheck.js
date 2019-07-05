import React from 'react';
import userData from './UserData';

// fire
import * as firebase from 'firebase';

// component
import Loading from '../pages/Loading';
import SelectStatUserScreen from '../pages/SelectStatUserScreen';

// Nav
import TabNavigation from '../navigation/TabNavigation';

// redux
import { connect } from 'react-redux';



class FirstCheck extends React.Component {

    constructor () {
        super();

        this.state = {
            userId: { uid: userData.currentUser.uid },
            isLoading: false,
            userData:{}
        }

        
    }

    componentDidMount() {
        firebase.database().ref(`/users/${this.state.userId.uid}`).once('value', (data) => {
            this.setState({
                userData:{ ...this.state.userId, ...data.toJSON() }
            })
            // console.log('userData',this.state.userData)
        }).then(() => {
            this.props.setUser(this.state.userData);
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

const mapDispatchToProps = (dispatch) => {
    return{
        setUser:(user) => {
           dispatch({
               type:"setUser",
               item:user
           })

        }
    }
}


export default connect(null,mapDispatchToProps)(FirstCheck);