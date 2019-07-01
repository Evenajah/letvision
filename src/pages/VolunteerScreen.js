import React from 'react';
import { Text, View, Dimensions } from 'react-native';


//stylesheet
import styles from '../styles';
import Head from '../component/Head';

//chart
import Chart from '../component/Chart';



export default class VolunteerScreen extends React.Component {

    constructor (props) {
        super(props);

        this.state = {}

    }




    render() {



        return (
            <View style={styles.wrapVol}>

                <Head title="LetVision" />


                <View style={styles.wrapChart}>
                <Text>{'\n'}</Text>
                    <View style={styles.wrapTextVolSc}>

                        <Text style={styles.textVolSc}>อัตราส่วนผู้ใช้งาน</Text>

                    </View>
                    

                    <Chart />

                </View>


            </View>

        );
    }
}

