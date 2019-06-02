import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { withNavigation } from 'react-navigation';


class Menu extends React.Component {


    render() {
        return (

            <View>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>

                    <Icon
                        name='bars'
                        type='font-awesome'
                        color='#ffffff'
                    />

                </TouchableOpacity>
            </View>

        )
    }

}

export default withNavigation(Menu);