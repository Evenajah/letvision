import React from 'react';


// component
import { Overlay } from 'react-native-elements'
import {  ImageBackground } from 'react-native';

// redux
import { connect } from 'react-redux';
import FormStory from '../Form/FormStory';


class OverlayCreateStory extends React.Component {



      render() {

            return (
                  <Overlay
                        isVisible={this.props.overlayCreateStory}

                        width="auto"
                        height="auto"
                        fullScreen={true}
                        onBackdropPress={() => this.props.setOverlayCreateStory(false)}
                  >
                        <ImageBackground source={{ uri: 'https://www.solidbackgrounds.com/images/1920x1080/1920x1080-indian-red-solid-color-background.jpg' }} style={{ width: '100%', height: '100%' }}>
                        
                              {/* form add ข้อมูล*/}
                              <FormStory />

                        </ImageBackground>



                  </Overlay>
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

export default connect(mapStatetoProps, mapDispatchToProps)(OverlayCreateStory);
