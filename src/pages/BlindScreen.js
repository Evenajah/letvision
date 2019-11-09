import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';



//stylesheet
import styles from '../styles';


// expo component 
import { Audio } from 'expo-av';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';





const recordingOptions = {
    // android not currently in use. Not getting results from speech to text with .m4a
    // but parameters are required
    android: {
        extension: '.m4a',
        outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_MPEG_4,
        audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_AAC,
        sampleRate: 44100,
        numberOfChannels: 2,
        bitRate: 128000,
    },
    ios: {
        extension: '.wav',
        audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_HIGH,
        sampleRate: 44100,
        numberOfChannels: 1,
        bitRate: 128000,
        linearPCMBitDepth: 16,
        linearPCMIsBigEndian: false,
        linearPCMIsFloat: false,
    },
};


export default class BlindScreen extends React.Component {


    constructor(props) {
        super(props);
        this.recording = null;
        this.state = {
            isFetching: false,
            isRecording: false,
            query: '',
        }
    }


    startRecording = async () => {
        const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        if (status !== 'granted') return;

        this.setState({ isRecording: true });
        // some of these are not applicable, but are required
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: true,
            staysActiveInBackground: true

        });
        const recording = new Audio.Recording();
        try {
            await recording.prepareToRecordAsync(recordingOptions);
            await recording.startAsync();
        } catch (error) {
            console.log(error);
            this.stopRecording();
        }
        this.recording = recording;
    }

    handleOnPressIn = () => {
        this.startRecording();
       
    }


    handleOnPressOut = () => {
        this.stopRecording();
        console.log(this.recording.getURI());

        this.playRecording(this.recording.getURI());
    }

    playRecording = async (uri) => {
        const soundObject = new Audio.Sound();
        try {
          await soundObject.loadAsync({uri:uri});
          await soundObject.playAsync();
          // Your sound is playing!
        } catch (error) {
          console.log("Error",error)
          // An error occurred!
        }
      }
   

    stopRecording = async () => {
        this.setState({ isRecording: false });
        try {
            await this.recording.stopAndUnloadAsync();
        } catch (error) {
            // Do nothing -- we are already unloaded.
        }
    }

    render() {

        const { isRecording, query, isFetching } = this.state;

        return (
            <View>
                <Text>{"\n\n\n\n\n\n\n\n\n\n\n"}</Text>
                <TouchableOpacity
                    onPressIn={this.handleOnPressIn}
                    onPressOut={this.handleOnPressOut}
                    style={styles.button}
                >
                    {isRecording && <ActivityIndicator color="#ffffff" />}
                    {!isFetching && <Text>Hold for Voice Search</Text>}
                </TouchableOpacity>
            </View>
        );
    }
}

