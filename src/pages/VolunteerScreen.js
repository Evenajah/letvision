import React from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';

// component
import { Icon, Button, Card } from 'react-native-elements'

//stylesheet
import styles from '../styles';
import Head from '../component/Head';

//chart
import Chart from '../component/Chart';
import ShowUserBox from '../component/ShowUserBox';
import HowToUse from '../component/HowToUse';



export default class VolunteerScreen extends React.Component {

    constructor (props) {
        super(props);

        this.state = {}

    }




    render() {



        return (
            <ScrollView style={styles.wrapVol}>

                <Head title="LetVision" />


                <View style={styles.wrapChart}>

                    <View style={styles.wrapTextVolSc}>

                        <Text style={styles.textVolSc}>อัตราส่วนผู้ใช้งาน</Text>

                    </View>
                    <Chart />
                </View>


                <ShowUserBox user={this.props.user} />




                <View>
                    <Card
                        containerStyle={{ width: Dimensions.get('window').width - 15, alignSelf: 'center' }}
                        title='เรื่องราว'
                        titleStyle={{ fontFamily: 'Kanit-Light', fontWeight: 'normal' }}
                        image={require('../images/volunteer.jpg')}>
                        <Text style={{ marginBottom: 10 }}>
                            The idea with React Native Elements is more about component structure than actual design.
                        </Text>
                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            backgroundColor='#03A9F4'
                            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='VIEW NOW'

                        />

                    </Card>

                </View>

                <HowToUse />

            </ScrollView>

        );
    }
}

