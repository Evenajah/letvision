import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Icon, Card, Button, Avatar, Overlay } from 'react-native-elements';


// component 

// redux
import { connect } from 'react-redux';

//stylesheet
import styles from '../../styles';

class OverlayReadStory extends React.Component {
      constructor (props) {
            super(props);

      }

      render() {
            try {
                  return (


                        <Overlay
                              isVisible={this.props.overlayReadStory}
                              windowBackgroundColor="rgba(255, 255, 255, .5)"
                              overlayBackgroundColor="#CD5C5C"
                              width="auto"
                              height="auto"
                              onBackdropPress={() => this.props.setOverlayReadStory(false)}
                        >
                              <ScrollView>
                                    <Card
                                          containerStyle={styles.wrapCardStory}

                                          title={this.props.detailStory.storyItem.topic}
                                          titleStyle={{
                                                fontFamily: 'Kanit-Light',
                                                fontWeight: 'normal',
                                                color: '#CD5C5C'
                                          }}

                                          image={source = {
                                                uri: this.props.detailStory.userCreate.profile_picture,
                                          }}

                                          imageStyle={{
                                                height: 350
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
                                                                        this.props.detailStory.userCreate.profile_picture,
                                                            }}
                                                      />
                                                      {/*ชื่อสกุล*/}
                                                      <Text style={{ marginLeft: 10, fontSize: 17, fontFamily: 'Kanit-Light', color: '#CD5C5C' }}>
                                                            {this.props.detailStory.userCreate.first_name} {this.props.detailStory.userCreate.last_name}
                                                      </Text>

                                                      {/*สเตตัส*/}
                                                      <Text style={{ marginLeft: 'auto', fontSize: 17, fontFamily: 'Kanit-Light', color: '#CD5C5C' }}>
                                                            {this.props.detailStory.userCreate.stat} {'\n'}
                                                      </Text>


                                                </View>

                                                <Text style={{ alignSelf: 'flex-end', fontSize: 15, fontFamily: 'Kanit-Light', color: '#CD5C5C' }}>
                                                      {this.props.detailStory.storyItem.created_at}
                                                </Text>
                                          </View>


                                          <Text style={{

                                                padding: 15,
                                                fontFamily: 'Kanit-Light',
                                                color: '#CD5C5C'
                                          }}>

                                                {'   '}{this.props.detailStory.storyItem.detail}
                                          </Text>

                                          <Text>{"\n"}{"\n"}</Text>

                                          <View style={styles.btnFormAddStory}>
                                                <Icon
                                                      raised
                                                      name='backward'
                                                      type='font-awesome'
                                                      color='#F08080'
                                                      reverse={true}
                                                      underlayColor='#FF6347'
                                                      containerStyle={{ opacity: 0.8 }}
                                                      onPress={() => this.props.setOverlayReadStory(false)}
                                                />
                                          </View>

                                    </Card>
                              </ScrollView>

                        </Overlay>

                  );
            } catch (error) {
                  return (
                        <View>

                        </View>
                  );
            }


      }
}


const mapStatetoProps = (state) => {
      return {
            overlayReadStory: state.overlayReadStory,
            detailStory: state.detailStory
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
            }
      }
}

export default connect(mapStatetoProps, mapDispatchToProps)(OverlayReadStory);