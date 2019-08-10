import React from 'react';
import { Text, View, TextInput, Dimensions, ScrollView, Alert } from 'react-native';


// component
import { Icon, Button, Card, Image, Avatar } from 'react-native-elements'
import LoadingRequest from '../Overlay/LoadingRequest';


// redux
import { connect } from 'react-redux';


//stylesheet
import styles from '../../styles';


// service
import axios from 'axios';

//timeStamp
import moment from 'moment';



class FormStory extends React.Component {

      constructor (props) {

            super(props);
            this.state = {
                  topic: '',
                  detail: ''
            }

      }

      addStory = () => {

            if (this.state.topic.length < 10 && this.state.detail.length < 10) {

                  Alert.alert('Warning !', 'Minimum of topic is 10 characters and detail is 300 characters.');

            } else {

                  // Start Loading
                  this.props.setLoading(true);


                  //timestamp
                  const today = Date.now();
                  const date = moment(today).format("MMMM Do YYYY, h:mm:ss a");


                  //service
                  const service = 'https://us-central1-letview-db16d.cloudfunctions.net/story';
                  const addStoryObj = {
                        userId: this.props.user.uid,
                        topic: this.state.topic,
                        detail: this.state.detail,
                        created_at: date,
                        photoUrl: this.props.user.profile_picture
                  }

                  axios.post(service, addStoryObj)
                        .then((response) => {
                              if (response.data === 'success') {

                                    // Stop Loading
                                    this.props.setLoading(false);

                                    // SetState
                                    this.setState({
                                          topic: '',
                                          detail: ''
                                    })

                                    Alert.alert("Success!", "Succesfully Add Your Story.");
                              }
                        })
                        .catch((err) => {
                              Alert.alert("Error!", err.message);
                        })

            }

      }

      render() {

            return (
                  <View style={{ flex: 1 }}>

                        <ScrollView>

                              <Image
                                    source={{ uri: 'https://cdn.pixabay.com/photo/2017/12/01/22/16/people-2991882_1280.jpg' }}
                                    style={{
                                          width: Dimensions.get('window').width,
                                          height: 300,
                                          justifyContent: 'center',
                                          alignSelf: 'center',
                                         
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
                                    value={this.state.topic}
                                    onChangeText={topic => this.setState({ topic })}
                                    style={styles.topicForm}

                              />

                              <TextInput
                                    multiline={true}
                                    numberOfLines={5}
                                    value={this.state.detail}
                                    placeholder='Say something....'
                                    placeholderTextColor='#fff'
                                    onChangeText={detail => this.setState({ detail })}
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
                                    containerStyle={{ opacity: 0.8 }}
                                    onPress={() => this.props.setOverlayCreateStory(false)}
                              />

                              <Icon
                                    raised
                                    name='check'
                                    type='font-awesome'
                                    color='#FA8072'
                                    reverse={true}
                                    underlayColor='#FF6347'
                                    containerStyle={{ opacity: 0.8 }}
                                    onPress={() => this.addStory()}

                              />



                        </View>

                        <LoadingRequest />

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

            setLoading: (status) => {
                  dispatch({
                        type: "startLoading",
                        status: status
                  })

            }
      }
}

export default connect(mapStatetoProps, mapDispatchToProps)(FormStory);
