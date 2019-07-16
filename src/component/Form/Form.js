import React from 'react';
import { Text, View, TextInput, TouchableOpacity, YellowBox, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import * as firebase from 'firebase';

//stylesheet
import styles from '../../styles';

//component
import FacebookLogin from '../ProviderLogin/FacebookLogin';
import Googlelogin from '../ProviderLogin/GoogleLogin';

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

                Alert.alert("เข้าสู่ระบบ", "ยินดีต้อนรับ  " + this.state.email)

            },
                (error) => {
                    Alert.alert("Warning!", error.message);
                }
            );
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

                    <Text style={styles.regisSocialText}>
                        {"\n"}
                        ──────  Or login with....  ──────
                    </Text>

                    {/*buttonFacebook*/}
                    <View style={styles.loginSocial}>
                        {/*ICON*/}


                        <FacebookLogin />

                        <Googlelogin />


                    </View>

                </View>

            </View>
        );
    }
}

