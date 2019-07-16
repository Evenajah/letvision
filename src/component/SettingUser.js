import React from 'react';
import { Text, View } from 'react-native';

//stylesheet
import styles from '../styles';

// component
import { Icon, Overlay, Button } from 'react-native-elements'


// redux
import { connect } from 'react-redux';
import OverlayChangeEmail from './Overlay/OverlayChangeEmail';
import OverlayHaveProvidor from './Overlay/OverlayHaveProvidor';


class SettingUser extends React.Component {

      constructor () {
            super();
            this.state = {
                  overlayChangePass: false,
                  newMail: ''
            }
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
                                    onPress={() => this.props.setOverlayChangeEmail(true)} />
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
                              isVisible={this.props.overlayChangeEmail}
                              overlayStyle={styles.shadowOverlay}
                              onBackdropPress={() => this.props.setOverlayChangeEmail(false)}
                              overlayBackgroundColor='#CD5C5C'
                              width="auto"
                              height="auto"
                        >

                              <View>
                                    {(this.props.user.account_type === 'email') ? <OverlayChangeEmail /> : <OverlayHaveProvidor/>}
                              </View>

                        </Overlay>

                  </View>

            );
      }
}

const mapStatetoProps = (state) => {
      return {
            user: state.user,
            overlayChangeEmail: state.overlayChangeEmail
      }
}


const mapDispatchToProps = (dispatch) => {
      return {
            setOverlayChangeEmail: (status) => {
                  dispatch({
                        type: "setOverlayChangeEmail",
                        status: status
                  })

            }
      }
}


export default connect(mapStatetoProps, mapDispatchToProps)(SettingUser);

