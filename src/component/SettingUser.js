import React from 'react';
import { Text, View } from 'react-native';

//stylesheet
import styles from '../styles';

// component
import {  Icon } from 'react-native-elements'

export default class SettingUser extends React.Component {

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
                                    onPress={() => console.log('hello')} />
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
                                    onPress={() => console.log('hello')} />
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


                  </View>
            );
      }
}

