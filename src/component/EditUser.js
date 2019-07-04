import React from 'react';
import { View, TextInput } from 'react-native';

// component
import { Icon, Button, Avatar } from 'react-native-elements'

// fire
import * as firebase from 'firebase';

// Nav
import { withNavigation } from 'react-navigation';

//stylesheet
import styles from '../styles';



class EditUser extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            firstname: this.props.user.first_name,
            lastname: this.props.user.last_name,
            isUpdateSuccess:false
        }
        console.log("Nav",this.props.navigation);
        this.updateUser = this.updateUser.bind(this);

    }

    updateUser = () => {
        if (this.state.firstname && this.state.lastname !== '') {
            firebase
                .database()
                .ref(`/users/${this.props.user.uid}`)
                .update({
                    first_name:this.state.firstname,
                    last_name:this.state.lastname
                })
                .then(() => {
                    alert('Successfully Update');
                    this.props.navigation.navigate('Home');
                })
                .catch((err) => {
                    alert(err);
                });

                

        } else {
            alert('Please input to all field', 'Warning')
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

export default withNavigation(EditUser);

