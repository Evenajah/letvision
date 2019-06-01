import React from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import { SocialIcon } from 'react-native-elements';

export default class FacebookLogin extends React.Component {

    constructor(props) {
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
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,first_name,last_name,email,picture`);
                //console.log(response);

                const userInfo = await response.json();

                if (userInfo) {
                    firebase
                        .auth()
                        .signInWithCredential(credential)
                        .then(function (result) {
                            console.log('user signed in ');
                            if (result.additionalUserInfo.isNewUser) {
                                firebase
                                    .database()
                                    .ref('/users/' + result.user.uid)
                                    .set({
                                        email: userInfo.email,
                                        profile_picture: userInfo.picture.data.url,
                                        first_name: userInfo.first_name,
                                        last_logged_in: Date.now(),
                                        last_name: userInfo.last_name,
                                        account_type: "facebook",
                                        created_at: Date.now()
                                    })

                            } else {
                                firebase
                                    .database()
                                    .ref('/users/' + result.user.uid)
                                    .update({
                                        last_logged_in: Date.now()
                                    });
                            }
                        }
                        )
                        .catch((error) => {
                            console.log(error)
                        })
                }
            } else {
                // type === 'cancel'
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

