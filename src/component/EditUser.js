import React from 'react';
import { View, TextInput, Alert } from 'react-native';

// component
import { Icon, Button, Avatar } from 'react-native-elements'

// fire
import * as firebase from 'firebase';

//stylesheet
import styles from '../styles';

// redux
import { connect } from 'react-redux';


class EditUser extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            firstname: this.props.user.first_name,
            lastname: this.props.user.last_name,
            updateObject: {},
        }
    }

    updateUser = () => {
        if (this.state.firstname && this.state.lastname !== '') {
            firebase
                .database()
                .ref(`/users/${this.props.user.uid}/personaldata`)
                .update({
                    first_name: this.state.firstname,
                    last_name: this.state.lastname
                })
                .then(() => {
                    this.setState({
                        updateObject: {
                            first_name: this.state.firstname,
                            last_name: this.state.lastname
                        }
                    });


                    this.props.updateUser(this.state.updateObject);
                    this.props.setVisible(false);
                    Alert.alert('Success', 'The personal data is change!');

                })
                .catch((error) => {
                    Alert.alert('error', error.message);
                });



        } else {
            Alert.alert('warning', 'please input to all field');
        }
    }

    render() {
        return (

            <View style={styles.wrapEdit}>

                <Avatar
                    source={{
                        uri:
                            this.props.user.profile_picture
                    }}
                    size="xlarge"
                    rounded
                    title="CR"
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />

                <TextInput style={styles.inputBox}
                    value={this.state.firstname}
                    placeholder='กรอกชื่อของท่าน'
                    underlineColorAndroid='#ffffff'
                    placeholderTextColor='#ffffff'
                    onChangeText={firstname => this.setState({ firstname })}
                />

                <TextInput style={styles.inputBox}
                    value={this.state.lastname}
                    placeholder='กรอกนามสกุลของท่าน'
                    underlineColorAndroid='#ffffff'
                    placeholderTextColor='#ffffff'
                    onChangeText={lastname => this.setState({ lastname })}
                />

                <Button
                    icon={
                        <Icon
                            name='edit'
                            type='font-awesome'
                            color='white'
                            size={15}

                        />
                    }
                    buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        backgroundColor: '#FA8072',
                        width: 280,
                        marginVertical: 20
                    }}
                    title='แก้ไขข้อมูล'
                    titleStyle={{
                        fontFamily: 'Kanit-Light',
                        marginLeft: 10
                    }}
                    onPress={() => this.updateUser()}
                />

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
                status: status
            })

        },

        updateUser: (user) => {
            dispatch({
                type: "updateUser",
                objectUser: user
            })
        }

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(EditUser);

