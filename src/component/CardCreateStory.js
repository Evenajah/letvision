import React from 'react';
import { Text } from 'react-native';

// component
import { Icon, Button, Card } from 'react-native-elements'


//stylesheet
import styles from '../styles';
import OverlayCreateStory from './Overlay/OverlayCreateStory';


// redux
import { connect } from 'react-redux';


class CardCreateStory extends React.Component {


    render() {



        return (
            <Card
                containerStyle={styles.wrapCardStory}

                title='เรื่องราว'
                titleStyle={{
                    fontFamily: 'Kanit-Light',
                    fontWeight: 'normal',
                    color: '#CD5C5C'
                }}

                image={require('../images/volunteer.jpg')}>

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


                <OverlayCreateStory />

            </Card>


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


export default connect(mapStatetoProps, mapDispatchToProps)(CardCreateStory);

