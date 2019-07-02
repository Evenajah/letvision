import React from 'react';
import { View, Dimensions } from 'react-native';

//chart
import { PieChart } from 'react-native-chart-kit';

// fire
import * as firebase from 'firebase';

// component
import Loading from '../pages/Loading';

// Stylesheet
import styles from '../styles';

export default class Chart extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            countVolunteer: 0,
            countBlind: 0,
            data: [],
            isLoading: false
        }
    }


    componentWillMount() {
        firebase.database().ref(`/users/`).once('value', (data) => {

            const response = data.toJSON();

            Object.values(response).forEach(item => {
                if (item.stat === 'Volunteer') {
                    this.setState({
                        countVolunteer: this.state.countVolunteer + 1
                    })
                } else if (item.stat === 'Blind') {
                    this.setState({
                        countBlind: this.state.countBlind + 1
                    })
                }
            })

        }).then(() => {

            this.setState({
                data: [
                    { name: 'อาสาสมัคร', population: this.state.countVolunteer, color: '#CD5C5C', legendFontColor: '#CD5C5C', legendFontSize: 12 },
                    { name: 'ผู้พิการทางสายตา', population: this.state.countBlind, color: '#FA8072', legendFontColor: '#CD5C5C', legendFontSize: 12 },
                ],
                isLoading: true
            })

        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <PieChart
                    data={this.state.data}
                    width={Dimensions.get('window').width - 15}
                    height={220}
                    chartConfig={{

                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 0.5) => `rgba(255, 255, 200, ${opacity})`,

                    }}
                    paddingRight={200}
                    accessor="population"
                    backgroundColor="#fff"
                    paddingLeft="2"
                    absolute={false}

                />
            );
        } else {
            return (
                <View style={styles.chart}>
                    <Loading />
                </View>
            );
        }


    }
}

