import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, YellowBox, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import * as firebase from 'firebase';


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
            .then(() => { }, (error) => { Alert.alert(error.message); });
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
                    <TouchableOpacity style={styles.buttonFb}>
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

                    <TouchableOpacity style={styles.buttonGg}>
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

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputBox: {
        fontFamily: 'Kanit-Light',
        width: 280,
        height: 40,
        color: '#ffffff',
        paddingHorizontal: 5,
        marginVertical: 10,
        fontSize: 15
    },

    buttonText: {
        fontFamily: 'Kanit-Light',
        fontSize: 15,
        color: '#ffffff',
        marginVertical: 10,

    },

    buttonFb: {
        flexDirection: 'row',
        width: 310,
        backgroundColor: '#FA8072',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonGg: {
        flexDirection: 'row',
        width: 310,
        backgroundColor: '#F08080',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        flexDirection: 'row',
        width: 310,
        backgroundColor: '#FFA07A',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    viewInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});