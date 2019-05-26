import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Font } from 'expo';
import { Icon } from 'react-native-elements';
import firebase from 'firebase';

//import component
import Logo from '../component/Logo';
import Form from '../component/Form';
import Footer from '../component/Footer';


export default class Login extends React.Component {


  //โหลดฟ้อน
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Kanit-Light': require('../../assets/fonts/Kanit-Light.ttf')
    });

    this.setState({ fontLoaded: true });
  }


  //Action => Route.js
  signupPage() {
    Actions.signup()
  }


  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="เข้าสู่ระบบ" />


        {/*link ปุ่มสมัคร*/}

        <View style={styles.signupContext}>
          {
            //โหลดฟ้อน
            this.state.fontLoaded ? (
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
            ) : null
          }

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
    textDecorationLine : 'underline',
    fontFamily: 'Kanit-Light',
    color: '#DCDCDC',
    fontSize: 14
  },

});