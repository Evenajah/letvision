import React from 'react';
import { Text, View,  Button  } from 'react-native';
import { Header } from 'react-native-elements';


//stylesheet
import styles from '../styles';


export default class HomeScreen extends React.Component {


    render() {
        return (
            <View style={styles.containerSplash}>
                <Button
                    title="Outline button"
                    
                    onPress={() => this.props.navigation.openDrawer()}
                />
            </View>
        );
    }
}

