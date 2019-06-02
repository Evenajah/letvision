import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Header } from 'react-native-elements';

//component
import Menu from './Menu';

export default class Head extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (

            <View>

                <Header
                    leftComponent={<Menu/>}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } } }
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    backgroundColor='#CD5C5C'
                />

            </View>

        )
    }
  
  

}

