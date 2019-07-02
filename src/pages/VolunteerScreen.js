import React from 'react';
import { Text, View } from 'react-native';

// component
import { Icon } from 'react-native-elements'


//stylesheet
import styles from '../styles';
import Head from '../component/Head';

//chart
import Chart from '../component/Chart';
import ShowUserBox from '../component/ShowUserBox';



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
                   
                    <View style={styles.wrapTextVolSc}>

                        <Text style={styles.textVolSc}>อัตราส่วนผู้ใช้งาน</Text>

                    </View>
                    <Chart />
                </View>

                
                <ShowUserBox user={this.props.user}/>


            </View>

        );
    }
}

