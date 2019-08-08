import React from 'react';


// component
import { Overlay } from 'react-native-elements'
import { View, ImageBackground } from 'react-native';

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
                       
                              
                        

                        {/* form add ข้อมูล*/}

                        <FormStory />
                        



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
