import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// component
import {  Overlay } from 'react-native-elements'


//stylesheet
import styles from '../../styles';

// redux
import { connect } from 'react-redux';



class LoadingRequest extends React.Component {

      render() {
            return (
                  <View>
                        {this.props.loading &&
                              <View style={styles.loading}>

                                    <Overlay
                                          isVisible={this.props.loading}
                                          overlayStyle={styles.overlayLoading}
                                          overlayBackgroundColor='transparent'
                                          width="auto"
                                          height="auto"
                                    >
                                          <ActivityIndicator animating={this.props.loading} size="large" color="#CD5C5C" />

                                    </Overlay>
                              </View>
                        }
                  </View>


            );
      }
}

const mapStatetoProps = (state) => {
      return {
            loading: state.loading
      }
}




export default connect(mapStatetoProps, null)(LoadingRequest);
