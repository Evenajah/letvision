import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { Icon } from 'react-native-elements';
import { StackActions, NavigationActions } from 'react-navigation';

//import component
import Logo from '../component/Logo';
import Form from '../component/Form';
import Footer from '../component/Footer';


export default class Login extends React.Component {


  //Navigate
  signupPage = () => {

    // //reset navigationStack
    // var navActions = StackActions.reset({

    //   index: 0,

    //   actions: [NavigationActions.navigate({
    //     routeName: "Signup"
    //   })]
    // });

    this.props.navigation.navigate('Signup');

  }


  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="เข้าสู่ระบบ" />

        {/*link ปุ่มสมัคร*/}

        <View style={styles.signupContext}>

          <TouchableOpacity style={styles.flexIcon} onPress={this.signupPage}>

            <Icon
              name='user-plus'
              type='font-awesome'
              color='#ffffff'
              size={15}
              paddingHorizontal={7}
            />

            <Text style={styles.signupText}>
              สมัครสมาชิกที่นี่
                </Text>

          </TouchableOpacity>


        </View>

        <Footer />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CD5C5C',
  },
  signupContext: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16
  },

  flexIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  signupText: {
    textDecorationLine: 'underline',
    fontFamily: 'Kanit-Light',
    color: '#DCDCDC',
    fontSize: 14
  },

});