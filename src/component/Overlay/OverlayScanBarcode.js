import React from 'react';
import { View, Alert } from 'react-native';
import { Overlay } from 'react-native-elements';



// service
import axios from 'axios';
import LoadingRequest from './LoadingRequest';

// redux
import { connect } from 'react-redux';

// barcode
import { BarCodeScanner } from 'expo-barcode-scanner';


class OverlayScanBarcode extends React.Component {

    constructor() {
        super();

        this.state = {
            scanned: false,
        };

    }



    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true });

        this.props.setLoading(true);
        // ยิง api เข้า googlebook
        const apiBook = 'https://www.googleapis.com/books/v1/volumes?q=isbn=';
        axios.get(apiBook + data)
            .then((response) => {

                console.log(data);


                const responseBookItem = response.data.items[0].volumeInfo;


                const itemsPatchBook = {
                    isbnCode: '',
                    titleBookName: responseBookItem.title,
                    authorName: responseBookItem.authors[0],
                    publishName: responseBookItem.publisher,
                    discription: responseBookItem.description,
                    // เช็คว่ามีใน Api ที่ยิงไปมั้ย
                    image: !!(responseBookItem.imageLinks) ? responseBookItem.imageLinks.smallThumbnail : 'https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057902_960_720.png'
                }

                // patch ข้อมูลหนังสือ
                this.props.setBookItem(itemsPatchBook);

                // ปิดการ loading
                this.props.setLoading(false);

                this.setOverlayScan(false);

                this.setState({
                    scanned: false
                })
            })
            .catch((error) => {
                Alert.alert('Error', error.message);

                // ปิดการ loading
                this.props.setLoading(false);
            })


    };




    render() {
        return (
            <Overlay
                isVisible={this.props.overlayScan}
                onBackdropPress={() => this.props.setOverlayScan(false)}
                overlayStyle={{ padding: 0, borderRadius: 15, borderWidth: 0 }}
                width='auto'
                height='auto'

            >
                <View>
                    <BarCodeScanner
                        onBarCodeScanned={this.state.scanned ? undefined : this.handleBarCodeScanned}
                        style={{ width: 250, height: 250 }}
                    />

                    <LoadingRequest />
                </View>


            </Overlay>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        user: state.user,
        overlayScan: state.overlayScan,
        loading: state.loading,
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


        setBookItem: (items) => {
            dispatch({
                type: "setBookItems",
                item: items
            })

        }

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(OverlayScanBarcode);

