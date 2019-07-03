import React from 'react';
import { Text, View } from 'react-native';

// component
import { Icon, Button, Overlay } from 'react-native-elements'


//stylesheet
import styles from '../styles';







export default class HowToUse extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            isVisible: false
        }


    }




    render() {



        return (
            <View>
                <Button
                    buttonStyle={styles.buttonHt}

                    titleStyle={{ color: '#CD5C5C', fontFamily: 'Kanit-Light', marginLeft: 12 }}

                    icon={
                        <Icon
                            name='bookmark'
                            type='font-awesome'
                            color='#CD5C5C'
                            size={15}

                        />
                    }
                    iconLeft
                    title="เรียนรู้การใช้งาน"
                    onPress={() => this.setState({ isVisible: true })}

                />


                <Overlay isVisible={this.state.isVisible}
                    onBackdropPress={() => this.setState({ isVisible: false })}
                >
                    <Text>Hello from Overlay!</Text>
                </Overlay>


            </View>

        );
    }
}

