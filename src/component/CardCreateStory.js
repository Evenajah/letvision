import React from 'react';
import { Text } from 'react-native';

// component
import { Icon, Button, Card } from 'react-native-elements'


//stylesheet
import styles from '../styles';
import OverlayCreateStory from './Overlay/OverlayCreateBook';


// redux
import { connect } from 'react-redux';


class CardCreateStory extends React.Component {


    render() {



        return (
            <Card
                containerStyle={styles.wrapCardStory}

                title='เพิ่มหนังสือ'
                titleStyle={{
                    fontFamily: 'Kanit-Light',
                    fontWeight: 'normal',
                    color: '#CD5C5C'
                }}

                image={{uri:'https://images.unsplash.com/photo-1542012204088-49fc1ae18754?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'}}>

                <Text style={{
                    marginBottom: 10,
                    fontFamily: 'Kanit-Light',
                    color: '#CD5C5C'
                }}>

                    {'   '}สร้างหนังสือเพื่อผู้พิการทางสายตา
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
                        backgroundColor: '#2F4F4F',
                    }}
                    title='สร้างหนังสือ'
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

