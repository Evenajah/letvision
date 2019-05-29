import React from 'react';
import { Text, View, TextInput, TouchableOpacity, YellowBox, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import * as firebase from 'firebase';

//stylesheet
import styles from '../styles';

export default class Form extends React.Component {

    constructor(props) {
        super(props);

        YellowBox.ignoreWarnings(['Setting a timer']);

        //setState
        this.state = {
            username: null,
            password: '',
            email: '',

        }

        //bind func

    }

    onLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                Alert.alert("Login", "Welcomback " + this.state.email)
            },
                (error) => {
                    Alert.alert("Warning!", error.message);
                });
    }


    //Login Facebook
    async loginWithFacebook() {

        const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('2561765517383997', { permissions: ['public_profile'] })

        if (type == 'success') {
            const credential = firebase.auth.FacebookAuthProvider.credential(token)

            firebase.auth().signInWithCredential(credential).catch((error) => {
                console.log(error)
            })
        }
    }


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


    onSignIn = googleUser => {
        console.log('Google Auth Response', googleUser);
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
                            console.log('user signed in ');
                            if (result.additionalUserInfo.isNewUser) {
                                firebase.shared.writeUserInDatabase(result);
                                
                            } else {
                                firebase
                                    .database()
                                    .ref('/users/' + result.user.uid)
                                    .update({
                                        last_logged_in: Date.now()
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
                            // ...
                        });
                } else {
                    console.log('User already signed-in Firebase.');
                }
            }.bind(this)
        );
    };

    
    loginWithGoogle = async () => {
        try {
            const result = await Expo.Google.logInAsync({
                // androidClientId: YOUR_CLIENT_ID_HERE,
                behavior: 'web',
                androidClientId: '575302837103-ea8rgcbbktqvm0c4omp4t4jd833k250k.apps.googleusercontent.com',
                //iosClientId: '', //enter ios client id
                scopes: ['profile', 'email']
            });

            if (result.type === 'success') {
                this.onSignIn(result);
                return result.accessToken;
            } else {
                return { cancelled: true };
            }
        } catch (e) {
            return { error: true };
        }
    }

    render() {
        return (
            <View style={styles.container}>

                {/*InputForm*/}

                <View>

                    <View style={styles.viewInput}>
                        <Icon
                            name='envelope'
                            type='font-awesome'
                            color='#ffffff'
                            size={20}
                            paddingHorizontal={5}

                        />
                        <TextInput style={styles.inputBox}
                            underlineColorAndroid='#ffffff'
                            placeholder='Email'
                            placeholderTextColor='#ffffff'
                            onChangeText={email => this.setState({ email })}
                        />
                    </View>



                    <View style={styles.viewInput}>
                        <Icon
                            name='lock'
                            type='font-awesome'
                            color='#ffffff'
                            size={25}
                            paddingHorizontal={5}

                        />
                        <TextInput style={styles.inputBox}
                            placeholder='Password'
                            underlineColorAndroid='#ffffff'
                            placeholderTextColor='#ffffff'
                            secureTextEntry={true}
                            onChangeText={password => this.setState({ password })}
                        />
                    </View>

                    <Text>
                        {"\n"}
                    </Text>

                    <TouchableOpacity onPress={this.onLoginPress} style={styles.button}>
                        {/*ICON*/}
                        <Icon
                            name='sign-in'
                            type='font-awesome'
                            color='#ffffff'
                            size={20}
                            paddingHorizontal={7}
                        />

                        <Text style={styles.buttonText}>
                            {this.props.type}
                        </Text>

                    </TouchableOpacity>


                    {/*buttonFacebook*/}
                    <TouchableOpacity style={styles.buttonFb} onPress={() => this.loginWithFacebook()}>
                        {/*ICON*/}
                        <Icon
                            name='facebook-square'
                            type='font-awesome'
                            color='#ffffff'
                            size={20}
                            paddingHorizontal={12}
                        />

                        <Text style={styles.buttonText}>
                            เข้าสู่ระบบด้วยบัญชี Facebook
                        </Text>


                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonGg} onPress={() => this.loginWithGoogle()}>
                        {/*ICON*/}
                        <Icon
                            name='google-plus-square'
                            type='font-awesome'
                            color='#ffffff'
                            size={20}
                            paddingHorizontal={12}
                        />

                        <Text style={styles.buttonText}>
                            เข้าสู่ระบบด้วยบัญชี Google
                        </Text>


                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}

