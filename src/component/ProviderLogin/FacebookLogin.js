import React from 'react';
import { View, Alert  } from 'react-native';
import * as firebase from 'firebase';
import { SocialIcon } from 'react-native-elements';

//service
import axios from 'axios';

//timeStamp
import moment from 'moment';

export default class FacebookLogin extends React.Component {

    constructor (props) {
        super(props);

    }


    //Login Facebook
    async loginWithFacebook() {

        try {
            const {
                type,
                token,
            } = await Expo.Facebook.logInWithReadPermissionsAsync('2561765517383997', {
                permissions: ['public_profile', 'email'],
            });



            if (type === 'success') {
                // Get the user's name using Facebook's Graph API

                const credential = firebase.auth.FacebookAuthProvider.credential(token)

                //url ข้อมูลของ user facebook
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,first_name,last_name,email,picture.height(1000).width(1000)`);
                //console.log(response);

                const userInfo = await response.json();

                if (userInfo) {
                    firebase
                        .auth()
                        .signInWithCredential(credential)
                        .then(function (result) {

                            console.log('user signed in ');

                            //timestamp
                            const today = Date.now();
                            const date = moment(today).format("MMMM Do YYYY, h:mm:ss a");

                            if (result.additionalUserInfo.isNewUser) {

                                const formAddData = {

                                    id: result.user.uid,
                                    email: userInfo.email,
                                    account_type: "facebook",
                                    created_at: date,
                                    last_logged_in: date,
                                    first_name: userInfo.first_name,
                                    last_name: userInfo.last_name,
                                    profile_picture: userInfo.picture.data.url

                                }

                                const service = 'https://us-central1-letview-db16d.cloudfunctions.net/user';

                                // ยิง API
                                axios.post(service, formAddData)
                                    .then((response) => {

                                        Alert.alert("Success!", "Succesfully Signup");

                                    })
                                    .catch((err) => {

                                        Alert.alert(err.message);

                                    })

                            } else {
                                firebase
                                    .database()
                                    .ref('/users/' + result.user.uid)
                                    .update({
                                        last_logged_in: date
                                    });
                            }
                        }
                        )
                        .catch((error) => {
                            console.log(error)
                        })
                }
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }

    }





    render() {



        return (

            <View>
                <SocialIcon
                    type='facebook'
                    onPress={() => this.loginWithFacebook()}
                    iconSize={33}
                    raised={false}
                />
            </View>

        )
    }

}

