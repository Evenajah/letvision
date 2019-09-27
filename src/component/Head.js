import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';


export default class Head extends React.Component {

    constructor (props) {
        super(props);
    }


    render() {
        return (

            <View>

                <Header

                    containerStyle={{ borderBottomColor: '#2F4F4F', height: 65 }}
                    centerComponent={{ text: this.props.title, style: { color: '#fff', fontFamily: 'Estilo', fontSize: 25 } }}
                    backgroundColor='#2F4F4F'
                    
                />

            </View>

        )
    }



}

