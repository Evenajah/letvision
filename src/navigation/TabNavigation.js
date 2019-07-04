import * as React from 'react';

// Navoption
import { createBottomTabNavigator, createAppContainer, withNavigation } from 'react-navigation';


//Screen
import HomeScreen from "../pages/HomeScreen";
import SettingScreen from "../pages/SettingScreen";


// Icon
import { Icon } from 'react-native-elements'
import EditUser from '../component/EditUser';



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
    Story: {
        screen: SettingScreen,
        navigationOptions: {
            tabBarLabel: 'Story',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name='comment'
                    type='font-awesome'
                    color={tintColor}
                />

            )
        }
    },
    Storys: {
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
            activeTintColor: '#CD5C5C',
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