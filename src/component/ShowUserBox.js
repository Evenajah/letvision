import React from 'react';
import { Text, View } from 'react-native';

// component
import { Avatar, Icon, Overlay } from 'react-native-elements'


//stylesheet
import styles from '../styles';
import EditUser from './Overlay/EditUser';

// redux
import { connect } from 'react-redux';



class ShowUserBox extends React.Component {

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
                        onPress={() => this.props.setVisible(true)}


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
                <Overlay isVisible={this.props.isVisible}
                    onBackdropPress={() => this.props.setVisible(false)}
                    overlayBackgroundColor='#2F4F4F'
                    width="auto"
                    height="auto"
                >

                    <EditUser />

                </Overlay>

            </View>

        );
    }
}

const mapStatetoProps = (state) => {
    return {
        user: state.user,
        isVisible: state.isVisible
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setVisible: (status) => {
            dispatch({
                type: "setVisible",
                status : status
            })

        },
       
    }
}


export default connect(mapStatetoProps, mapDispatchToProps)(ShowUserBox);
