import React from 'react';
import { Text, View, TextInput, Alert } from 'react-native';

//stylesheet
import styles from '../styles';

// fire
import * as firebase from 'firebase';

// component
import { Icon, Overlay, Button } from 'react-native-elements'


// redux
import { connect } from 'react-redux';


class SettingUser extends React.Component {

      constructor () {
            super();
            this.state = {
                  overlayChangePass: false,
                  overlayChangeMail: false,
                  newMail: ''
            }
      }

      changeMail = () => {
            const user = firebase.auth().currentUser;

            user.updateEmail(this.state.newMail)
                  .then(() => {
                        firebase
                              .database()
                              .ref(`/users/${this.props.user.uid}/personaldata`)
                              .update({
                                    email: this.state.newMail
                              })
                              .then(() => {
                                    this.props.updateMail(this.state.newMail);
                                    this.setState({ overlayChangeMail: false })
                                    Alert.alert('Successfully Change Email.')
                              })
                              .catch((error) => {
                                    Alert.alert('error', error.message);
                              });
                  })
                  .catch((error) => {
                        Alert.alert('Warning', error.message)
                  });
      }



      render() {
            return (

                  <View style={styles.wrapSettingItem}>

                        <View style={styles.iconSetting}>
                              <Icon
                                    size={35}
                                    reverse={true}
                                    raised
                                    name='envelope'
                                    type='font-awesome'
                                    color='#CD5C5C'
                                    onPress={() => this.setState({ overlayChangeMail: true })} />
                              <Text style={styles.textIconSetting}>เปลี่ยนอีเมล</Text>
                        </View>

                        <View style={styles.iconSetting}>
                              <Icon
                                    size={35}
                                    reverse={true}
                                    raised
                                    name='key'
                                    type='font-awesome'
                                    color='#CD5C5C'
                                    onPress={() => this.setState({ overlayChangePass: true })} />
                              <Text style={styles.textIconSetting}>เปลี่ยนรหัสผ่าน</Text>
                        </View>


                        <View style={styles.iconSetting}>
                              <Icon
                                    size={35}
                                    raised
                                    reverse={true}
                                    name='comments'
                                    type='font-awesome'
                                    color='#CD5C5C'
                                    onPress={() => console.log('hello')} />
                              <Text style={styles.textIconSetting}>เรื่องราวของฉัน</Text>
                        </View>




                        {/*overlayChangeMail*/}

                        <Overlay
                              isVisible={this.state.overlayChangeMail}
                              overlayStyle={styles.shadowOverlay}
                              onBackdropPress={() => this.setState({ overlayChangeMail: false })}
                              overlayBackgroundColor='#CD5C5C'
                              width="auto"
                              height="auto"
                        >
                              <View>
                                    <Text style={styles.headerSettingText}>
                                          เปลี่ยนอีเมล
                                    </Text>
                                    <View style={styles.formSetting}>


                                          <Text style={{ fontFamily: 'Kanit-Light', color: 'white', fontSize: 17 }}>
                                                อีเมลเดิม : {this.props.user.email}
                                          </Text>

                                    </View>

                                    <View style={styles.flexIcon}>

                                          <Text style={{ fontFamily: 'Kanit-Light', color: 'white', fontSize: 17 }}>
                                                อีเมลใหม่ :
                                          </Text>

                                          <TextInput
                                                style={styles.inputBoxSetting}
                                                underlineColorAndroid='#ffffff'
                                                placeholderTextColor='#ffffff'
                                                onChangeText={newMail => this.setState({ newMail })}
                                          />
                                    </View>

                                    <Button
                                          icon={
                                                <Icon
                                                      name='check'
                                                      type='font-awesome'
                                                      color='white'
                                                      size={15}

                                                />
                                          }
                                          buttonStyle={styles.btnChangeData}
                                          title='ตกลง'
                                          titleStyle={{
                                                fontFamily: 'Kanit-Light',
                                                marginLeft: 10
                                          }}
                                          onPress={() => this.changeMail()}
                                    />
                              </View>
                        </Overlay>


                  </View>



            );
      }
}

const mapStatetoProps = (state) => {
      return {
            user: state.user,
      }
}


const mapDispatchToProps = (dispatch) => {
      return {
            updateMail: (newMail) => {
                  dispatch({
                        type: "setMail",
                        mail: newMail
                  })

            }
      }
}

export default connect(mapStatetoProps, mapDispatchToProps)(SettingUser);

