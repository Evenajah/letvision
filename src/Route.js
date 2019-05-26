import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Stack, Scene } from 'react-native-router-flux';

//component
import Login from './pages/Login';
import Signup from './pages/Signup';



export default class Route extends React.Component {

    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" />
                    <Scene key="signup" component={Signup} title="Register" />
                </Stack>
            </Router>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FA8072',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
