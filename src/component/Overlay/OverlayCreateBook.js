import React from 'react';


// component
import { Overlay } from 'react-native-elements'
import { ImageBackground, Button, Text} from 'react-native';

// redux
import { connect } from 'react-redux';
import FormStory from '../Form/FormStory';


// permission+barcode
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';


class OverlayCreateStory extends React.Component {

      // state = {
      //       hasCameraPermission: null,
      //       scanned: false,
      // };

      // async componentDidMount() {
      //       this.getPermissionsAsync();
      // }

      // getPermissionsAsync = async () => {
      //       const { status } = await Permissions.askAsync(Permissions.CAMERA);
      //       this.setState({ hasCameraPermission: status === 'granted' });
      // };


      // handleBarCodeScanned = ({ type, data }) => {
      //       this.setState({ scanned: true });
      //       alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      // };


      render() {
      //       const { hasCameraPermission, scanned } = this.state;

      //       if (hasCameraPermission === null) {
      //             return <Text>Requesting for camera permission</Text>;
      //       }
      //       if (hasCameraPermission === false) {
      //             return <Text>No access to camera</Text>;
      //       }
      //       return (
      //             <View
      //                   style={{
      //                         flex: 1,
      //                         flexDirection: 'column',
      //                         justifyContent: 'flex-end',
      //                   }}>


      //                   <BarCodeScanner
      //                         onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
      //                         style={{width:300,height:300}}
      //                                   />

      //                   {scanned && (
      //                         <Button title={'Tap to Scan Again'} onPress={() => this.setState({ scanned: false })} />
      //                   )}


      //             </View>
      //       );
      // }
                  return (
                        <Overlay
                              isVisible={this.props.overlayCreateStory}

                              width="auto"
                              height="auto"
                              fullScreen={true}
                              onBackdropPress={() => this.props.setOverlayCreateStory(false)}
                        >
                              <ImageBackground source={{ uri: 'https://www.solidbackgrounds.com/images/950x350/950x350-dark-slate-gray-solid-color-background.jpg' }} style={{ width: '100%', height: '100%' }}>

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
