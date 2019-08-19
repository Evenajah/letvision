import React from 'react';
import { Text, ScrollView, RefreshControl } from 'react-native';
import { Icon, Card, Button } from 'react-native-elements';


//stylesheet
import styles from '../styles';

//component
import Head from '../component/Head';


// service
import axios from 'axios';



export default class StoryScreen extends React.Component {

      constructor () {
            super();

            this.state = {
                  refreshing: false,
                  storyObj: []
            };

      }

      componentDidMount = () => {

            // ยิง API
            const service = `https://us-central1-letview-db16d.cloudfunctions.net/story`;
            axios.get(service).then((response) => {
                  this.setState({
                        storyObj: response.data
                  })

            })
      }


      mapItemsStory() {
            return this.state.storyObj.map(function (itemStory, i) {
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
                              }}>

                              <Text style={{
                                    marginBottom: 10,
                                    fontFamily: 'Kanit-Light',
                                    color: '#CD5C5C'
                              }}>

                                    {'   '}บอกเล่าเรื่องราวเกี่ยวกับประสบการณ์ด้วยแอพพลิเคชั่น LetVIsion ของคุณ
                              </Text>

                              <Button
                                    icon={
                                          <Icon
                                                name='plus'
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
                                    title='สร้างเรื่องราว'
                                    titleStyle={{
                                          fontFamily: 'Kanit-Light',
                                          marginLeft: 10
                                    }}
                                    onPress={() => this.props.setOverlayCreateStory(true)}

                              />



                        </Card>

                  );

            });
      }

      render() {
            return (
                  <ScrollView
                        refreshControl={
                              <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={this.componentDidMount}
                              />
                        }

                  >

                        <Head title='Story' />


                        {this.mapItemsStory()}


                  </ScrollView>
            );
      }
}

