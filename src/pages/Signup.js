import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Icon } from 'react-native-elements';



//import component
import Logo from '../component/Logo';
import FormSignup from '../component/Form/FormSignup';
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

            <ImageBackground source={require('../images/blind2.jpg')} style={{ width: '100%', height: '100%' }}>
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
            </ImageBackground >
        );
    }
}

