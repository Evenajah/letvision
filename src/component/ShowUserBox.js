import React from 'react';
import { Text, View } from 'react-native';

// component
import { Avatar, Icon } from 'react-native-elements'


//stylesheet
import styles from '../styles';







export default class ShowUserBox extends React.Component {

    constructor (props) {
        super(props);

        this.state = {}

    }




    render() {



        return (
            <View>
                <View style={styles.wrapUserBox}>


                    <Avatar
                        rounded
                        size="large"
                        source={{
                            uri:
                                `${this.props.user.profile_picture}`,
                        }}
                        showEditButton
                        onPress={() => console.log('hello')}


                    />

                    <View style={styles.xxx}>

                        <View style={styles.contentText}>
                            <Text>{'  '}</Text>
                            <Icon
                                name='user'
                                type='font-awesome'
                                color='#CD5C5C'
                                size={15}

                            />
                            <Text style={styles.textUserBoxHead}>
                                {'  '}
                                {this.props.user.first_name} {this.props.user.last_name}
                                {'\n'}
                            </Text>
                        </View>


                        <View style={styles.contentText}>
                            <Text>{'  '}</Text>
                            <Icon
                                name='envelope'
                                type='font-awesome'
                                color='#CD5C5C'
                                size={10}

                            />
                            <Text style={styles.textUserBox}>
                                {'  '}
                                {this.props.user.email}
                                {'\n'}
                            </Text>
                        </View>

                        <View style={styles.contentText}>
                            <Text>{'  '}</Text>
                            <Icon
                                name='th'
                                type='font-awesome'
                                color='#CD5C5C'
                                size={13}

                            />
                            <Text style={styles.textUserBox}>
                                {'  '}
                                {this.props.user.stat}
                                {'\n'}
                            </Text>
                        </View>

                    </View>

                </View>
            </View>

        );
    }
}

