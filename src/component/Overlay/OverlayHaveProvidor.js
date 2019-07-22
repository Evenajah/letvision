import React from 'react';
import { Text, View, TextInput, Alert, ActivityIndicator } from 'react-native';


// component
import { Icon } from 'react-native-elements'


// redux
import { connect } from 'react-redux';


class OverlayHaveProvidor extends React.Component {




      render() {
            return (
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Icon
                              size={35}
                              raised
                              reverse={true}
                              name={this.props.user.account_type}
                              type='font-awesome'
                              color='#E9967A'
                              onPress={() => console.log('hello')} />
                        <Text style={{ fontFamily: 'Kanit-Light', color: '#fff',fontSize:15}}>
                              ไม่สามารถเข้าถึงส่วนนี้ได้
                        </Text>
                        <Text style={{ fontFamily: 'Kanit-Light', color: '#fff', fontSize:15}}>
                              เนื่องจากคุณใช้อีเมลของผู้ให้บริการ {this.props.user.account_type}
                        </Text>

                  </View>
            );
      }
}

const mapStatetoProps = (state) => {
      return {
            user: state.user,
      }
}


export default connect(mapStatetoProps, null)(OverlayHaveProvidor);
