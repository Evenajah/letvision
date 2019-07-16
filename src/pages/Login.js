import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

//import component
import Logo from '../component/Logo';
import Form from '../component/Form/Form';
import Footer from '../component/Footer';

//stylesheet
import styles from '../styles';


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
      <View style={styles.containerSplash}>
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
              สมัครสมาชิกที่นี่...
                </Text>

          </TouchableOpacity>


        </View>

        <Footer />

      </View>
    );
  }
}

