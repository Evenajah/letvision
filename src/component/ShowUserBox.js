import React from 'react';
import { Text, View } from 'react-native';

// component
import { Avatar, Icon, Overlay } from 'react-native-elements'


//stylesheet
import styles from '../styles';
import EditUser from './EditUser';







export default class ShowUserBox extends React.Component {

    constructor (props) {
        super(props);
        console.log('props', this.props);

        this.state = {
            isVisible: false
        }
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
                        onPress={() => this.setState({ isVisible: true })}


                    />

                    <View style={styles.divideSection}>

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

                {/*Overlay*/}
                <Overlay isVisible={this.state.isVisible}
                    onBackdropPress={() => this.setState({ isVisible: false })}
                    overlayBackgroundColor='#CD5C5C'
                    width="auto"
                    height="auto"
                >

                    <EditUser user = {this.props.user} navigation={this.props.navigation}  />

                </Overlay>

            </View>

        );
    }
}

