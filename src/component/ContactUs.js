import React from 'react';
import { Text, View } from 'react-native';

//stylesheet
import styles from '../styles';

// component
import { Icon, SocialIcon } from 'react-native-elements'

export default class ContactUs extends React.Component {

      render() {
            return (
                  <View style={styles.wrapContact}>
                        <Text style={
                              {
                                    fontFamily: 'Kanit-Light',
                                    alignSelf: 'center',
                                    color: '#CD5C5C',
                                    fontSize: 20

                              }
                        }>
                        ติดต่อเรา...
                        </Text>
                        
                        <View style={styles.contactContent}>

                              <View style={styles.iconSetting}>
                                    <Icon

                                          size={25}
                                          raised
                                          name='github'
                                          type='font-awesome'
                                          color='#CD5C5C'
                                          onPress={() => console.log('hello')} />
                              </View>

                              <View style={styles.iconSetting}>
                                    <Icon
                                          size={25}
                                          raised
                                          name='facebook'
                                          type='font-awesome'
                                          color='#CD5C5C'
                                          onPress={() => console.log('hello')} />

                              </View>


                              <View style={styles.iconSetting}>
                                    <Icon
                                          size={25}
                                          raised
                                          name='google'
                                          type='font-awesome'
                                          color='#CD5C5C'
                                          onPress={() => console.log('hello')} />
                              </View>

                              <View style={styles.iconSetting}>
                                    <Icon
                                          size={25}
                                          raised
                                          name='linkedin'
                                          type='font-awesome'
                                          color='#CD5C5C'
                                          onPress={() => console.log('hello')} />
                              </View>


                        </View>
                  </View>
            );
      }
}

