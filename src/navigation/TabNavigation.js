import * as React from 'react';

// Navoption
import { createBottomTabNavigator, createAppContainer, withNavigation } from 'react-navigation';


//Screen
import HomeScreen from "../pages/HomeScreen";
import SettingScreen from "../pages/SettingScreen";
import BookScreen from "../pages/BookScreen";

// Icon
import { Icon } from 'react-native-elements'




const Navigation = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='home'
                    type='font-awesome'
                    color={tintColor}
                />

            )
        }

    },
    BookScreen: {
        screen: BookScreen,
        navigationOptions: {
            tabBarLabel: 'Story',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='book'
                    type='font-awesome'
                    color={tintColor}
                />

            )
        }
    },
    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            tabBarLabel: 'Storys',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='user'
                    type='font-awesome'
                    color={tintColor}
                />

            )
        }
    },
    
},
    {
        initialRouteName: 'Home',
        
        tabBarOptions: {
            activeTintColor: '#2F4F4F',
            inactiveTintColor:'#BEBEBE',
            // labelStyle: {
            //     fontSize: 12,
            // },

            showLabel:false,
            style: {
                backgroundColor: '#ffffff',
                padding:20,
                
            },

        },


    },

)

const App = createAppContainer(Navigation);

export default App;