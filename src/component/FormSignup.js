import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { Icon } from 'react-native-elements';



export default class FormSignin extends React.Component {

    constructor(props){
        super(props);

        //setState
        this.state={
            fontLoaded: false,
            username: '',
            password:'',
            email:''
        }

        this.loginCheck = this.signupCheck.bind(this);
    }



    async componentDidMount() {
        await Font.loadAsync({
            'Kanit-Light': require('../../assets/fonts/Kanit-Light.ttf')
        });

        this.setState({ fontLoaded: true });
    }


    signupCheck(){

    }

    render() {
        return (
            <View style={styles.container}>


                {/*InputForm*/}
                {
                    //โหลดฟ้อน
                    this.state.fontLoaded ? (

                        <View>

                            <View style={styles.viewInput}>
                                <Icon
                                    name='user'
                                    type='font-awesome'
                                    color='#ffffff'
                                    size={25}
                                    paddingHorizontal={5}

                                />
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='#ffffff'
                                    placeholder='Username'
                                    placeholderTextColor='#ffffff'
                                    
                                    onChangeText={(text) => this.setState({username: text})}
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
                                />
                            </View>

                           
                            <View style={styles.viewInput}>
                                <Icon
                                    name='envelope'
                                    type='font-awesome'
                                    color='#ffffff'
                                    size={20}
                                    paddingHorizontal={5}

                                />
                                <TextInput style={styles.inputBox}
                                    placeholder='Email'
                                    underlineColorAndroid='#ffffff'
                                    placeholderTextColor='#ffffff'
                                    textContentType='emailAddress'
                                />
                            </View>


                            <Text>
                                {"\n"}
                            </Text>

                            <TouchableOpacity style={styles.button}>
                                {/*ICON*/}
                                <Icon
                                    name='user-plus'
                                    type='font-awesome'
                                    color='#ffffff'
                                    size={20}
                                    paddingHorizontal={7}
                                />

                                <Text style={styles.buttonText}>
                                    {this.props.type}
                                </Text>


                            </TouchableOpacity>
                        </View>

                    ) : null
                }

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

    button: {
        flexDirection: 'row',
        width: 310,
        backgroundColor: '#F08080',
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