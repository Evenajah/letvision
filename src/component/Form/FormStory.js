import React from 'react';
import { Text, View, TextInput, Dimensions, ScrollView } from 'react-native';


// component
import { Icon, Button, Card, Image, Avatar } from 'react-native-elements'


// redux
import { connect } from 'react-redux';


//stylesheet
import styles from '../../styles';

class FormStory extends React.Component {

      render() {



            return (
                  <View style={{ flex: 1 }}>

                        <ScrollView>

                              <Image
                                    source={{ uri: 'https://images.unsplash.com/photo-1512799906445-d591d53082c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }}
                                    style={{
                                          width: Dimensions.get('window').width,
                                          height: 300,
                                          justifyContent: 'center',
                                          alignSelf: 'center',
                                          borderRadius: 25,
                                    }}
                              />
                              <View style={styles.viewInput}>

                                    <Text style={styles.headerCreateStoryText}>


                                          สร้างเรื่องราวของคุณ

                                    </Text>
                              </View>

                              <TextInput
                                    placeholder='Topic'
                                    placeholderTextColor='#fff'
                                    style={styles.topicForm}
                              />

                              <TextInput
                                    multiline={true}
                                    numberOfLines={5}
                                    placeholder='Say something....'
                                    placeholderTextColor='#fff'
                                    style={styles.textAreaForm}
                              />




                        </ScrollView>
                        
                        <View style={styles.btnFormAddStory}>
                              <Icon
                                    raised
                                    name='backward'
                                    type='font-awesome'
                                    color='#F08080'
                                    reverse={true}
                                    underlayColor='#FF6347'
                                    containerStyle={{opacity:0.8}}
                                    onPress={() => this.props.setOverlayCreateStory(false)}
                              />

                              <Icon
                                    raised
                                    name='check'
                                    type='font-awesome'
                                    color='#FA8072'
                                    reverse={true}
                                    underlayColor='#FF6347'
                                    containerStyle={{opacity:0.8}}
                                    onPress={() => console.log('hello')}

                              />



                        </View>
                  </View>


            );
      }
}


const mapStatetoProps = (state) => {
      return {
            user: state.user,
            overlayCreateStory: state.overlayCreateStory,
            loading: state.loading
      }
}

const mapDispatchToProps = (dispatch) => {
      return {
            setOverlayCreateStory: (status) => {
                  dispatch({
                        type: "setOverlayCreateStory",
                        status: status
                  })

            },
      }
}

export default connect(mapStatetoProps, mapDispatchToProps)(FormStory);
