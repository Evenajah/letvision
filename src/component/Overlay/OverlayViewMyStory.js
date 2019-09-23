import React from 'react';
import { Text, ScrollView, RefreshControl, View, Alert } from 'react-native';
import { Icon, Card, Button, Avatar } from 'react-native-elements';


//stylesheet
import styles from '../../styles';

//component
import Head from '../Head';


// service
import axios from 'axios';
import LoadingRequest from './LoadingRequest';

// redux
import { connect } from 'react-redux';
import OverlayReadStory from './OverlayReadStory';




class OverlayViewMyStory extends React.Component {

      constructor () {
            super();

            this.state = {
                  refreshing: false,
                  storyObj: []
            };


      }

      componentDidMount = () => {
            // setLoading
            this.props.setLoading(true);

            // Api Request
            const service = `https://us-central1-letview-db16d.cloudfunctions.net/story/${this.props.user.uid}`;
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
                              containerStyle={styles.wrapCardMyStory}

                              title={itemStory.storyItem.topic}
                              titleStyle={{
                                    fontFamily: 'Kanit-Light',
                                    fontWeight: 'normal',
                                    color: '#CD5C5C'
                              }}


                              image={source = {
                                    uri: itemStory.storyItem.photoUrl,
                              }}


                              imageStyle={{
                                    height: 200
                              }}

                        >

                              <Text style={{

                                    padding: 15,
                                    fontFamily: 'Kanit-Light',
                                    color: '#CD5C5C'
                              }}>

                                    {'   '}{itemStory.storyItem.detail.substr(0, 80)}{'...'}
                              </Text>



                              <View style={{ flexDirection: 'row' }}>

                                    {/*View*/}
                                    <Icon
                                          raised
                                          name='eye'
                                          type='font-awesome'
                                          size={18}
                                          color='#3366CC'
                                          reverse={true}
                                          onPress={() => this.viewStory()}
                                    />

                                    {/*Edit*/}
                                    <Icon
                                          raised
                                          name='edit'
                                          type='font-awesome'
                                          color='#33CC66'
                                          size={18}
                                          reverse={true}
                                          onPress={() => console.log('hello')}

                                    />

                                    {/*Delete*/}
                                    <Icon
                                          raised
                                          name='trash'
                                          type='font-awesome'
                                          color='#FF4500'
                                          reverse={true}
                                          size={18}
                                          onPress={() => console.log('hello')}

                                    />


                              </View>

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

                        <Head title='Your Story' />

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

                        <OverlayReadStory/>




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

export default connect(mapStatetoProps, mapDispatchToProps)(OverlayViewMyStory);

