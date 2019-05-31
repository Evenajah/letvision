import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Font } from 'expo';
import { StackActions, NavigationActions } from 'react-navigation';


//import component
import Logo from '../component/Logo';
import FormSignup from '../component/FormSignup';
import Footer from '../component/Footer';

//stylesheet
import styles from '../styles';

export default class Signup extends React.Component {

 
    //Navigate
    loginPage = () => {

        //reset navigationStack
        // var navActions = StackActions.reset({

        //     index: 0,

        //     actions: [NavigationActions.navigate({
        //         routeName: "Login"

        //     })]

        // });

        // this.props.navigation.dispatch(navActions);
        this.props.navigation.navigate('Login');
    }


    render() {
        return (
            <View style={styles.containerSplash}>
                <Logo />
                <FormSignup type="สมัครสมาชิก" />
                {/*link ปุ่มสมัคร*/}

                <View style={styles.signupContext}>
                    <TouchableOpacity style={styles.flexIcon} onPress={this.loginPage}>
                        <Icon
                            name='sign-in'
                            type='font-awesome'
                            color='#ffffff'
                            size={15}
                            paddingHorizontal={7}
                        />
                        <Text style={styles.signupText}>
                            เข้าสู่ระบบ
                                </Text>

                    </TouchableOpacity>

                </View>

                <Footer />

            </View>
        );
    }
}

