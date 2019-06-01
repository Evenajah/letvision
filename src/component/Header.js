import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as firebase from 'firebase';
import { Header } from 'react-native-elements';

//Navigate
import { createAppContainer, createDrawerNavigator } from 'react-navigation';

//screen
import HomeScreen from '../pages/HomeScreen';
import SettingScreen from '../pages/SettingScreen';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


   
    onSignoutPress = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
          
            <HeaderNavigation />
            
        )
    }

}

const MyApp = createDrawerNavigator({
    Home:{
        screen : HomeScreen

    },
    Setting: {
        screen : SettingScreen
    }

})

const HeaderNavigation = createAppContainer(MyApp);

export default Header;