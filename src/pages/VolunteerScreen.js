import React from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';

// component
import { Icon, Button, Card } from 'react-native-elements'

//stylesheet
import styles from '../styles';
import Head from '../component/Head';

// component 
import Chart from '../component/Chart';
import ShowUserBox from '../component/ShowUserBox';
import HowToUse from '../component/HowToUse';
import CardCreateStory from '../component/CardCreateStory';



export default class VolunteerScreen extends React.Component {

    constructor (props) {
        super(props);

        this.state = {}

    }




    render() {



        return (
            <View style={{ flex: 1 }}>


                <Head title="LetVision" />


                <ScrollView style={styles.wrapVol}>

                    <View style={styles.wrapChart}>

                        <View style={styles.wrapTextVolSc}>

                            <Text style={styles.textVolSc}>อัตราส่วนผู้ใช้งาน</Text>

                        </View>

                        <Chart />


                    </View>

                    {/*userBox*/}

                   <ShowUserBox user={this.props.user} navigation={this.props.navigation} />

                    {/*card*/}

                      <CardCreateStory/>

                    <HowToUse />

                </ScrollView>

            </View>

        );
    }
}

