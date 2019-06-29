import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import { AppLoading } from 'expo';

//stylesheet
import styles from '../styles';

//userData
import userData from '../component/UserData';


//firebase
import * as firebase from 'firebase';

export default class DrawerContent extends React.Component {

    constructor() {
        super();


        this.state = {
            userDetail: ''
        }

        //formatuser
        /*
            displayname:
            email:
            phoneNumber:
            protoURL:
            providerId:
            uid:
        */

        //Setting up the Main Top Large Image of the Cussstom Sidebar

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

    componentWillMount() {
        const userRecieve = userData.currentUser.providerData[0];
        this.setState({
            userDetail: userRecieve
        })

        console.log(this.state.userDetail);
    }

    onSignoutPress = () => {
        firebase.auth().signOut();
    }

    render() {
        
        return (
            <View style={styles.sideMenuContainer}>
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
                {/*Avatar section*/}
                <ImageBackground source={require('../images/bgAvatar.jpg')} style={styles.avatarContainer} >

                    <Text>
                        {"\n"}
                    </Text>

                    {/*Image*/}
                    <Avatar
                        containerStyle={styles.avatar}
                        size="xlarge"
                        // onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        rounded
                        source={{
                            uri:
                                this.state.userDetail.photoURL + '?width=500'
                        }}
                    />

                    <Text style={styles.textUser}>
                        {this.state.userDetail.displayName}
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
                        }} style={styles.listDrawer}>

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
                                        color={global.currentScreenIndex === key ? '#BEBEBE' : '#FFFFFF'}
                                        type="font-awesome"
                                        containerStyle={styles.listItemDrawer}
                                    />
                                </View>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        color: global.currentScreenIndex === key ? '#BEBEBE' : '#ffffff',
                                    }}
                                >
                                    {item.navOptionName}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}


                    {/*signoutBTn*/}

                    <TouchableOpacity onPress={this.onSignoutPress}>

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
