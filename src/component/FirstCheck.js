import React from 'react';
import userData from './UserData';

// component
import Loading from '../pages/Loading';
import SelectStatUserScreen from '../pages/SelectStatUserScreen';

// Nav
import TabNavigation from '../navigation/TabNavigation';

// redux
import { connect } from 'react-redux';

// service
import axios from 'axios';


class FirstCheck extends React.Component {

    constructor () {
        super();

        this.state = {
            userId: { uid: userData.currentUser.uid },
            isLoading: false,
            userData: {}
        }


    }

    componentDidMount() {
        const service = 'https://us-central1-letview-db16d.cloudfunctions.net/user';
        
        axios.get(`${service}/${this.state.userId.uid}`)
            .then((response) => {
                
                this.setState({
                    userData: { ...this.state.userId, ...response.data },
                    isLoading: true
                })

                // send to store
                this.props.setUser(this.state.userData);
            })
            .catch((err) => {
                console.log(err);
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
    return {
        setUser: (user) => {
            dispatch({
                type: "setUser",
                item: user
            })

        }
    }
}


export default connect(null, mapDispatchToProps)(FirstCheck);