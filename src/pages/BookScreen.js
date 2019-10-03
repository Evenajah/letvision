import React from 'react';
import { Text, ScrollView, RefreshControl, View, Alert, ImageBackground, ActivityIndicator, Dimensions } from 'react-native';
import { Icon, Card, Button, Avatar, ListItem, Image } from 'react-native-elements';


//stylesheet
import styles from '../styles';

//component
import Head from '../component/Head';


// service
import axios from 'axios';
import LoadingRequest from '../component/Overlay/LoadingRequest';

// redux
import { connect } from 'react-redux';
import OverlayReadStory from '../component/Overlay/OverlayReadStory';


import * as Speech from 'expo-speech';

class BookScreen extends React.Component {

      constructor() {
            super();

            this.state = {
                  refreshing: false,
                  bookObj: []
            };


      }

      speak() {
            var thingToSay = 'ดีครับ';
            Speech.speak(thingToSay, {
                  language: 'th'
            });
      }

      componentDidMount = () => {

            // load
            this.props.setLoading(true);


            // ยิง API
            const service = `https://us-central1-letview-db16d.cloudfunctions.net/book`;
            axios.get(service)
                  .then((response) => {

                        this.setState({
                              bookObj: response.data
                        })

                        // load success
                        this.props.setLoading(false);

                  })
                  .catch((error) => {
                        // Alert
                        Alert.alert('Error', error.message);
                  })
      }


      mapItemsStory() {
            return this.state.bookObj.map((itemBook, i) => {
                  return (
                        <View key={i} style={{
                              padding: 20,
                              backgroundColor: "#DCDCDC",
                              width: Dimensions.get('window').width - 15,
                              justifyContent: 'center',
                              alignSelf: 'center',
                              alignItems: 'center',
                              marginVertical: 5,
                        }}>
                              <View style={styles.listBook}>

                                    <Image
                                          source={{ uri: itemBook.bookItem.image }}
                                          style={{ width: 167, height: 250, resizeMode: 'contain', }}
                                          PlaceholderContent={<ActivityIndicator />}
                                    />


                                    <View style={{
                                          flexGrow: 1,
                                          flex: 1,
                                          padding: 10,
                                    }}>

                                          <Text style={{ fontFamily: 'Kanit-Light', fontSize: 17 }}>
                                                {itemBook.bookItem.titleBookName.substr(0, 30)}...
                                          </Text>

                                          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>

                                                <Icon
                                                      name='book'
                                                      type='font-awesome'
                                                      size={20}
                                                      color='#2F4F4F'
                                                      containerStyle={{ marginRight: 10 }}
                                                />
                                                <Text style={{ fontFamily: 'Kanit-Light' }}>
                                                      {itemBook.category}
                                                </Text>

                                          </View>

                                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>


                                                <Icon
                                                      name='user'
                                                      type='font-awesome'
                                                      size={20}
                                                      color='#2F4F4F'
                                                      containerStyle={{ marginRight: 10 }}
                                                />

                                                <Text style={{ fontFamily: 'Kanit-Light' }}>
                                                      {itemBook.userCreate.first_name} {itemBook.userCreate.last_name}
                                                </Text>

                                          </View>

                                          <Text style={{ fontFamily: 'Kanit-Light', marginTop: 10, fontSize: 11 }}>
                                                {'  '}{itemBook.bookItem.discription.substr(0, 130)}...
                                          </Text>



                                    </View>

                              </View>
                        </View>

                  );

            });
      }

      patchDetailStory(itemStory) {
            this.props.setDetailStory(itemStory);
            this.props.setOverlayReadStory(true);

      }

      render() {
            return (
                  <ImageBackground source={require('../images/blind2.jpg')} style={{ width: '100%', height: '100%' }}>
                        <View style={{ flex: 1 }}>
                              <Head title='Story' />

                              <ScrollView
                                    style={styles.wrapVol}
                                    refreshControl={
                                          <RefreshControl
                                                refreshing={this.state.refreshing}
                                                onRefresh={this.componentDidMount}
                                          />
                                    }
                                    horizontal={true}

                              >
                                    {this.mapItemsStory()}

                              </ScrollView> 
                              

                              <LoadingRequest />

                              <OverlayReadStory />
                              <Button title="Press to hear some words" onPress={this.speak} />

                        </View>
                  </ImageBackground>
            );
      }
}

const mapStatetoProps = (state) => {
      return {
            user: state.user,
            overlayReadStory: state.overlayReadStory,
      }
}


const mapDispatchToProps = (dispatch) => {
      return {
            setLoading: (status) => {
                  dispatch({
                        type: "startLoading",
                        status: status
                  })
            },

            setOverlayReadStory: (status) => {
                  dispatch({
                        type: "setOverlayReadStory",
                        status: status
                  })
            },

            setDetailStory: (detail) => {
                  dispatch({
                        type: "setDetailStory",
                        detail: detail
                  })
            }
      }
}

export default connect(mapStatetoProps, mapDispatchToProps)(BookScreen);

