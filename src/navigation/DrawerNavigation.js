import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as firebase from 'firebase';
import { Header } from 'react-native-elements';

//Navigate
import { createAppContainer,createDrawerNavigator } from 'react-navigation';

//screen
import HomeScreen from '../pages/HomeScreen';
import SettingScreen from '../pages/SettingScreen';


const Navigation = createDrawerNavigator({
    Home:{
        screen : HomeScreen

    },
    Setting: {
        screen : SettingScreen
    }
})

const App = createAppContainer(Navigation);

export default App;