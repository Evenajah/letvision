import React from 'react';
import { Text, ScrollView, RefreshControl, View, Alert } from 'react-native';
import { Icon, Card, Button, Avatar, Overlay } from 'react-native-elements';


//stylesheet
import styles from '../../styles';

//component
import Head from '../Head';


// service
import axios from 'axios';
import LoadingRequest from './LoadingRequest';

// redux
import { connect } from 'react-redux';

// permission+barcode
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';


class OverlayScanBarcode extends React.Component {

    constructor() {
        super();

    }



    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true });
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };


    render() {
        return (
            <Overlay
                isVisible={this.props.overlayScan}
                onBackdropPress={() => this.props.setOverlayScan(false)}
                overlayStyle={{ padding: 0,borderRadius:15 ,borderWidth:0}}
                width='auto'
                height='auto'

            >

                <BarCodeScanner
                    onBarCodeScanned={this.handleBarCodeScanned}
                    style={{ width: 250, height: 250 }}
                />


            </Overlay>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        user: state.user,
        overlayScan: state.overlayScan,
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

        setOverlayScan: (status) => {
            dispatch({
                type: "setOverlayScan",
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

export default connect(mapStatetoProps, mapDispatchToProps)(OverlayScanBarcode);

