import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Avatar } from 'react-native-elements';

//stylesheet
import styles from '../styles';

//firebase
import * as firebase from 'firebase';

export default class DrawerContent extends React.Component {

    constructor() {
        super();
        //Setting up the Main Top Large Image of the Custom Sidebar

        //Array of the sidebar navigation option with icon and screen to navigate
        //This screens can be any screen defined in Drawer Navigator in App.js
        //You can find the Icons from here https://material.io/tools/icons/
        this.itemsNavigator = [
            {
                navOptionThumb: 'home',
                navOptionName: 'Home',
                screenToNavigate: 'Home',
            },
            {
                navOptionThumb: 'cogs',
                navOptionName: 'Setting',
                screenToNavigate: 'Setting',
            },
            {
                navOptionThumb: 'heart',
                navOptionName: 'Stories',
                screenToNavigate: 'Setting',
            },
               

        ];
    }

    
    onSignoutPress = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View style={styles.sideMenuContainer}>

                {/*Avatar section*/}
                <ImageBackground source={require('../images/bgAvatar.jpg')} style={styles.avatarContainer} >
                    {/*Image*/}
                    <Avatar
                        containerStyle={styles.avatar}
                        size="xlarge"
                        title="LW"
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                    <Text>


                    </Text>
                </ImageBackground>



                <View
                    style={styles.wrapDrawer}

                />
                {/*Setting up Navigation Options from option array using loop*/}
                <View style={{ width: '100%' }}>

                    {this.itemsNavigator.map((item, key) => (
                        <TouchableOpacity key={key} onPress={() => {
                            global.currentScreenIndex = key;
                            this.props.navigation.navigate(item.screenToNavigate)
                        }} style = {styles.listDrawer}>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    backgroundColor: global.currentScreenIndex === key ? '#FF6347' : '#FA8072',
                                }}>

                                <View style={{ marginRight: 10, marginLeft: 20 }}>
                                    <Icon
                                        name={item.navOptionThumb} 
                                        size={22} 
                                        color="#ffffff"
                                        type="font-awesome"
                                    />
                                </View>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        color: 'white'
                                    }}
                                >
                                    {item.navOptionName}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}


                    {/*signoutBTn*/}

                    <TouchableOpacity  onPress={this.onSignoutPress}>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    paddingTop: 10,
                                    paddingBottom: 10,
                                    backgroundColor: '#FF7F50',
                                }}>

                                <View style={{ marginRight: 10, marginLeft: 20 }}>
                                    <Icon
                                        name='sign-out'
                                        size={22} 
                                        color="#ffffff"
                                        type="font-awesome"
                                    />
                                </View>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        color: 'white'
                                    }}
                                >
                                    Sign out
                                </Text>
                            </View>
                        </TouchableOpacity>
                        
                </View>
                
            </View>
        );
    }
}
