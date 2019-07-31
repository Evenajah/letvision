import React from 'react';
import { Text, View, TextInput, Alert, ActivityIndicator } from 'react-native';

//stylesheet
import styles from '../../styles';

// fire
import * as firebase from 'firebase';

// component
import { Icon, Button } from 'react-native-elements'


// redux
import { connect } from 'react-redux';

//service
import axios from 'axios';

class OverlayChangeEmail extends React.Component {

      constructor () {
            super();
            this.state = {
                  overlayChangePass: false,
                  newMail: ''
            }


      }

      changeMail = () => {

            //loading request
            this.props.setLoading(true);

            const user = firebase.auth().currentUser;
            user.updateEmail(this.state.newMail)
                  .then(() => {


                        const service = 'https://us-central1-letview-db16d.cloudfunctions.net/user';

                        const patchEmail = {
                              id: this.props.user.uid,
                              type: 'changeEmail',
                              newMail: this.state.newMail
                        }

                        axios.put(service, patchEmail)
                              .then((response) => {

                                    if (response.data === "success") {

                                          // patch Redux store
                                          this.props.updateMail(this.state.newMail);

                                          // close loading
                                          this.props.setLoading(false);

                                          // close overlay
                                          this.props.setOverlayChangeEmail(false);

                                          // alert
                                          Alert.alert('Success', 'Successfully Change Email.')
                                    }
                              })
                              .catch((err) => {

                                    this.props.setLoading(false);
                                    Alert.alert('Warning', err.message)
                              })
                  })
                  .catch((error) => {
                        this.props.setLoading(false);
                        Alert.alert('Warning', error.message)
                  });

      }




      render() {
            return (

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



            );
      }
}

const mapStatetoProps = (state) => {
      return {
            user: state.user,
            loading: state.loading,
            overlayChangeEmail: state.overlayChangeEmail
      }
}


const mapDispatchToProps = (dispatch) => {
      return {
            updateMail: (newMail) => {
                  dispatch({
                        type: "setMail",
                        mail: newMail
                  })

            },

            setOverlayChangeEmail: (status) => {
                  dispatch({
                        type: "setOverlayChangeEmail",
                        status: status
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

export default connect(mapStatetoProps, mapDispatchToProps)(OverlayChangeEmail);

