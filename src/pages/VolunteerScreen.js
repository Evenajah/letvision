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


    render() {



        return (
            <View style={{ flex: 1 }}>

                {/*Header*/}
                <Head title='Letvision' />


                <ScrollView style={styles.wrapVol}>

                    <View style={styles.wrapChart}>

                        <View style={styles.wrapTextVolSc}>

                            <Text style={styles.textVolSc}>อัตราส่วนผู้ใช้งาน</Text>

                        </View>

                        {/*Chart*/}
                        <Chart />


                    </View>

                    {/*userBox*/}
                    <ShowUserBox />


                    {/*card*/}
                    <CardCreateStory />


                    {/*How to use*/}
                    <HowToUse />

                </ScrollView>

            </View>

        );
    }
}

