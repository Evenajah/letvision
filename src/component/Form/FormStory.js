import React from 'react';
import { Text, View, TextInput, ScrollView, Alert, ActivityIndicator } from 'react-native';


// component
import { Icon, Button, Image } from 'react-native-elements'
import LoadingRequest from '../Overlay/LoadingRequest';
import OverlayScanBarcode from '../Overlay/OverlayScanBarcode';

// redux
import { connect } from 'react-redux';


//stylesheet
import styles from '../../styles';


// service
import axios from 'axios';

//timeStamp
import moment from 'moment';


// permission+barcode
import * as Permissions from 'expo-permissions';




class FormStory extends React.Component {

      constructor(props) {

            super(props);
            this.state = {
                  isbnInput: '',
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

                                    Alert.alert("Success!", "Succesfully Add Your Book.");
                              }
                        })
                        .catch((err) => {
                              Alert.alert("Error!", err.message);
                        })

            }

      }



      getPermissionsCamera = async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);

            if (status === 'granted') {
                  this.props.setOverlayScan(true);
            } else {
                  Alert.alert('Hey! You heve not enabled selected permissions');
            }
      };


      getBookWithApi = () => {

            if (this.state.isbnInput === '' || this.state.isbnInput.length < 13) {

                  Alert.alert('Warning', 'ISBN is between 10 - 13 characters')

            } else {
                  this.props.setLoading(true);
                  // ยิง api เข้า googlebook
                  const apiBook = 'https://www.googleapis.com/books/v1/volumes?q=isbn=';
                  axios.get(apiBook + this.state.isbnInput)
                        .then((response) => {

                              // console.log(response.data.items[0].volumeInfo);
                              const responseBookItem = response.data.items[0].volumeInfo;
                            

                              const itemsPatchBook = {
                                    isbnCode: '',
                                    titleBookName: responseBookItem.title,
                                    authorName: responseBookItem.authors[0],
                                    publishName: responseBookItem.publisher,
                                    discription: responseBookItem.description,
                                    // เช็คว่ามีใน Api ที่ยิงไปมั้ย
                                    image: !!(responseBookItem.imageLinks) ? responseBookItem.imageLinks.smallThumbnail : 'https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057902_960_720.png'
                              }

                              // patch ข้อมูลหนังสือ
                              this.props.setBookItem(itemsPatchBook);

                              // ปิดการ loading
                              this.props.setLoading(false);
                        })
                        .catch((error) => {
                              Alert.alert('Error', error.message);

                              // ปิดการ loading
                              this.props.setLoading(false);
                        })
            }
      }



      render() {


            return (
                  <View style={{ flex: 1 }}>

                        <ScrollView>


                              <View style={styles.viewInput}>
                                    <Icon

                                          name='book'
                                          type='font-awesome'
                                          color='#ffffff'
                                          size={35}
                                          iconStyle={{ marginRight: 15 }}
                                    />

                                    <Text style={styles.headerCreateStoryText}>

                                          สร้างหนังสือ

                                    </Text>
                              </View>

                              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', }}>

                                    <TextInput
                                          placeholder='เลข ISBN'
                                          keyboardType='numeric'
                                          placeholderTextColor='#fff'
                                          value={this.state.isbnInput}
                                          onChangeText={isbnInput => this.setState({ isbnInput })}
                                          style={styles.isbnForm}
                                    />

                                    <Icon

                                          name='search'
                                          type='font-awesome'
                                          color='#ffffff'
                                          onPress={() => this.getBookWithApi()}
                                    />
                              </View>


                              <Button
                                    icon={
                                          <Icon

                                                name='barcode'
                                                type='font-awesome'
                                                color='#ffffff'

                                          />
                                    }
                                    title="สแกน Barcode ISBN"
                                    buttonStyle={{ width: 300, alignSelf: 'center', backgroundColor: '#708090' }}
                                    titleStyle={{ marginLeft: 15, fontFamily: 'Kanit-Light' }}
                                    onPress={() => this.getPermissionsCamera()}

                              />

                              <View style={{ backgroundColor: '#708090', marginTop: 30, padding: 20, alignItems: 'center', justifyContent: 'center' }}>

                                    <Image
                                          source={{ uri: this.props.bookItems.image }}
                                          style={{ width: 200, height: 200, resizeMode: 'contain', marginBottom: 15 }}
                                          PlaceholderContent={<ActivityIndicator />}
                                    />

                                    <TextInput
                                          placeholder='ชื่อเรื่อง'
                                          placeholderTextColor='#fff'
                                          value={this.props.bookItems.titleBookName}
                                          onChangeText={isbnInput => this.setState({ isbnInput })}
                                          style={styles.itemsBookForm}
                                    />


                                    <TextInput
                                          placeholder='ชื่อผู้แต่ง'
                                          placeholderTextColor='#fff'
                                          value={this.props.bookItems.authorName}
                                          onChangeText={isbnInput => this.setState({ isbnInput })}
                                          style={styles.itemsBookForm}
                                    />


                                    <TextInput
                                          placeholder='สำนักพิมพ์'
                                          placeholderTextColor='#fff'
                                          value={this.props.bookItems.publishName}
                                          onChangeText={isbnInput => this.setState({ isbnInput })}
                                          style={styles.itemsBookForm}
                                    />



                                    <TextInput
                                          multiline={true}
                                          numberOfLines={5}
                                          value={this.props.bookItems.discription}
                                          placeholder='รายละเอียด...'
                                          placeholderTextColor='#fff'
                                          onChangeText={detail => this.setState({ detail })}
                                          style={styles.textAreaForm}

                                    />



                              </View>


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

                        <OverlayScanBarcode />

                  </View>


            );
      }
}


const mapStatetoProps = (state) => {
      return {
            user: state.user,
            overlayCreateStory: state.overlayCreateStory,
            overlayScan: state.overlayScan,
            loading: state.loading,
            bookItems: state.bookItems
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

            },

            setOverlayScan: (status) => {
                  dispatch({
                        type: "setOverlayScan",
                        status: status
                  })

            },

            setBookItem: (items) => {
                  dispatch({
                        type: "setBookItems",
                        item: items
                  })

            }
      }
}

export default connect(mapStatetoProps, mapDispatchToProps)(FormStory);
