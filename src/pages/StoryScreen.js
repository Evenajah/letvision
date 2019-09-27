import React from 'react';
import { Text, ScrollView, RefreshControl, View, Alert } from 'react-native';
import { Icon, Card, Button, Avatar } from 'react-native-elements';


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

class StoryScreen extends React.Component {

      constructor() {
            super();

            this.state = {
                  refreshing: false,
                  storyObj: []
            };


      }

      speak() {
            var thingToSay = 'ดีครับ';
            Speech.speak(thingToSay,{
                  language:'th'
            });
      }

      componentDidMount = () => {

            // load
            this.props.setLoading(true);



            // ยิง API
            const service = `https://us-central1-letview-db16d.cloudfunctions.net/story`;
            axios.get(service)
                  .then((response) => {

                        this.setState({
                              storyObj: response.data
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
            return this.state.storyObj.map((itemStory, i) => {
                  return (
                        <Card key={i}
                              containerStyle={styles.wrapCardStory}

                              title={itemStory.storyItem.topic}
                              titleStyle={{
                                    fontFamily: 'Kanit-Light',
                                    fontWeight: 'normal',
                                    color: '#CD5C5C'
                              }}

                              image={source = {
                                    uri: itemStory.userCreate.profile_picture,
                              }}

                              imageStyle={{
                                    height: 250
                              }}

                        >


                              {/*View card ล่าง*/}
                              <View style={styles.cardListStory}>
                                    <View style={{ flexDirection: 'row' }}>
                                          <Avatar
                                                size={30}
                                                rounded
                                                source={{
                                                      uri:
                                                            itemStory.userCreate.profile_picture,
                                                }}
                                          />
                                          {/*ชื่อสกุล*/}
                                          <Text style={{ marginLeft: 10, fontSize: 17, fontFamily: 'Kanit-Light', color: '#CD5C5C' }}>
                                                {itemStory.userCreate.first_name} {itemStory.userCreate.last_name}
                                          </Text>

                                          {/*สเตตัส*/}
                                          <Text style={{ marginLeft: 'auto', fontSize: 17, fontFamily: 'Kanit-Light', color: '#CD5C5C' }}>
                                                {itemStory.userCreate.stat} {'\n'}
                                          </Text>


                                    </View>
                                    <Text style={{ alignSelf: 'flex-end', fontSize: 10, fontFamily: 'Kanit-Light', color: '#CD5C5C' }}>
                                          {itemStory.storyItem.created_at.substr(0, 16)}
                                    </Text>
                              </View>


                              <Text style={{

                                    padding: 15,
                                    fontFamily: 'Kanit-Light',
                                    color: '#CD5C5C'
                              }}>

                                    {'   '}{itemStory.storyItem.detail.substr(0, 80)}{'...'}
                              </Text>
                              <Button
                                    icon={
                                          <Icon
                                                name='eye'
                                                type='font-awesome'
                                                color='white'
                                                size={15}

                                          />
                                    }
                                    buttonStyle={{
                                          borderRadius: 0,
                                          marginLeft: 0,
                                          marginRight: 0,
                                          marginBottom: 0,
                                          backgroundColor: '#CD5C5C',
                                    }}
                                    title='อ่านต่อ...'
                                    titleStyle={{
                                          fontFamily: 'Kanit-Light',
                                          marginLeft: 10
                                    }}
                                    onPress={() => this.patchDetailStory(itemStory)}

                              />


                        </Card>

                  );

            });
      }

      patchDetailStory(itemStory) {
            this.props.setDetailStory(itemStory);
            this.props.setOverlayReadStory(true);

      }

      render() {
            return (
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

                        >


                              {this.mapItemsStory()}



                        </ScrollView>

                        <LoadingRequest />

                        <OverlayReadStory />
                        <Button title="Press to hear some words" onPress={this.speak} />

                  </View>
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

export default connect(mapStatetoProps, mapDispatchToProps)(StoryScreen);

