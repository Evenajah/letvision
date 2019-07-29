import React from 'react';
import { View, Alert } from 'react-native';
import * as firebase from 'firebase';
import { SocialIcon } from 'react-native-elements';

//timeStamp
import moment from 'moment';

//stylesheet
import styles from '../../styles';

//service
import axios from 'axios';

export default class GoogleLogin extends React.Component {

    constructor (props) {
        super(props);
    }

    //login google from Btn
    loginWithGoogle = async () => {
        try {
            const result = await Expo.Google.logInAsync({
                behavior: 'web',
                androidClientId: '575302837103-ea8rgcbbktqvm0c4omp4t4jd833k250k.apps.googleusercontent.com',
                //iosClientId: '', //enter ios client id
                scopes: ['profile', 'email']
            });

            if (result.type === 'success') {
                this.onSignInGoogle(result);
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }


    //func เช็ค login google
    onSignInGoogle = googleUser => {
        // console.log('Google Auth Response', googleUser);
        // We need to register an Observer on Firebase Auth to make sure auth is initialized.
        var unsubscribe = firebase.auth().onAuthStateChanged(
            function (firebaseUser) {
                unsubscribe();
                // Check if we are already signed-in Firebase with the correct user.
                if (!this.isUserEqual(googleUser, firebaseUser)) {
                    // Build Firebase credential with the Google ID token.
                    var credential = firebase.auth.GoogleAuthProvider.credential(
                        googleUser.idToken,
                        googleUser.accessToken
                    );
                    // Sign in with credential from the Google user.
                    firebase
                        .auth()
                        .signInWithCredential(credential)
                        .then(function (result) {

                            //timestamp
                            const today = Date.now();
                            const date = moment(today).format("MMMM Do YYYY, h:mm:ss a");

                            console.log('user signed in ');

                            if (result.additionalUserInfo.isNewUser) {

                                const formAddData = {

                                    id: result.user.uid,
                                    email: result.additionalUserInfo.profile.email,
                                    account_type: "google",
                                    created_at: date,
                                    last_logged_in: date,
                                    first_name: result.additionalUserInfo.profile.given_name,
                                    last_name: result.additionalUserInfo.profile.family_name,
                                    profile_picture: result.additionalUserInfo.profile.picture

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
                                        profile_picture: result.additionalUserInfo.profile.picture,
                                        last_logged_in: date
                                    });
                            }
                        })
                        .catch(function (error) {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            // The email of the user's account used.
                            var email = error.email;
                            // The firebase.auth.AuthCredential type that was used.
                            var credential = error.credential;
                            console.log('errorGoogle', error);
                            // ...
                        });
                } else {
                    console.log('User already signed-in Firebase.');
                }
            }.bind(this)
        );
    };


    isUserEqual = (googleUser, firebaseUser) => {
        if (firebaseUser) {
            var providerData = firebaseUser.providerData;
            for (var i = 0; i < providerData.length; i++) {
                if (
                    providerData[i].providerId ===
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                    providerData[i].uid === googleUser.getBasicProfile().getId()
                ) {
                    // We don't need to reauth the Firebase connection.
                    return true;
                }
            }
        }
        return false;
    };


    render() {

        return (

            <View>

                <SocialIcon
                    type='google'
                    onPress={() => this.loginWithGoogle()}
                    iconSize={33}
                    raised={false}
                    style={styles.googleBtn}
                />

            </View>

        )
    }

}
