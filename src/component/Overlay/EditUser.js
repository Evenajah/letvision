import React from 'react';
import { View, TextInput, Alert } from 'react-native';

// component
import { Icon, Button, Avatar } from 'react-native-elements'

//stylesheet
import styles from '../../styles';

// redux
import { connect } from 'react-redux';

// service
import axios from 'axios';


import LoadingRequest from './LoadingRequest';

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

        this.props.setLoading(true);

        if (this.state.firstname && this.state.lastname !== '') {

            const service = 'https://us-central1-letview-db16d.cloudfunctions.net/user';

            const patchName = {
                id: this.props.user.uid,
                type: 'changeName',
                first_name: this.state.firstname,
                last_name: this.state.lastname
            }

            axios.put(service, patchName)
                .then((response) => {
                
                    if (response.data === "success") {

                        // set object to redux store
                        this.setState({
                            updateObject: {
                                first_name: this.state.firstname,
                                last_name: this.state.lastname
                            }
                        });

                        // patch Redux user
                        this.props.updateUser(this.state.updateObject);

                        // ปิด loading
                        this.props.setLoading(false);

                        //ปิด Overlay
                        this.props.setVisible(false);

                        // Alert
                        Alert.alert('Success', 'The personal data is change!');
                    }

                })
                .catch((err) => {

                    this.props.setLoading(false);
                    Alert.alert('error', err.message);

                })
          
        } else {
            this.props.setLoading(false);
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

                <TextInput style={styles.inputBoxUpdateUser}
                    value={this.state.firstname}
                    placeholder='กรอกชื่อของท่าน'
                    underlineColorAndroid='#ffffff'
                    placeholderTextColor='#ffffff'
                    onChangeText={firstname => this.setState({ firstname })}
                />

                <TextInput style={styles.inputBoxUpdateUser}
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
                        backgroundColor: '#708090',
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

                <LoadingRequest/>

            </View>

        );
    }
}

const mapStatetoProps = (state) => {
    return {
        user: state.user,
        isVisible: state.isVisible,
        loading: state.loading
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
        },

        setLoading: (status) => {
            dispatch({
                type: "startLoading",
                status: status
            })

        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(EditUser);

