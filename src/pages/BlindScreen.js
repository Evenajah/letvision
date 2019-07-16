import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Font } from 'expo';
import { StackActions, NavigationActions } from 'react-navigation';


//import component
import Logo from '../component/Logo';
import FormSignup from '../component/Form/FormSignup';
import Footer from '../component/Footer';

//stylesheet
import styles from '../styles';

export default class BlindScreen extends React.Component {

 


    render() {
        return (
            <View style={styles.containerSplash}>
              <Text>Blind BlindScreen</Text>

            </View>
        );
    }
}

