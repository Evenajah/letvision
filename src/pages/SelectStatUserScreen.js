import React from 'react';

// component
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';


// stylesheet
import styles from '../styles';

// userAuth
import userData from '../component/UserData';

// fire
import * as firebase from 'firebase';

// Nav
import TabNavigation from '../navigation/TabNavigation';


export default class SelectStatUserScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: userData.currentUser.uid,
            addStat: false
        }


    }

    addStatUser = stat => {
        firebase.database().ref(`/users/${this.state.userId}`).update({
            stat: stat
        }).then(() => {
           this.setState({
               addStat:true
           })
        }).catch((err) => {
            console.log('error', err);
        });
    }

    render() {
        if (this.state.addStat) {
            return <TabNavigation />
        } else {
            return (

                <View style={styles.overlayContent}>

                    <View style={styles.overlayBox}>
                        <Text style={styles.overlayTextHeader}>กรุณาเลือกประเภทผู้ใช้งาน</Text>



                        {/*Image*/}
                        <Avatar
                            containerStyle={styles.avatar}
                            size="xlarge"
                            onPress={() => this.addStatUser('Blind')}
                            activeOpacity={0.7}
                            rounded
                            source={
                                require('../images/blinder.jpeg')
                            }

                        />

                        <Text style={styles.overlayText}>
                            ผู้พิการทางสายตา ( Blind )
                    </Text>



                        <Avatar
                            containerStyle={styles.avatar}
                            size="xlarge"
                            onPress={() => this.addStatUser('Volunteer')}
                            activeOpacity={0.7}
                            rounded
                            source={
                                require('../images/volunteer.jpg')
                            }

                        />

                        <Text style={styles.overlayText}>
                            อาสาสมัคร ( Volunteer )
                    </Text>

                    </View>

                </View>


            );
        }
    }
}

